package BlogoShop::Controller::Adminorders;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use BlogoShop::Item;
use BlogoShop::Courier;
use utf8;

use constant ORDER_FILTERS => qw (status id);
use constant ORDER_STATUS => qw (new proceed assembled finished canceled changed wait_delivery wait_courier self_delivery sent_courier sent_post sent_ems);
use constant ORDER_STATUS_NAME => {
	new => 'новый',
	proceed => 'в обработке',
	assembled => 'собран',
	wait_delivery => 'ожидает отправки',
	wait_courier => 'ожидает курьера',
	self_delivery => 'отложен/самовывоз',
	sent_courier => 'отправлен/курьером ',
	sent_post => 'отправлен/почта',
	sent_ems => 'отправлен/EMS',
	finished => 'выполнен',
	canceled => 'отменен',
	changed => 'изменен',
	deleted => 'удален',
};
use constant ORDERS_ON_PAGE => 30;
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
	$filter->{_id} = MongoDB::OID->new(value => delete $filter->{id}) if $filter->{id};

	# FETCH ALL ORDERS WITH FILTER TO COUNT SUM
    my $orders = [$self->app->db->orders->find($filter)->sort({_id => -1})->all];
    my $orders_sum = 0;
    foreach my $order (@$orders) {
            foreach (@{$order->{items}}) {
                    $orders_sum += $_->{price}*$_->{count};
            }
    }

    # FETCH ORDERS FOR PAGING
	$orders = [
		$self->app->db->orders->find($filter)->sort({_id => -1})->
			skip($skip)->limit(ORDERS_ON_PAGE)->all
	];
	my $item   = BlogoShop::Item->new($self);

	foreach my $order (@$orders) {
		foreach (@{$order->{items}}) {
			$_->{info} = $item->get($_->{_id}, $_->{sub_id});
			$order->{sum} += $_->{price}*$_->{count};
		}
		$order->{order_id} 	= ($order->{_id}->{value}=~/^(.{8})/)[0];
		$order->{order_id_full} 	= $order->{_id}->{value};
	}

	$self->stash('error_message' => $self->flash('error_message')) if $self->flash('error_message');
	$self->stash('message' => $self->flash('message')) if $self->flash('message');

	return $self->render( 
		%$filter,
        orders => $orders,
        orders_count => $orders_count,
        orders_sum => $orders_sum,
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

	my $old_order;
	for ($self->req->param('status')) { 
		$old_order = $self->app->db->orders->find_one({_id => MongoDB::OID->new(value => $self->stash('id'))});
		$self->app->db->orders->update({_id => MongoDB::OID->new(value => $self->stash('id'))}, {'$set' => {status => $_}})
			if $_ && $_ =~ /($status_regex)/;
		$self->app->db->orders->remove({_id => MongoDB::OID->new(value => $self->stash('id'))}) 
			if $_ && $_ eq 'delete' && $self->stash('admin')->{login} eq $self->config('order_delete_power');
	}
	if ($self->req->param('comment.title') || $self->req->param('comment.text') || $self->req->param('status')) {
		$self->app->db->orders->update(
			{_id => MongoDB::OID->new(value => $self->stash('id'))}, 
				{ '$push' => { comments => 
					{ login => $self->stash('admin')->{login}, title => $self->req->param('comment.title'), text => $self->req->param('comment.text')} 
				} }
		);
		my $vars = {order_id => $self->stash('id'),
					ord_сomment_title => ''.$self->req->param('comment.title'),
					ord_comment_text  => ''.$self->req->param('comment.text')};

		if ($self->req->param('status')) {
			$vars->{ord_status_new} = ORDER_STATUS_NAME->{$self->req->param('status')};
			$vars->{ord_status_old} = ORDER_STATUS_NAME->{$old_order->{status}};
		}

		$self->stash(%$vars);

		my $mail = $self->mail(
			to      => $self->config('superadmin_mail'),
			cc		=> 'xoxloveka.office@gmail.com',
			from    => 'noreply@'.$self->config('domain_name'),
			subject => 'Hовый комментарий в заказе №'.($self->stash('id')=~/^(.{8})/)[0],
			type 	=> 'text/html',
			format => 'mail',
			data => $self->render_mail(	template => 'admin/order_upd'),
			handler => 'mail',
		);
	}
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

	# return $self->render(text => 'oook');
	return $self->redirect_to('/admin/orders/'.$self->stash('status'));
	# return $self->redirect_to('/admin/orders');
}

sub qiwi_create_bill {
	my $self = shift;

	return $self->render(text => 'Error: no order id') if !$self->stash('id');
	my $order = $self->app->db->orders->find_one(
		{_id => MongoDB::OID->new(value => $self->stash('id'))}
	);
	my $bill = $self->qiwi->create_bill($order);

	return $self->redirect_to('/admin/orders/id'.$self->stash('id'));
}

1;