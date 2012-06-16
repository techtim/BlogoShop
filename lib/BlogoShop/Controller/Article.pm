package BlogoShop::Controller::Article;

use Mojo::Base 'Mojolicious::Controller';

use utf8;

use constant ARTICLE_FILTER => qw(cut rubric alias);
use constant RSS_FIELDS => {map {$_ => 1} qw( name alias cut cut_alias rubric rubric_alias preview_text preview_image date article_text_rendered ) };

sub show {
	my $self = shift;

	my $filter;
	$filter->{active} = "1" unless $self->session('admin'); # show inactive articles to admin
	foreach (ARTICLE_FILTER) {
		$filter->{$_} = $self->stash($_) if $self->stash($_);
	}
	my $article = $self->articles->get_article($filter);

	return $self->redirect_to(($self->req->url =~ m/([\d\w\/]+?)\/[\d\w]+$/)[0]) if !$article;
	
	$article->{preview_text} =~ s/\r//g; # temporary  

	# Temporary add date while no such field in db
	$article->{date} = $self->utils->date_from_mongoid($article->{_id});# if !$article->{date};
	$article->{article_text_rendered} = $self->utils->render_article($self, $article) if !$article->{article_text_rendered};

	$article->{article_text} = $article->{article_text_rendered};

	delete $filter->{alias};
	$self->stash(related_articles => $self->articles->get_related_articles(
		$filter, $self->config('related_articles_count'), $article->{'_id'})
	);

	my %images = map { $_->{tag} => {descr => $_->{descr}, source => $_->{source}} } @{$article->{images}} if ref $article->{images} eq 'ARRAY';

	my $img_url = $self->config('image_url').($article->{rubric}|| $self->config('default_img_dir')).'/'.$article->{alias}.'/';
	# Polls check
	foreach (keys %{$article->{polls}}) {
		$article->{polls}->{$_}->{total_count} = 0;
		foreach my $key (keys %{$article->{polls}->{$_}->{answers}}) {
			$article->{polls}->{$_}->{total_count} += $article->{polls}->{$_}->{answers}->{$key}->{count} || 0;
		}
		my $poll_html = $self->render( template => 'includes/poll_block', partial => 1, poll => $article->{polls}->{$_}, img_url => $img_url, %$article );
		$article->{polls}->{$_}->{question} =~ s/([;\?\:\!\.\-\+\*])/\\$1/gi;
		my $que = qr/<poll=\"$article->{polls}->{$_}->{question}\">.+?<\/poll>/;
		$article->{article_text} =~ s/$que/$poll_html/s;
	}

	$self->stash(%$article);

	return $self->render(
		host => $self->req->url->base,
		cut => $self->stash('cut') || '',
		img_url => $img_url,
		template => 'article',
		format => 'html',
	);
}

sub list {
	my $self = shift;

	my $filter->{active} = "1";
	foreach (ARTICLE_FILTER) {
		$filter->{$_} = $self->stash($_) if $self->stash($_);
	}

	my $art = $self->articles->get_filtered_articles($filter, $self->config('articles_on_page'), $self->stash('move'), $self->stash('id')||0);
	my $flag = 0;
	foreach (@$art) {
		if ($flag) {
			$_->{preview_size} = '50';
			$flag = !$flag;
		} else {
			$flag = !$flag if defined $_->{preview_size} && $_->{preview_size} eq '50'; # set flag that we have 50% width article, to make next width 50% 
			$_->{preview_size} = '100' if $art->[-1]->{_id} eq $_->{_id}; # make 100% width if article is last and haven't got pair
		}
	}

	$self->res->headers->header('Cache-Control' => 'no-cache');

	return $self->render(
		host => $self->req->url->base,
		cut => $filter->{cut} || '', 
		rubric => $filter->{rubric} || '',
		articles => $art,
		template => $self->stash('move') && $self->req->headers->header('X-Requested-With') ? 'includes/list_articles' : 'index', # return only
		format => 'html', 
	);
}

sub rss {
	my $self = shift;
	
	my @articles = $self->app->db->articles->find({"active"=>"1"})->fields(RSS_FIELDS)->sort({_id=>-1})->limit(10)->all;
#	$_->{_id} = $_->{_id}->{value} foreach (@articles);

	return $self->render(
		articles => \@articles,
		domain => $self->req->url->base,
		template => 'rss', 
		format => 'xml',
	);
}

1;