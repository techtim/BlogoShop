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
	my $counter = {};
	$self->stash($_) ? $filter->{$_} = $self->stash($_) : () foreach ORDER_FILTERS;
	my $orders = [$self->app->db->orders->find($filter)->sort({_id => -1})->all];
	my $item 	  = BlogoShop::Item->new($self);

	foreach (@$orders) {
		foreach (@{$_->{items}}) {
			$_->{info} = $item->get($_->{_id}, $_->{sub_id});
		}
		$counter->{$_->{status}}++ if $_->{status};
		# $item->get();
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
			if $_ && $_ =~ /($status_regex)/;
	}
	return $self->redirect_to('/admin/orders');
}
1;