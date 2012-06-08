package BlogoShop::Controller::Adminarticle;

use Mojo::Base 'Mojolicious::Controller';

use strict;
use warnings;
use utf8;

use File::Path qw(make_path remove_tree);
use Encode;
use constant ARTICLE_PARAMS => qw( active alias name type brand preview_size preview_type preview_text preview_image preview_image_wide article_text images source article_time article_date);

sub get {
	my $self = shift;

	$self->{collection} = $self->stash('collection') || 'articles';
	foreach (@{$self->req->cookies}){
		$self->stash('sid' => $_->value) if $_->{name} eq $self->config('cookie_name');
	}

	return # if no id(='add') move to add
		$self->stash('id') eq 'add' ? 
			$self->add() :
			$self->edit();	
}

sub post {
	my $self = shift;

	$self->{collection} = $self->stash('collection') || 'articles';
	return $self->write_file() if $self->req->param('flash_file');
	return # if no id(='add') move to create
		$self->stash('id') eq 'add' ?
			$self->create() :
			$self->update() ;
}

# Utils
sub add_params {
	my $self = shift;
	$self->stash(brands => $self->app->db->brands->find());
	$self->stash(tags => $self->articles->get_tags());
}

sub check_input {
	my ($self, $article) = @_;
	
	my $error_message = [];
	
	($self->req->param($_) ? $article->{$_} = $self->req->param($_) : ()) foreach ARTICLE_PARAMS;
	
	$article->{active} = '0' if !$article->{active};
	
	$article->{preview_text} =~ s/\r|(\r?\n)+$|\ +$//g if $article->{preview_text};
	$article->{article_text} =~ s/\r//g if $article->{article_text};

    { # shitty "Malformed UTF-8 character"
    	no warnings;
		$article->{preview_text} =~ s/\&raquo;|\&laquo;|\x{ab}|\x{bb}/\"/g if $article->{preview_text};
		$article->{article_text} =~ s/\&raquo;|\&laquo;|\x{ab}|\x{bb}/\"/g if $article->{article_text};
    };
	
	# creaete new mongo format id from new timestamp
	$article->{new_id} = $self->utils->update_mongoid_with_time($self->stash('id'), $article->{article_date}, $article->{article_time}) if $article->{article_date} && $article->{article_time}; 

	$article->{alias} = lc($self->utils->translit($article->{name}));
	$article->{alias} =~ s![\s\/\\]+!_!g;
	$article->{alias} =~ s![^\w\d\_]+|\_$|^\_!!g;
	$article->{alias} =~ s!\_+!_!g;
	$article->{alias} .= $self->articles->check_existing_alias($self->stash('id') || '', $article);
	
	$article->{author_info} = ($article->{author} ? $self->articles->get_authors($article->{author}) : '');
	
	if ($self->{collection} eq 'articles') {
		# treat like article with collection = 'articles'

		$article->{preview_size} = 50 if !$article->{preview_size};
		$article->{preview_image_wide} = '' if !$article->{preview_image_wide};
		$article->{preview_image} = '' if !$article->{preview_image};

		$article->{cut_alias} = $self->articles->get_cuts($article->{cut});
		$article->{rubric_alias} = $self->articles->get_rubrics($article->{rubric}) if $article->{rubric};

		$article->{polls} = $self->utils->get_polls($article);
	
		$article->{source_info} = $self->articles->get_sources($article->{source}) if $article->{source};

		push @$error_message, 'no_type' if !$article->{type};
#		push @$error_message, 'no_source' if !$article->{source_info};
		push @$error_message, 'no_preview_text' if !$article->{preview_text} || $article->{preview_text} eq '';
#		push @$error_message, 'no_author' if !$article->{author_info};
	} elsif ($self->{collection} eq 'big_games_news'){
		$article->{preview_image} = '' if !$article->{preview_image};

		$article->{city} = $self->app->db->big_games_cities->find_one({_id =>  $self->req->param('city')})
			if $self->req->param('city') && $self->req->param('city') =~ /([\w]+)/i;

		push @$error_message, 'no_city' if !$article->{city};
		push @$error_message, 'no_preview_text' if !$article->{preview_text} || $article->{preview_text} eq '';
	} else {
		push @$error_message, 'no_author' if !$article->{author_info};
	}

	$article->{date} = $self->utils->date_from_mongoid($self->stash('id')) if $self->stash('id');

	push @$error_message, 'no_article_name' if !$article->{name} || $article->{name} eq '';
	push @$error_message, 'no_article_text' if !$article->{article_text} || $article->{article_text} eq '';
	$article->{active} = 0,	$self->stash('error_message' => $error_message) if @$error_message > 0; 

	if (@$error_message > 0) {
		$self->flash('error_message' => $error_message);
		$self->redirect_to('/admin/article/edit/'.$self->stash('id')) if $self->stash('id');
	}
}

