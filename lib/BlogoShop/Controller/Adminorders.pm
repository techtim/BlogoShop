package BlogoShop::Controller::Adminorders;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use BlogoShop::Item;
use utf8;

sub list {
	my $self = shift;
	
	my $filter = {};

	return $self->render(
		%$filter,
        orders => [$self->app->db->orders->find($filter)->sort({_id => -1})->all],
        host => $self->req->url->base,
        template => 'admin/orders',
        format => 'html',
    );
}

sub update {
	my $self = shift;

	for ($self->req->param('status')) { 
		$self->app->db->orders->update({_id => MongoDB::OID->new(value => $self->stash('id'))}, {'$set' => {status => $_}})
			if $_ || $_ =~ /(new|proceed|finished)/;
	}
	return $self->redirect_to('/admin/orders');
}
1;