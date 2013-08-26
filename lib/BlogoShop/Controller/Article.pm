package BlogoShop::Controller::Article;

use Mojo::Base 'Mojolicious::Controller';

use BlogoShop::Item;
use utf8;

use constant ARTICLE_FILTER => qw(tag alias brand type);
use constant RSS_FIELDS => {map {$_ => 1} qw( name alias type preview_text preview_image date article_text_rendered ) };

sub show {
	my $c = shift;

	my $filter;
	$filter->{active} = 1 unless $c->session('admin'); # show inactive articles to admin, don't work on subdomain blog

	foreach (ARTICLE_FILTER) {
		$filter->{$_} = $c->stash($_) if $c->stash($_);
	}

	my $article = $c->articles->get_article($filter);

	return $c->redirect_to(($c->req->url =~ m/([\d\w\/]+?)\/[\d\w]+$/)[0]) if !$article;

	$article->{article_text} = $article->{article_text_rendered};

    $filter = {};
    $filter->{tags}->{'$in'} = $article->{tags} if $article->{tags};
    $filter->{brand} = $article->{brand} if $article->{brand};
	$c->stash(related_articles => $c->articles->get_related_articles(
		$filter, $c->config('related_articles_count'), $article->{'_id'})
	);

    $c->stash(next_article =>
        ($c->app->db->articles->find({_id => {'$lt' => $article->{'_id'}}, active => 1})->sort({_id => -1})->limit(1)->all)[0] || {});
    $c->stash(prev_article =>
        ($c->app->db->articles->find({_id => {'$gt' => $article->{'_id'}}, active => 1})->sort({_id => 1})->limit(1)->all)[0] || {});

	my $img_url = $c->config('image_url').($article->{type} || $c->config('default_img_dir')).'/'.$article->{alias}.'/';
	# Polls check
#	foreach (keys %{$article->{polls}}) {
#		$article->{polls}->{$_}->{total_count} = 0;
#		foreach my $key (keys %{$article->{polls}->{$_}->{answers}}) {
#			$article->{polls}->{$_}->{total_count} += $article->{polls}->{$_}->{answers}->{$key}->{count} || 0;
#		}
#		my $poll_html = $c->render( template => 'includes/poll_block', partial => 1, poll => $article->{polls}->{$_}, img_url => $img_url, %$article );
#		$article->{polls}->{$_}->{question} =~ s/([;\?\:\!\.\-\+\*])/\\$1/gi;
#		my $que = qr/<poll=\"$article->{polls}->{$_}->{question}\">.+?<\/poll>/;
#		$article->{article_text} =~ s/$que/$poll_html/s;
#	}
	$article->{date_published} = $c->utils->date_format_from_mongoid(''.$article->{_id});

	$c->stash(%$article);
	return $c->render(
		host => $c->req->url->base,
		cut => $c->stash('cut') || '',
		banners_h => $c->utils->get_banners($c, '', 240),
		img_url => $img_url,
		sex => '',
		page_name => 'blog',
		template => 'article',
		format => 'html',
	);
}

sub list {
	my $c = shift;

	my $filter->{active} = 1;
	foreach (ARTICLE_FILTER) {
		$filter->{$_} = $c->stash($_) if $c->stash($_);
	}

    if ($filter->{brand}) {
        my $brand = $c->app->db->brands->find_one({_id => $filter->{brand}});
#        return $c->redirect_to('/') if !$brand;
        $c->stash(brand => $brand);
    }
	my $art = $c->articles->get_filtered_articles($filter, $c->config('articles_on_page'), $c->stash('move'), $c->stash('id')||0);
	my $flag = 0;

	$c->res->headers->header('Cache-Control' => 'no-cache');

	return $c->render(
		host => $c->req->url->base,
		tag => $filter->{tag} || '', 
		type => $filter->{type} || '',
        brand => $c->stash('brand') || '',
        is_index => keys %$filter == 0 ? 1 : 0,
		articles => $art,
        banners => $c->utils->get_banners($c, '', 680),
        banners_h => $c->utils->get_banners($c, '', 240),
        page_name => 'blog',
        template => $c->stash('move') && $c->req->headers->header('X-Requested-With') ? 'includes/list_articles' : 'blog', # return only
		format => 'html', 
	);
}

sub rss {
	my $c = shift;
	
	my @articles = $c->app->db->articles->find({"active"=>1})->fields(RSS_FIELDS)->sort({_id=>-1})->limit(10)->all;
#	$_->{_id} = $_->{_id}->{value} foreach (@articles);

	return $c->render(
		articles => \@articles,
		domain => 'http://blog.'.$c->config->{domain_name},
		template => 'rss', 
		format => 'xml',
	);
}

sub check_is_item_url {
	my $c = shift;

	my $url = $c->req->url->to_abs;
	$url =~ s/blog\.//;
	$url =~ m!ru/([^\/\?]+)!;
	my $fir = $1;

	my $bind_static = join '|', map {$_->{alias}} $c->app->db->statics->find({})->fields({_id=>0,alias=>1})->all;
	$bind_static .= '|' . (join '|', qw(tag brand));

	if ($c->stash('categories_alias')->{$fir} || $fir =~ /($bind_static)/) {
		$c->res->code(301);
		return $c->redirect_to($url);
	}
	$c->stash(page_name => '');
	return $c->render_not_found;
}

1;