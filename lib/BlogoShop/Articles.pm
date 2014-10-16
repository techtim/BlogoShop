package BlogoShop::Articles;

use Mojo::Base -base;

use utf8 qw(encode decode);

use Data::Dumper;
use File::Path qw(make_path remove_tree);
use File::Copy;

use constant {
	ARTICLES_COLLECTION => 'articles',
	VOTES_COLLECTION => 'votes',
	AUTHORS_COLLECTION => 'authors',
};

use constant LIST_FIELDS => {map {$_ => 1} qw( name author alias preview_image preview_size tags type preview_text date)};

sub new {
	my ($class, $db, $conf) = @_;
	my $self;
	$self->{db} = $db;
	$self->{config} = $conf;
	bless $self, $class;	 
}

sub add_article {
	my ($self, $article, $collection) = @_;
	
	return $self->{db}->get_collection($collection || ARTICLES_COLLECTION)->save($article);
}

sub update_article {
	my ($self, $id, $article, $collection) = @_;
	
	return if !$id;
	
	$id = ref $id eq 'MongoDB::OID' ? $id->{value} : $id;
	
	my $old_article = $self->get_article_by_id($id, $collection);
	return if !$old_article;
	
	if ($old_article->{type} ne $article->{type} || $old_article->{alias} ne $article->{alias}) { # check if alias changed , change directory with images
		
		my $old = $self->{config}->{image_dir}.($old_article->{type} ? $old_article->{type} : $self->{config}->{default_img_dir}).'/'.($old_article->{alias}||$self->{config}->{default_img_dir});
		my $new = $self->{config}->{image_dir}.($article->{type} ? $article->{type} : $self->{config}->{default_img_dir}).'/'.($article->{alias}||$self->{config}->{default_img_dir});
		
		my $new_dir = $self->{config}->{image_dir}.($article->{type} ? $article->{type} : $self->{config}->{default_img_dir});
		make_path($new_dir)	or die 'Error on creating article folder:'.$new_dir.' -> '.$! 
		unless (-d $new_dir);
		system("mv $old $new");
	}
	
	# check if polls didn't change, save previous data 
	my %old_questions = map { $_ => 1 } keys %{$old_article->{polls}} if ref($old_article->{polls}) eq 'HASH';
	foreach (keys %{ $article->{polls} }) {
		$article->{polls}->{$_} = $old_article->{polls}->{$_} if $old_questions{$_};
	}
	
	my @vars = localtime(time);
	$article->{last_update} = sprintf '%04d-%02d-%02d %02d:%02d', $vars[5]+1900, $vars[4]+1, $vars[3], $vars[2], $vars[1];
	# Check diff between new and old id, if timestamp differ delete with old_id insert with new_id, else update;
	if ( $article->{new_id} &&
	substr($old_article->{_id}->{value}, 0, 6) ne substr($article->{new_id}, 0, 6)
	) {
		$article->{_id} = MongoDB::OID->new(value => $article->{new_id});
		delete $article->{new_id};
		$old_article->{_id} = $old_article->{_id}->{value} if ref $old_article->{_id} eq 'MongoDB::OID';
		$self->{db}->get_collection($collection || ARTICLES_COLLECTION)->remove( {_id => MongoDB::OID->new(value => $old_article->{_id})} );
		$self->add_article($article, $collection);
		return $article->{_id};
	} else {
		delete $article->{_id} if $article->{_id};
		$self->{db}->get_collection($collection || ARTICLES_COLLECTION)->update(
		{_id => MongoDB::OID->new(value => $id)}, {'$set' => $article}
		);
		return $id;
	}
}

sub render_all_articles {
	my ($self, $controller) = @_;
	
	my @arts = $controller->app->db->articles->find()->all;
	foreach my $article (@arts) {
		$article->{article_text_rendered} = $controller->utils->render_article($controller, $article);
		$self->update_article($article->{_id}, $article);
	}
	return 1;
}

sub get_article {
	my ($self, $filter, $collection) = @_;
	return $self->{db}->get_collection($collection || ARTICLES_COLLECTION)->find_one($filter);
}

sub get_article_by_id {
	my ($self, $id, $collection) = @_;
	
	return $self->{db}->get_collection($collection || ARTICLES_COLLECTION)->find_one(
		{_id => MongoDB::OID->new(value => $id)},
	);
}

sub get_filtered_articles {
	my ($self, $filter, $limit, $type, $id) = @_;
	
	# add filter param to make offset(skip) selection with range: "< id" -> next , "> id" -> prev
	$filter->{_id} = {$type && $type eq 'next' ? '$lt' : '$gt' => MongoDB::OID->new(value => $id)} if $id && $id =~ m/^[\d\w]+$/;
	$filter->{tags} = $filter->{tag} if $filter->{tag};
	delete $filter->{tag};

	# fetch $limit+1 objects to know is there one more page, and change order if moving backward for right limiting
	my @all_articles = $self->{db}->
		get_collection(ARTICLES_COLLECTION)->
		find($filter)->limit($limit ? $limit+1 : 0)->
		sort({'_id' => !defined $type || $type eq 'next' ? -1 : 1})->
		fields(LIST_FIELDS)->all;
	
	return \@all_articles unless $limit || $type; # show all to admins 
	
	$limit = @all_articles if @all_articles < $limit; 
	
	my @articles = (
	@all_articles == 1 ?
	@all_articles :
	( !defined $type || $type eq 'next' ? @all_articles[0..$limit-1] : reverse(@all_articles[0..$limit-1]) )	
	); # get needed limit, reverse sort when moving backward to make it looks the same as moving forward
	
	# set pager vars
	if (@articles > 0) {
		$articles[-1]->{show_fwd} = 
		(defined $type && $type eq 'prev') || @all_articles > $limit ? 1 : 0; # add flag to show next page link
		$articles[0]->{show_prev} = 
		(defined $type && $type eq 'next') || (defined $type && $type eq 'prev' && @all_articles > $limit) ? 1 : 0;
	}
	return \@articles;
}

