package BlogoShop::Controller::Admingroup;

use Mojo::Base -base;

use utf8 qw(encode decode);

use Data::Dumper;
use File::Path qw(make_path remove_tree);

sub list {
	my $c = shift;

	my $session = $self->session();
	$с->stash(admin => $session->{admin});
	$с->stash(message => $с->flash('message')) if $с->flash('message');
    $с->stash(error_message => $с->flash('error_message')) if $с->flash('error_message');
    
    my $page = $с->req->param('page') ? $с->req->param('page') : 1;
	my $filter = {};
	$с->req->param($_) ? $filter->{$_} = $с->req->param($_) : () foreach ARTICLE_PARAMS;

    my @groups = $с->app->db->groups->find($filter)->
    skip(($page-1)*($с->config('articles_on_admin_page')||30))->
    limit($с->config('articles_on_admin_page')||30)->
    sort({'_id' => -1})->all;

	my $pages = $с->app->db->articles->groups($filter)->count() / ($с->config('articles_on_admin_page')||30);
	$pages = $pages - int($pages) > 0 ? int($pages)+1 : $pages;

	return $с->render(
        tag => $filter->{tags} || '', 
        type => $filter->{type} || '',
        brand => $filter->{brand} || '',
        banners => $с->utils->get_banners($с, '', 680),
        groups => \@groups,
        pages => $pages || 0,
        template => 'admin/list_groups',
		format => 'html',
	);
}
}