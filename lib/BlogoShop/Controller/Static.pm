package BlogoShop::Controller::Static;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use Captcha::reCAPTCHA ();

use utf8;

#use constant ARTICLE_FILTER => qw(cut rubric alias);

sub show {
    my $self = shift;

    $self->stash(
        list_brands => $self->utils->get_list_brands($self->app->db),
        categories => [$self->app->db->categories->find({})->all],
    );

    return $self->render(
        alias => $self->stash('template'),
	type => '',
	host => $self->req->url->base,
        format => 'html',
	);
}

1;