sub remove_article {
	my ($self, $id, $collection) = @_;
	
	my $article = $self->{db}->get_collection($collection || ARTICLES_COLLECTION)->find_one(
	{_id => MongoDB::OID->new(value => $id)}
	);
	return 0 unless $article;
	eval {
		remove_tree( $self->{config}->{image_dir} . 
		($article->{type} ? $article->{type} : $self->{config}->{default_img_dir}) . '/' .
		($article->{alias} ? $article->{alias} : $self->{config}->{default_img_dir})
		);
	};
	warn "ERROR on Article files delete:\"$@\"" if $@;
	return $self->{db}->get_collection($collection||ARTICLES_COLLECTION)->remove(
	{_id => MongoDB::OID->new(value => $id)},
	);
}

sub get_related_articles {
	my ($self, $filter, $limit, $id) = @_;
	
	foreach (keys %$filter) {
		push @{$filter->{'$or'}}, {$_ => $filter->{$_}};
		delete $filter->{$_};
	}
	
	$filter->{_id} = {'$ne' => $id}; # uncomment when we'll have enought articles
	$filter->{active} = 1;
	
	#	my $cursor = $self->{db}->get_collection(ARTICLES_COLLECTION)->find($filter)->limit($limit)->sort({'_id' => -1});
	#	$cursor->fields(LIST_FIELDS);
	my @articles = $self->{db}->get_collection(ARTICLES_COLLECTION)->find($filter)->limit($limit)->sort({'_id' => -1})->all;
	return \@articles ;
}


sub get_all {
	my ($self, $collection_name, $need_hash) = @_;
	my @all = $self->{db}->get_collection($collection_name)->find->sort( { order => 1 } )->all;
	return { map { $_->{_id} => $_->{name} } @all } if $need_hash;
	return \@all;
}

# Actions
sub vote {
	my ($self, $vote_params) = @_;
	my $vote = $self->{db}->get_collection(VOTES_COLLECTION)->find_one({_id => $vote_params->{_id}, expires => {'$gt' => time}});
	
	if (!$vote) {
		$self->{db}->get_collection(VOTES_COLLECTION)->save({_id => $vote_params->{_id}, expires => $vote_params->{expires}});
		$self->{db}->get_collection(ARTICLES_COLLECTION)->update(
			{ "alias" => $vote_params->{alias}, "rubric" => $vote_params->{rubric}, "polls.$vote_params->{question_hash}.answers.$vote_params->{answer_hash}.count" => {'$exists' => 'true'} }, 
			{ '$inc' => {"polls.$vote_params->{question_hash}.answers.$vote_params->{answer_hash}.count" => 1} },
			{ "safe" => 1 }
		);
		return 'voted';
	}
	return 'blocked';
}

sub activate {
	my ($self, $id, $bool) = @_;
	warn $id, $bool;
	$self->{db}->get_collection(ARTICLES_COLLECTION)->update(
		{_id => MongoDB::OID->new(value => $id)},
		{'$set' => {active => 0+$bool}}
	);
	return 1;
}

# Controll Stuff
sub check_existing_alias {
	my ($self, $id, $article, $collection) = @_;
	my $filter->{alias} = qr/^$article->{alias}\d?/;
	$filter->{rubric} =  $article->{rubric} if !$collection;
	$filter->{_id} = {'$ne' => MongoDB::OID->new(value => $id)} if $id;
	
	my @check = $self->{db}->get_collection($collection|| ARTICLES_COLLECTION)->find(
		$filter,
		{"alias" => '1'} # fetch only alias
	)->sort({alias => -1})->all;
	
	return ($#check > -1 ? ($check[0]->{alias} =~ /(\d+)$/ ? $1 + 1 : 1) : '');
}

sub block_article {
	my ($self, $id, $admin_id, $collection) = @_;
	$id = ref $id eq 'MongoDB::OID' ? $id->{value} : $id;
	my $params->{admin_id} = $admin_id;
	$params->{time} = time + 10*60;
	$self->{db}->get_collection($collection || ARTICLES_COLLECTION)->update(
		{_id => MongoDB::OID->new(value => $id)},
		{'$set' => {block => $params}}
	);
	return 1;
}

sub unblock_article {
	my ($self, $id, $collection) = @_;
	$id = ref $id eq 'MongoDB::OID' ? $id->{value} : $id;
	$self->{db}->get_collection($collection || ARTICLES_COLLECTION)->update(
		{_id => MongoDB::OID->new(value => $id)},
		{'$set' => {block => {admin_id => ''}}}
	);
	return 1;
}
1;