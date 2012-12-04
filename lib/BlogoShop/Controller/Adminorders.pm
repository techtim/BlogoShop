package BlogoShop::Controller::Adminorders;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use BlogoShop::Item;
use utf8;

use constant ORDER_FILTERS => qw (status);
use constant ORDER_STATUS => qw (new proceed finished canceled);
my $status_regex = join '|', ORDER_STATUS;

sub list {
	my $self = shift;
	
	my $filter = {};
	my $counter = 
		$self->app->db->run_command({
		group => {
			ns 		=> 'orders',
			key 	=> {status => 1}, 
			cond	=> {},
			'$reduce'	=> 'function(obj,prev) { prev.count++ }',
			initial	=> {count => 0},
		}}
	);
	$counter = {map {$_->{status} => $_->{count} } @{$counter->{retval}}};

	$self->stash($_) ? $filter->{$_} = $self->stash($_) : () foreach ORDER_FILTERS;
	my $orders = [$self->app->db->orders->find($filter)->sort({_id => -1})->all];
	my $item   = BlogoShop::Item->new($self);

	foreach my $order (@$orders) {
		foreach (@{$order->{items}}) {
			$_->{info} = $item->get($_->{_id}, $_->{sub_id});
			$order->{sum} += $_->{price}*$_->{count};
		}
		$order->{order_id} 	= ($order->{_id}->{value}=~/^(.{8})/)[0];
		$filter->{orders_sum} += $order->{sum};
	}

	return $self->render( 
		%$filter,
        orders => $orders,
        counter => $counter,
        host => $self->req->url->base,
        template => 'admin/orders',
        format => 'html',
    );
}

sub update {
	my $self = shift;

	for ($self->req->param('status')) { 
		$self->app->db->orders->update({_id => MongoDB::OID->new(value => $self->stash('id'))}, {'$set' => {status => $_}})
			if $_ && $_ =~ /($status_regex)/ && $self->stash('admin')->{type} eq 'super';
		$self->app->db->orders->remove({_id => MongoDB::OID->new(value => $self->stash('id'))}) 
			if $_ && $_ eq 'delete' && $self->stash('admin')->{login} eq $self->config('order_delete_power');
	}
	$self->app->db->orders->update(
		{_id => MongoDB::OID->new(value => $self->stash('id'))}, 
			{ '$push' => { comments => 
				{ login => $self->stash('admin')->{login}, title => $self->req->param('comment.title'), text => $self->req->param('comment.text')} 
			} }
	) if $self->req->param('comment.title') || $self->req->param('comment.text');

	return $self->redirect_to('/admin/orders');
}
1;