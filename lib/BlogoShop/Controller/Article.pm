package BlogoShop::Controller::Article;

use Mojo::Base 'Mojolicious::Controller';

use BlogoShop::Item;
use utf8;

use constant ARTICLE_FILTER => qw(tag alias brand type);
use constant RSS_FIELDS => {map {$_ => 1} qw( name alias type preview_text preview_image date article_text_rendered ) };

sub show {
	my $self = shift;

	my $filter;
	$filter->{active} = 1 unless $self->session('admin'); # show inactive articles to admin, don't work on subdomain blog

	foreach (ARTICLE_FILTER) {
		$filter->{$_} = $self->stash($_) if $self->stash($_);
	}

	my $article = $self->articles->get_article($filter);

	return $self->redirect_to(($self->req->url =~ m/([\d\w\/]+?)\/[\d\w]+$/)[0]) if !$article;

	$article->{article_text} = $article->{article_text_rendered};

	if ($article->{group_id}) {
		my $group = BlogoShop::Group->new($article->{group_id});
		my $filter = {active => 1, group_id => $article->{group_id}};
		$filter->{'$or'} = [{'subitems.qty' => {'$gt' => 0}}, {'qty' => {'$gt' => 0}}];		
		my $items = $group->get_group_items($filter);
		$article->{items} = $items if @$items > 0;
	}

    $filter = {};
    $filter->{tags}->{'$in'} = $article->{tags} if $article->{tags};
    $filter->{brand} = $article->{brand} if $article->{brand};
	$self->stash(related_articles => $self->articles->get_related_articles(
		$filter, $self->config('related_articles_count'), $article->{'_id'})
	);

    $self->stash(next_article =>
        ($self->app->db->articles->find({_id => {'$lt' => $article->{'_id'}}, active => 1})->sort({_id => -1})->limit(1)->all)[0] || {});
    $self->stash(prev_article =>
        ($self->app->db->articles->find({_id => {'$gt' => $article->{'_id'}}, active => 1})->sort({_id => 1})->limit(1)->all)[0] || {});

	my $img_url = $self->config('image_url').($article->{type} || $self->config('default_img_dir')).'/'.$article->{alias}.'/';

	$self->stash(%$article);
	return $self->render(
		host => $self->req->url->base,
		cut => $self->stash('cut') || '',
		banners_h => $self->utils->get_banners($self, '', 240),
		img_url => $img_url,
		sex => '',
		page_name => ($article->{type} =~ /(post|special)/ ? 'blog' : $article->{type}),
		template => 'article',
		format => 'html',
	);
}

sub list {
	my $self = shift;

	my $filter->{active} = 1;
	foreach (ARTICLE_FILTER) {
		$filter->{$_} = $self->stash($_) if $self->stash($_);
	}

    if ($filter->{brand}) {
        my $brand = $self->app->db->brands->find_one({_id => $filter->{brand}});
#        return $self->redirect_to('/') if !$brand;
        $self->stash(brand => $brand);
    }
	my $art = $self->articles->get_filtered_articles($filter, $self->config('articles_on_page'), $self->stash('move'), $self->stash('id')||0);
	my $flag = 0;

	$self->res->headers->header('Cache-Control' => 'no-cache');

	return $self->render(
		host => $self->req->url->base,
		tag => $filter->{tag} || '', 
		type => $filter->{type} || '',
        brand => $self->stash('brand') || '',
        is_index => keys %$filter == 0 ? 1 : 0,
		articles => $art,
        banners => $self->utils->get_banners($self, ($filter->{type} ? 'type_'.$filter->{type} : '') , 680),
        banners_h => $self->utils->get_banners($self, ($filter->{type} ? 'type_'.$filter->{type} : ''), 240),
        page_name => (!$filter->{type} || $filter->{type} =~ /(post|special)/ ? 'blog' : $filter->{type}),
        template => $self->stash('move') && $self->req->headers->header('X-Requested-With') ? 'includes/list_articles' : 'blog', # return only
		format => 'html', 
	);
}

sub rss {
	my $self = shift;
	
	my @articles = $self->app->db->articles->find({"active"=>1})->fields(RSS_FIELDS)->sort({_id=>-1})->limit(10)->all;
#	$_->{_id} = $_->{_id}->{value} foreach (@articles);

	return $self->render(
		articles => \@articles,
		domain => 'http://blog.'.$self->config->{domain_name},
		template => 'rss', 
		format => 'xml',
	);
}

1;