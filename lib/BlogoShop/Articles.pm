package BlogoShop::Articles;

use Mojo::Base -base;

use utf8 qw(encode decode);

use Data::Dumper;
use File::Path qw(make_path remove_tree);
use File::Copy;

use constant {
	ARTICLES_COLLECTION => 'articles',
	CUTS_COLLECTION => 'cuts',
	RUBRICS_COLLECTION => 'rubrics',
	VOTES_COLLECTION => 'votes',
	SOURCES_COLLECTION => 'sources',
	AUTHORS_COLLECTION => 'authors',
};

use constant LIST_FIELDS => {map {$_ => 1} qw( name alias cut rubric preview_image preview_size preview_image_wide preview_text date)};

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

	$id = ref $id eq 'MojoX::MongoDB::OID' ? $id->{value} : $id;

	my $old_article = $self->get_article_by_id($id, $collection);
	return if !$old_article;

	if ($old_article->{alias} ne $article->{alias} || $old_article->{rubric} && $old_article->{rubric} ne $article->{rubric}) { # check if alias changed , change directory with images

		my $old = $self->{config}->{image_dir}.($old_article->{rubric} ? $old_article->{rubric} : $self->{config}->{default_img_dir}).'/'.$old_article->{alias};
		my $new = $self->{config}->{image_dir}.($article->{rubric} ? $article->{rubric} : $self->{config}->{default_img_dir}).'/'.$article->{alias};

		my $new_dir = $self->{config}->{image_dir}.($article->{rubric} ? $article->{rubric} : $self->{config}->{default_img_dir});
		make_path($new_dir)	or die 'Error on creating article folder:'.$new_dir.' -> '.$! 
				unless (-d $new_dir);
		system("mv $old $new");
	}

	my %old_questions = map { $_ => 1 } keys %{$old_article->{polls}} if ref($old_article->{polls}) eq 'HASH';  # check if polls didn't change, save previous data 
	foreach (keys %{ $article->{polls} }) {
		$article->{polls}->{$_} = $old_article->{polls}->{$_} if $old_questions{$_};
	}

	# Check diff between new and old id, if timestamp differ delete with old_id insert with new_id, else update;
	if ( $article->{new_id} &&
		substr($old_article->{_id}->{value}, 0, 6) ne substr($article->{new_id}, 0, 6)
	) {
		$article->{_id} = MojoX::MongoDB::OID->new(value => $article->{new_id});
		delete $article->{new_id};
		$self->{db}->get_collection($collection || ARTICLES_COLLECTION)->remove( {_id => MojoX::MongoDB::OID->new(value => $old_article->{_id})} );
		$self->add_article($article, $collection);
		return $article->{_id};
	} else {
		delete $article->{_id} if $article->{_id};
		$self->{db}->get_collection($collection || ARTICLES_COLLECTION)->update(
			{_id => MojoX::MongoDB::OID->new(value => $id)}, {'$set' => $article}
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
		{_id => MojoX::MongoDB::OID->new(value => $id)},
	);
}

sub get_filtered_articles {
	my ($self, $filter, $limit, $type, $id) = @_;

	# add filter param to make offset(skip) selection with range: "< id" -> next , "> id" -> prev
	$filter->{_id} = {$type && $type eq 'next' ? '$lt' : '$gt' => MojoX::MongoDB::OID->new(value => $id)} if $id && $id =~ m/^[\d\w]+$/;

	# fetch $limit+1 objects to know is there one more page, and change order if moving backward for right limiting
	my $cursor = $self->{db}->get_collection(ARTICLES_COLLECTION)->
		find($filter)->
		limit($limit ? $limit+1 : 0)->
		sort({'_id' => !defined $type || $type eq 'next' ? -1 : 1});
	$cursor->fields(LIST_FIELDS);
	my @all_articles = $cursor->all;

	return \@all_articles unless $limit || $type; # show all to admins 

	$limit = @all_articles if @all_articles < $limit; 

	my @articles = (
		@all_articles == 1 ?
			@all_articles :
			( !defined $type || $type eq 'next' ? @all_articles[0..$limit-1] : reverse(@all_articles[0..$limit-1]) )	
	); # get needed limit, reverse sort when moving backward to make it looks the same as moving forward

	# set pager vars
	if (@articles > 0) {
		$articles[-1]->{show_fwd} = (defined $type && $type eq 'prev') || @all_articles > $limit ? 1 : 0; # add flag to show next page link
		$articles[0]->{show_prev} = (defined $type && $type eq 'next') || (defined $type && $type eq 'prev' && @all_articles > $limit) ? 1 : 0;
	}
	return \@articles;
}

sub remove_article {
	my ($self, $id, $collection) = @_;

	my $article = $self->{db}->get_collection($collection || ARTICLES_COLLECTION)->find_one(
		{_id => MojoX::MongoDB::OID->new(value => $id)}
	);
	return 0 unless $article;
	eval {
		remove_tree( $self->{config}->{image_dir} . 
					($article->{rubric} ? $article->{rubric} : $self->{config}->{default_img_dir}) . '/' .
					($article->{alias} ? $article->{alias} : $self->{config}->{default_img_dir})
		);
	};
	warn "ERROR on Article files delete:\"$@\"" if $@;
	return $self->{db}->get_collection($collection||ARTICLES_COLLECTION)->remove(
		{_id => MojoX::MongoDB::OID->new(value => $id)},
	);
}

