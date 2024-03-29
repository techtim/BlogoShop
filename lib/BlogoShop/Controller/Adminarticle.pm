package BlogoShop::Controller::Adminarticle;

use Mojo::Base 'Mojolicious::Controller';

use strict;
use warnings;
use utf8;

use File::Path qw(make_path remove_tree);
use Encode;
use constant ARTICLE_PARAMS => qw( active alias name type brand preview_size tags preview_text preview_image preview_image_wide article_text images source article_time article_date group_id);

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

sub check_input {
	my ($self, $article) = @_;
	
	my $error_message = [];
	
	($self->req->param($_) ? $article->{$_} = $self->req->param($_) : ()) foreach ARTICLE_PARAMS;

	$article->{active} += 0;
	
	$article->{preview_text} =~ s/\r|(\r?\n)+$|\ +$//g if $article->{preview_text};
	$article->{article_text} =~ s/\r//g if $article->{article_text};
	
	{ # shitty "Malformed UTF-8 character"
		no warnings;
		$article->{preview_text} =~ s/\&raquo;|\&laquo;|\x{ab}|\x{bb}/\"/g if $article->{preview_text};
		$article->{article_text} =~ s/\&raquo;|\&laquo;|\x{ab}|\x{bb}/\"/g if $article->{article_text};
	};

	$article->{brand} = $self->req->param('brand') ? [$self->req->param('brand')] : [];

	# creaete new mongo format id from new timestamp
	$article->{new_id} = $self->utils->update_mongoid_with_time($self->stash('id'), $article->{article_date}, $article->{article_time}) 
	if $article->{article_date} && $article->{article_time}; 

	#	$article->{author_info} = ($article->{author} ? $self->articles->get_authors($article->{author}) : '') if $article->{author};

	if ($self->{collection} eq 'articles') {
		# treat like article with collection = 'articles'
		$article->{alias} = lc($self->utils->translit($article->{name}));
		$article->{preview_image_wide} = '' if !$article->{preview_image_wide};
		$article->{preview_image} = '' if !$article->{preview_image};
		
		my @tags = $article->{tags} ? split (/\s*[;,]\s*/, $article->{tags}) : ();
		$article->{tags} = \@tags;
		
		push @$error_message, 'no_type' if !$article->{type};
		#		push @$error_message, 'no_source' if !$article->{source_info};
		push @$error_message, 'no_preview_text' if !$article->{preview_text} || $article->{preview_text} eq '';
		#		push @$error_message, 'no_author' if !$article->{author_info};
	} elsif ($self->{collection} eq 'statics') {
		push @$error_message, 'no_alias' if !$article->{alias};
		$article->{type} = $self->{collection};
	}

	$article->{alias} =~ s![\s\/\\]+!_!g;
	$article->{alias} =~ s![^\w\d\_]+|\_$|^\_!!g;
	$article->{alias} =~ s!\_+!_!g;
	$article->{alias} .= $self->articles->check_existing_alias($self->stash('id') || '', $article, $self->{collection});
	
	$article->{date} = $self->utils->date_from_mongoid($article->{new_id}||$self->stash('id')) if $self->stash('id');
	
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
	my @image_size = $self->req->param($name.'_size') || (0)x(0+@image_descr);
	my %image_delete = map {$_ => 1} $self->req->param($name.'_delete');
	
	# Collect already uploaded files
	foreach ($self->req->param($name.'_tag')) {
		my $tmp = {tag => $_, descr => shift @image_descr, size => 0+shift @image_size};
		$tmp->{descr} =~ s/\"/&quot;/g;
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
		($article->{type} || $self->config('default_img_dir')).'/'.
		($article->{alias} ? $article->{alias} : $self->config('default_img_dir')).'/';
		
		make_path($folder_path) or die 'Error on creating article folder:'.$folder_path.' -> '.$! unless (-d $folder_path);
		$file->move_to($folder_path.$image->{tag});
		$image->{size} = $file->size;
		$image->{descr} = shift @image_descr;
		$image->{descr} =~ s/\"/&quot/g;
		push @$images, $image;
	}
	
	return $images if @$images>0;
	return [];
}

# Handlers
sub add {
	my $self = shift;
	
	$self->stash($_ => '') foreach ARTICLE_PARAMS;
	
	$self->render(
	action_type => 'add',
	article_brands => {},
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
	
	#	$self->utils->update_active_rubrics($self) if $self->{'collection'} eq 'articles';
	
	return $self->redirect_to('/admin/' . ($self->{collection} ne 'articles' ? $self->{collection} : 'article') . '/edit/'.$id) if $self->stash('error_message');
	return $self->redirect_to('/admin/' . ($self->{collection} ne 'articles' ? $self->{collection} : 'article') . '/edit/'.$id) if $self->req->param('update');
	$self->flash('message' => 'article_added');
	$self->flash('id' => $id);
	
	return $self->redirect_to('/admin');
}

sub edit {
	my $self= shift;

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
	$article->{tag} = join '; ', @{$article->{tag}} if ref $article->{tag} eq 'ARRAY';
	
	$self->stash('error_message' => $self->flash('error_message')) if $self->flash('error_message');
	$self->stash('message' => $self->flash('message')) if $self->flash('message');
	
	my $article_brands = ref $article->{brand} eq ref [] ?
		{map {$_ => 1} @{$article->{brand}}} : {$article->{brand} => 1};

	$self->render(
		%$article,
		id => $article->{_id}->{value},
		article_brands => $article_brands,
		groups => $self->groups->get_all(),
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
		foreach (@{$article->{images}}) {
			$article->{preview_image_size} = ($_->{size} || (int rand 100)+100) if $article->{preview_image} eq $_->{tag};
		}
		$article->{article_text_rendered} = $self->utils->render_article($self, $article);
		
		if ($self->stash('error_message')) {
			my $id = $self->articles->update_article($self->stash('id'), $article, $self->{collection});
			return $self->redirect_to('/admin/' . ($self->{collection} ne 'articles' ? $self->{collection} : 'article') . '/edit/' . $id);
		}
		
		my $id = $self->articles->update_article($self->stash('id'), $article, $self->{collection}); # id can change when change article time
		
		#		$self->utils->update_active_rubrics($self) if $self->{collection} eq 'articles';
		
		$self->flash(message => 'article_updated');
		if ($self->req->param('update')) {
			$self->articles->block_article($id, $self->session('admin')->{_id}, $self->{collection});
			return $self->redirect_to('/admin/' . ($self->{collection} ne 'articles' ? $self->{collection} : 'article') . '/edit/' . $id) ;
		}
		$self->articles->unblock_article($id, $self->{collection}); # when save and return to list
	}
	
	return $self->redirect_to('/admin');
}


sub list_statics {
	my $self = shift;
	
	my $page = $self->req->param('page') ? $self->req->param('page') : 1;
	
	my @statics = $self->app->db->statics->find({})->
	skip(($page-1)*($self->config('articles_on_admin_page')||30))->
	limit($self->config('articles_on_admin_page')||30)->
	sort({'_id' => -1})->all;
	
	my $pages = $self->app->db->statics->find({})->count/($self->config('articles_on_admin_page')||30);
	$pages = $pages - int($pages) > 0 ? int($pages)+1 : $pages;
	
	return $self->render(
		articles => \@statics,
		pages => $pages || 0,
		template => 'admin/list_statics',
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