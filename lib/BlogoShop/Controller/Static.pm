package BlogoShop::Controller::Static;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use XML::Simple ();
use Captcha::reCAPTCHA ();

use utf8;

#use constant ARTICLE_FILTER => qw(cut rubric alias);

sub show {
    my $self = shift;

    return $self->render(
        host => $self->req->url->base,
        format => 'html',
	);
}

1;