package BlogoShop::Controller::Adminorders;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use BlogoShop::Item;
use BlogoShop::Courier;
use utf8;

use constant ORDER_FILTERS => qw (status);
use constant ORDER_STATUS => qw (new proceed assembled finished canceled changed wait_delivery wait_courier self_delivery sent_courier sent_post sent_ems);
use constant ORDERS_ON_PAGE => 10;
my $status_regex = join '|', ORDER_STATUS;

sub list {
	my $self = shift;
	
	my $filter = {};
	my $counter = 
		$self->app->db->run_command({
		group => {
			ns		=> 'orders',
			key		=> {status => 1}, 
			cond	=> {},
			'$reduce' => 'function(obj,prev) { prev.count++ }',
			initial	=> {count => 0},
		}}
	);

	my $orders_count = $counter->{count};

	$counter = {map {$_->{status} => $_->{count} } @{$counter->{retval}}};

	# Paging
    my $skip = ORDERS_ON_PAGE *
       ($self->req->param('page') && $self->req->param('page') =~ /(\d+)/ ? ($1>0 ? $1-1 : 0) : 0);

    my $pager_url  =  $self->req->url->path->to_string.'?'.$self->req->url->query->to_string;
    $pager_url =~ s!csrftoken=[^\&]+\&?!!;
    $pager_url =~ s!\&?page=\d+\&?!!;
    $pager_url .= $pager_url =~ m!\?$! ? '' : '&';

	$self->stash($_) ? $filter->{$_} = $self->stash($_) : () foreach ORDER_FILTERS;
	my $orders = [
		$self->app->db->orders->find($filter)->sort({_id => -1})->
			skip($skip)->limit(ORDERS_ON_PAGE)->all
	];
	my $item   = BlogoShop::Item->new($self);

	$filter->{orders_sum} = 0;
	foreach my $order (@$orders) {
		foreach (@{$order->{items}}) {
			$_->{info} = $item->get($_->{_id}, $_->{sub_id});
			$order->{sum} += $_->{price}*$_->{count};
		}
		$order->{order_id} 	= ($order->{_id}->{value}=~/^(.{8})/)[0];
		$filter->{orders_sum} += $order->{sum};
	}

	$self->stash('error_message' => $self->flash('error_message')) if $self->flash('error_message');
	$self->stash('message' => $self->flash('message')) if $self->flash('message');

	return $self->render( 
		%$filter,
        orders => $orders,
        orders_count => $orders_count,
        counter => $counter,
        cur_page  => $self->req->param('page') || 1,
        pages => int( 0.99 + ( $filter->{status} ? $counter->{$filter->{status}} : $orders_count ) / ORDERS_ON_PAGE ),
        pager_url  => $pager_url,
        host => $self->req->url->base,
        template => 'admin/orders',
        format => 'html',
    );
}

sub update {
	my $self = shift;

	for ($self->req->param('status')) { 
		$self->app->db->orders->update({_id => MongoDB::OID->new(value => $self->stash('id'))}, {'$set' => {status => $_}})
			if $_ && $_ =~ /($status_regex)/;
		$self->app->db->orders->remove({_id => MongoDB::OID->new(value => $self->stash('id'))}) 
			if $_ && $_ eq 'delete' && $self->stash('admin')->{login} eq $self->config('order_delete_power');
	}
	$self->app->db->orders->update(
		{_id => MongoDB::OID->new(value => $self->stash('id'))}, 
			{ '$push' => { comments => 
				{ login => $self->stash('admin')->{login}, title => $self->req->param('comment.title'), text => $self->req->param('comment.text')} 
			} }
	) if $self->req->param('comment.title') || $self->req->param('comment.text');

	$self->call_courier() if $self->req->param('courier');

	return $self->redirect_to('/admin/orders/'.$self->stash('status'));
}

sub call_courier {
	my $self = shift;

	my $order = $self->app->db->orders->find_one(
		{_id => MongoDB::OID->new(value => $self->stash('id'))}
	);
	$self->courier->call($order) ? 
		$self->flash(message => 'courier_called') :
		$self->flash(error_message => ['courier_failed']);

	$self->app->db->orders->update(
		{_id => MongoDB::OID->new(value => $self->stash('id'))},
		{'$set' => {courier_called => 1}}
	);
warn 'COUR';

	# return $self->render(text => 'oook');
	return $self->redirect_to('/admin/orders/'.$self->stash('status'));
	# return $self->redirect_to('/admin/orders');
}

1;