sub get_related_articles {
	my ($self, $filter, $limit, $id) = @_;

	foreach (keys %$filter) {
		push @{$filter->{'$or'}}, {$_ => $filter->{$_}};
		delete $filter->{$_};
	}

	$filter->{_id} = {'$lt' => $id}; # uncomment when we'll have enought articles
 	$filter->{active} = "1";

	my $cursor = $self->{db}->get_collection(ARTICLES_COLLECTION)->find($filter)->limit($limit)->sort({'_id' => -1});
	$cursor->fields(LIST_FIELDS);
	my @articles = $cursor->all;
	return \@articles ;
}

# Rubrics Cuts
sub get_cuts {
	my ($self, $cut) = @_;
	return ($self->{db}->get_collection(CUTS_COLLECTION)->find_one({_id => $cut}))->{name} if $cut && $cut ne 'hash';
	return $self->get_all(CUTS_COLLECTION, 1) if $cut && $cut eq 'hash';
	return $self->get_all(CUTS_COLLECTION);
}

sub get_rubrics {
	my ($self, $rubric) = @_;
	return ($self->{db}->get_collection(RUBRICS_COLLECTION)->find_one({_id => $rubric}))->{name} if $rubric && $rubric ne 'hash';
	return $self->get_all(RUBRICS_COLLECTION, 1) if $rubric && $rubric eq 'hash';
	return $self->get_all(RUBRICS_COLLECTION);
}

sub get_all {
	my ($self, $collection_name, $need_hash) = @_;
	my @all = $self->{db}->get_collection($collection_name)->find->sort( { order => 1 } )->all;
	return { map { $_->{_id} => $_->{name} } @all } if $need_hash;
	return \@all;
}

sub get_sources {
	my ($self, $source) = @_;
	return ($self->{db}->get_collection(SOURCES_COLLECTION)->find_one({_id => $source})) if $source; # return link and name by
	my @all = $self->{db}->get_collection(SOURCES_COLLECTION)->find->sort( { name => 1 } )->all;
	return \@all;
}

sub get_authors {
	my ($self, $author) = @_;
	return ($self->{db}->get_collection(AUTHORS_COLLECTION)->find_one({_id => "$author"})) if $author; # return link and name by
	my @all = $self->{db}->get_collection(AUTHORS_COLLECTION)->find->sort( { name => 1 } )->all;
	return \@all;
}

sub add_author {
	 my ($self, $author_name) = @_;
	 return $self->{db}->get_collection(AUTHORS_COLLECTION)->save({_id => sprintf("%u", time), name => $author_name, rname => (split ' ', $author_name)[0], surname => (split ' ', $author_name)[1]}); 
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

# Controll Stuff
sub check_existing_alias {
	my ($self, $id, $article, $collection) = @_;
	my $filter->{alias} = qr/^$article->{alias}\d?/;
	$filter->{rubric} =  $article->{rubric} if !$collection;
	$filter->{_id} = {'$ne' => MojoX::MongoDB::OID->new(value => $id)} if $id;
	
	my @check = $self->{db}->get_collection($collection|| ARTICLES_COLLECTION)->find(
		$filter, 
		{"alias" => '1'} # fetch only alias
		)->sort({alias => -1})->all;

	return ($#check > -1 ? ($check[0]->{alias} =~ /(\d?$)/)[0] + 1 : '');  
}

sub get_active_rubrics_in_cuts {
	my $self = shift;
	my $res = $self->{db}->run_command({ 
		group => { 
			ns => ARTICLES_COLLECTION, 
			cond => { active => "1" }, 
			key => { cut => 1, rubric => 1 }, 
			initial => { count => 0 }, 
			'$reduce' => 'function(doc, out) { out.count++ }'
		}
	});
	my $active_rubrics_in_cuts;
	foreach my $it (@{$res->{retval}}) {
		$active_rubrics_in_cuts->{ $it->{cut}.':'.$it->{rubric} } += $it->{count} if $it->{cut};
		$active_rubrics_in_cuts->{ ':'.$it->{rubric} } += $it->{count};
	}
	return $active_rubrics_in_cuts;
}

sub block_article {
	my ($self, $id, $admin_id, $collection) = @_;

	my $params->{admin_id} = $admin_id;
	$params->{time} = time + 10*60;

	$self->{db}->get_collection($collection || ARTICLES_COLLECTION)->update(
			{_id => MojoX::MongoDB::OID->new(value => $id)},
			{'$set' => {block => $params}}
	);
	return 1;
}

sub unblock_article {
	my ($self, $id, $collection) = @_;

	$self->{db}->get_collection($collection || ARTICLES_COLLECTION)->update(
		{_id => MojoX::MongoDB::OID->new(value => $id)},
		{'$set' => {block => {admin_id => ''}}}
	);
	return 1;
}
1;