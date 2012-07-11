package BlogoShop::Controller::Static;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use Captcha::reCAPTCHA ();

use utf8;

#use constant ARTICLE_FILTER => qw(cut rubric alias);

sub show {
    my $self = shift;
    my $page = $self->app->db->statics->find_one({alias => $self->stash('template')});
    return $self->render(
        %$page,
        type => '',
        host => $self->req->url->base,
        template => 'static',
        format => 'html',
	);
}

1;
