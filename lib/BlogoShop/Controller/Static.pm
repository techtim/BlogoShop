package BlogoShop::Controller::Static;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();

use utf8;

#use constant ARTICLE_FILTER => qw(cut rubric alias);

sub show {
    my $c = shift;
    my $page = $c->app->db->statics->find_one({alias => $c->stash('template')});

    return $c->render(
        %$page,
        type => '',
        banners_h => $c->utils->get_banners($c, '', 240),
        host => $c->req->url->base,
        page_name => $c->stash('template'),
        template => 'static',
        format => 'html',
	);
}


1;