sub get_images {
	my ($self, $name, $article) = @_;

	my $images = [];
	my @image_descr = $self->req->param($name.'_descr');
	my @image_source= $self->req->param($name.'_source');

	my %image_delete = map {$_ => 1} $self->req->param($name.'_delete');

	# Collect already uploaded files
	foreach ($self->req->param($name.'_tag')) {
		my $tmp = {tag => $_, descr => shift @image_descr, source => shift @image_source};
		$tmp->{descr} =~ s/\"/&quot;/g;
		$tmp->{source} =~ s/\"/&quot;/g; 
		push @$images, $tmp unless $image_delete{$_}; 
	}

	# Collect new files
	foreach my $file ($self->req->upload($name)) {
		next unless $file->filename || $file->filename =~ /\.(jpg|jpeg|bmp|gif|png|tif|swf|flv)$/i;;

		my $image = {};
		$image->{tag} = (time() =~ /(\d{5})$/)[0].'_'.lc($self->utils->translit($file->filename));
		$image->{tag} =~ s![\s\/\\]+!_!g;
		$image->{tag} =~ s![^\w\d\.\_]+!!g;

		my $folder_path = $self->config('image_dir').
			($article->{rubric} ? $article->{rubric} : $self->config('default_img_dir')).'/'.
			($article->{alias} ? $article->{alias} : $self->config('default_img_dir')).'/';
		make_path($folder_path) or die 'Error on creating article folder:'.$folder_path.' -> '.$! unless (-d $folder_path);
		$file->move_to($folder_path.$image->{tag});

		$image->{descr} = shift @image_descr;
		$image->{descr} =~ s/\"/&quot/g;
		$image->{source}= shift @image_source;
		$image->{source} =~ s/\"/&quot/g;
		push @$images, $image;
	}

	return $images if @$images>0;
	return 0;
}

# Handlers
sub add {
	my $self = shift;

	$self->add_params();

	$self->stash($_ => '') foreach ARTICLE_PARAMS;
 	$self->stash(cities => [$self->app->db->big_games_cities->find({})->sort({'_id' => 1})->all], city => '')
 		if $self->{'collection'} eq 'big_games_news';

	$self->render(
		action_type => 'add',
		template => 'admin/' . ($self->{'collection'} ne 'articles' ? $self->{'collection'} : 'article'),
		format => 'html',
	);
}

sub create {
	my $self = shift;
	my $article = {};

	$self->check_input($article);
	$article->{images} = $self->get_images('image', $article);
	$article->{article_text_rendered} = $self->utils->render_article($self, $article);

	my $id = $self->articles->add_article($article, $self->{collection});

	$self->articles->block_article($id, $self->session('admin')->{_id}, $self->{collection});

	$self->utils->update_active_rubrics($self) if $self->{'collection'} eq 'articles';

	return $self->redirect_to('/admin/' . ($self->{collection} ne 'articles' ? $self->{collection} : 'article') . '/edit/'.$id) if $self->stash('error_message');
	return $self->redirect_to('/admin/' . ($self->{collection} ne 'articles' ? $self->{collection} : 'article') . '/edit/'.$id) if $self->req->param('update');
	$self->flash('message' => 'article_added');
	$self->flash('id' => $id);

	return $self->redirect_to('/admin/' . $self->{collection});
}

sub edit {
	my $self= shift;

	$self->add_params();

	my $article = $self->articles->get_article_by_id($self->stash('id'), $self->{collection});

	if (!$article) {
		$self->flash('error_message' => ['no_article']);
		return $self->redirect_to('/admin/'.$self->{collection});
	}
	# check if article is blocked
	if ( $article->{block}->{time} && $article->{block}->{time} > time() && $article->{block}->{admin_id} ne $self->session('admin')->{_id} ) {
		$self->flash('error_message' => ['article_blocked']);
		return $self->redirect_to('/admin/' . $self->{collection});
	}
	$self->articles->block_article($self->stash('id'), $self->session('admin')->{_id}, $self->{collection});
	$article->{$_} = ($article->{$_} ? $article->{$_} : '') foreach ARTICLE_PARAMS;
	($article->{article_date}, $article->{article_time}) = $self->utils->date_time_from_mongoid($self->stash('id'));

	$self->stash('error_message' => $self->flash('error_message')) if $self->flash('error_message');

	$self->stash(cities => [$self->app->db->big_games_cities->find({})->sort({'_id' => 1})->all], city => '')
 		if $self->{'collection'} eq 'big_games_news';

	$self->render(
		%$article,
		id => $article->{_id}->{value},
		action_type => 'edit',
		template => 'admin/' . ($self->{collection} ne 'articles' ? $self->{collection} : 'article'),
		format => 'html',
	);	
}
		
sub update {
	my $self = shift;
	
	my $article = {};

	$self->stash('id' => $self->req->param('id')) if !$self->stash('id');

	if (!$self->stash('id')){
		$self->flash('error_message' => ['no_article']);
	}
	elsif ( $self->req->param('delete')) {
		$self->articles->remove_article($self->stash('id'), $self->{collection});
		$self->flash(message => 'article_removed');
	} else {
		$self->check_input($article);

		$article->{images} = $self->get_images('image', $article);
		$article->{article_text_rendered} = $self->utils->render_article($self, $article);

		if ($self->stash('error_message')) {
			my $id = $self->articles->update_article($self->stash('id'), $article, $self->{collection});
			return $self->redirect_to('/admin/' . ($self->{collection} ne 'articles' ? $self->{collection} : 'article') . '/edit/' . $id);
		}

		my $id = $self->articles->update_article($self->stash('id'), $article, $self->{collection}); # id can change when change article time

		$self->utils->update_active_rubrics($self) if $self->{collection} eq 'articles';

		$self->flash(message => 'article_updated');
		if ($self->req->param('update')) {
			$self->articles->block_article($id, $self->session('admin')->{_id}, $self->{collection});
			return $self->redirect_to('/admin/' . ($self->{collection} ne 'articles' ? $self->{collection} : 'article') . '/edit/' . $id) ;
		}
		$self->articles->unblock_article($id, $self->{collection}); # when save and return to list
	}

	return $self->redirect_to('/admin/' . ($self->{collection}? $self->{collection} : 'articles'));
}

sub list {
	my $self = shift;

	$self->add_params();

	my $filter = {};
	my $page = $self->req->param('page') ? $self->req->param('page') : 1;

	$filter->{cut} = $self->req->param('cut') if $self->req->param('cut');
	$filter->{rubric} = $self->req->param('rubric') if $self->req->param('rubric'); 
	$self->stash('message' => $self->flash('message')) if $self->flash('message');
	$self->stash('error_message' => $self->flash('error_message')) if $self->flash('error_message');

	my @arts = $self->app->db->articles->find($filter)->
		skip(($page-1)*($self->config('articles_on_admin_page')||30))->
		limit($self->config('articles_on_admin_page')||30)->
		sort({'_id' => -1})->all;
	my $pages = $self->app->db->articles->find($filter)->count/($self->config('articles_on_admin_page')||30);
	$pages = $pages - int($pages) > 0 ? int($pages)+1 : $pages;

	return $self->render(
		cut => $filter->{cut} || '', 
		rubric => $filter->{rubric} || '',
		articles => \@arts,
		pages => $pages || 0,
		template => 'admin/list_articles',
		format => 'html',
	);
}

sub list_news {
	my $self = shift;

	my $page = $self->req->param('page') ? $self->req->param('page') : 1;

	my @news = $self->app->db->news->find({})->
		skip(($page-1)*($self->config('articles_on_admin_page')||30))->
		limit($self->config('articles_on_admin_page')||30)->
		sort({'_id' => -1})->all;

	my $pages = $self->app->db->news->find({})->count/($self->config('articles_on_admin_page')||30);
	$pages = $pages - int($pages) > 0 ? int($pages)+1 : $pages;

	return $self->render(
		articles => \@news,
		pages => $pages || 0,
		template => 'admin/list_news',
		format => 'html',
	);
}

sub list_videos {
	my $self = shift;
	my $page = $self->req->param('page') ? $self->req->param('page') : 1;
	my @videos = $self->app->db->vik_users->find({video_code => {'$exists' => 'true'}, stage => 0+$page})->sort({'_id' => 1})->all;

	if ($self->stash('post')) {
		foreach (@videos) {
				my $flag = $_->{active} || 'fresh';
				$_->{active} = $self->req->param($_->{_id}) ? 1 : 0 ;
				$_->{name} = $self->req->param('name_'.$_->{_id}) || '';
				$_->{alias} = $self->utils->translit($_->{name}) if $_->{name};

				$self->app->db->vik_users->update({_id => 0+$_->{_id}}, {'$set' => {active => $_->{active}}});
				my $ua = LWP::UserAgent->new();
				my $res = $ua->get("http://iinlondon2012.vasmedia.ru/iin/add?msisdn=".$_->{_id}) if $_->{active} == 1 && $flag eq 'fresh'; 
		}
	}

	return $self->render(
		videos => \@videos,
		pages => 3,
		template => 'admin/list_videos',
		format => 'html',
	);
}

sub list_big_games {
	my $self= shift;
	my $page = $self->req->param('page') ? $self->req->param('page') : 1;
	
	my @big_games_news = $self->app->db->big_games_news->find({})->
		skip(($page-1)*($self->config('articles_on_admin_page')||30))->
		limit($self->config('articles_on_admin_page')||30)->
		sort({'_id' => -1})->all;

	my $pages = $self->app->db->big_games_news->find({})->count/($self->config('articles_on_admin_page')||30);
	$pages = $pages - int($pages) > 0 ? int($pages)+1 : $pages;

	return $self->render(
		articles => \@big_games_news,
		pages => $pages || 0,
		template => 'admin/list_big_games',
		format => 'html',
	);
}

# Special
sub show_article_previews {
	my $self= shift;
	my $article = $self->articles->get_article_by_id($self->stash('id'));
	
	return $self->render(
		article => $article,
		template => 'admin/article_previews',
		format => 'html',
	);
}

# Auto rerender all articles if needed
sub render_all { 
	my $self = shift;
	$self->articles->render_all_articles($self);
	return $self->redirect_to('/admin/articles');
}
1;