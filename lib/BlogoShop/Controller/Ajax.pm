package BlogoShop::Controller::Ajax;

use Mojo::Base 'Mojolicious::Controller';

use strict;
use warnings;
use utf8;
use Encode qw(decode_utf8);
# use XML::XPath;
use XML::Simple;
use Digest::MD5 qw(md5_hex);
use BlogoShop::Item;

use constant VOTE_PARAMS => qw( rubric alias question_hash answer_hash ); 

sub vote {
	my $self = shift;
	my $vote_params = {};
	$vote_params->{$_} = $self->stash($_) foreach VOTE_PARAMS;
	$vote_params->{_id} = md5_hex($self->req->headers->header('X-Real-IP').$vote_params->{alias}.$vote_params->{question_hash});
	$vote_params->{expires} = time()+$self->config('block_voter_ip_time'); # {"_id":"25f35f0c5d6a317c1f39a5f038a927dc","expires":"1320844921"}

	return $self->render(json => {result => $self->articles->vote($vote_params)});
}

sub activate_post {
    my $self = shift;
    $self->articles->activate($self->stash('id'), $self->stash('bool'));
    return $self->render(
        json => {ok => 1},
	);
}

sub subscribe {
    my $self = shift;
    my $mail = $self->req->param('subscribe') || undef;
    if ($mail && $mail =~ m/(\@+)/ ) {
        my $mail = $self->mail(
            to      => 'xoxloveka.shop@gmail.com',
            cc		=> $self->config('superadmin_mail'),
            from    => 'noreply@'.$self->config('domain_name'),
            subject => 'Xoxloveka SUBSCRIBE',
            format => 'mail',
            data => $mail,
            handler => 'mail',
		);
    }
    return $self->redirect_to($self->req->url);
}

sub get_banner_xml {
	my $self = shift;

	my $filter = {};
	my $items = [];
	my @arr = $self->app->db->items->find({tags=>"fall_winter12-13"})->all;
	push @$items, splice(@arr, int(rand($#arr)),1) for (0..4);
	return $self->render(
		items => $items,
		template => 'banner', 
		format => 'xml',
	);
}
# SERVICE STUFF
sub import_sources {
	my $self = shift;
	my $id;
	
#	my $ar = $self->articles->get_filtered_articles({});
	my @ar = $self->app->db->viktorina2->find({})->limit(50)->sort({"position"=>"1"})->all;
	
#	my @ar = $self->app->db->articles->find({"active"=>"1"})->all;
#	warn Dumper (\@ar);
my $str='';
	foreach my $a (@ar) {
		$str .= "$a->{$_}\t" foreach keys %$a;
		$str .= "\n";
#		warn $self->dumper($a);
#		next if ref $a->{author_info} ne 'HASH';
#		$str .= $a->{name}.' : '. $a->{author_info}->{name}."\n";
#		$_->{date} = $self->utils->date_from_mongoid($_->{_id});
#		warn $_->{alias}.' -> '. $_->{date} ;
		 
#$self->articles->{db}->get_collection('articles')->save;
#$self->articles->{db}->get_collection('articles')->update(
#		{'alias' => $_->{alias}}, {'$set' => {'date' => $_->{date}}}
#	);
	}
warn $str;
#warn $self->utils->timestr_from_mongoid($id);
	return $self->render(json => {result => ''});
}


use constant DUMP_FIELDS => {map {$_ => 1} qw( name alias cut cut_alias rubric rubric_alias preview_text date article_text_rendered ) }; 
# source_info preview_image preview_image_wide author_info
sub articles_update {
	my $self = shift;
	my @articles = $self->app->db->articles->find({})->all;
#	$_->{_id} = $_->{_id}->{value} foreach (@articles);
warn $self->dumper($_->{active}) foreach @articles;
	$self->app->db->articles->update({_id => $_->{_id}}, {'$set' => {active => 0+$_->{active}}}) foreach @articles;
	
	return $self->render(
		json => {ok => 1},
	);
}
 
sub items_update {
	my $self = shift;
	my $items = [$self->app->db->items->find({})->all];
	foreach (@$items) {
		next if $_->{brand} eq 'mazzer' || $_->{brand} eq 'anfim';
		foreach (@{$_->{subitems}}) {
			$_->{qty} eq '' || $_->{qty} eq '0' ?  $_->{qty}=0 : $_->{qty} += 0;
			$_->{price} = $_->{price}*1.1-($_->{price}*1.1%10);
		}
		
		$_->{qty} eq '' || $_->{qty} eq '0' ?  $_->{qty}=0 : $_->{qty} += 0;
		$_->{price} += 0;
#		warn $self->dumper($_);
		# $_->{brand_name} = $self->app->db->brands->find_one({_id => $_->{brand}}, {name => 1}) || '';
		# $_->{brand_name} = $_->{brand_name}->{name} if $_->{brand_name};
		
		# $self->{app}->db->items->update({_id => MongoDB::OID->new(value => ''.$_->{_id}) , 
		# 	{'$set' =>{qty => 0+$_->{qty}, price => $_->{price}, subitems => $_->{subitems}, brand_name => $_->{brand_name}}}); 
		$self->{app}->db->items->update({_id => MongoDB::OID->new(value => ''.$_->{_id})}, 
			{'$set' => { price => $_->{price}*1.1-($_->{price}*1.1%10), subitems => $_->{subitems} } } ) ; 
		# 
	}
	return $self->render(
		json => {ok => 1},
	);
}

sub items_update_alias {
	my $self = shift;
	my $alias = 'solncezaschitnye_ochki';
	my $filter->{alias} = qr/^$alias\d+/;
	my @check = $self->app->db->items->find($filter)->fields({alias => 1})->sort({alias => 1})->all;
	my $ct=0;
	foreach (@check) {
		warn $self->dumper($_);
		# $self->app->db->items->update({_id => $_->{_id}}, {'$set'=>{alias => 'solncezaschitnye_ochki1.21312141213122e+31'}});
	}
	return $self->render(
		json => {ok => \@check},
	);
}

sub orders_update { 
	my $self = shift;
	my $filter = {status => {'$exists' => 0}};
	# my @check = $self->app->db->orders->find($filter)->fields({status => 1})->sort({alias => 1})->all;
	$self->app->db->orders->update($filter, {'$set' => {status => 'new'}}, {'multiple' => 1});
	return $self->render(
		json => {ok => [$self->app->db->orders->find($filter)->fields({status => 1})->all]},
	);	
}

sub orders_cities {
	my $self = shift;
	my @ord = $self->app->db->orders->find()->all;
	my $res;
	for (@ord) {
		$res .= $_->{city} ."\t". $self->utils->date_from_mongoid($_->{_id}) ."\t". $_->{delivery_type}. "\n";
	}
	return $self->render(text => $res);
}

sub orders_emails {
	my $self = shift;
	my @ord = $self->app->db->orders->find()->fields({email=>1})->all;
	my $res;
	for (@ord) {
		$res->{$_->{email}} = 1 if $_->{email} =~ m!.+\@.+\..+!;
	}
	return $self->render(text => (join "<br>", keys %$res));
}

sub write_file {
	my $self= shift;
    
    #	my %cooks = map {$_->{name} => $_->{value}} @{$self->req->cookies};
    warn $self->dumper($self->req->params);
	my $file = $self->req->param('POSTDATA') || undef;
    warn $self->dumper($file);
	my $info = $self->req->param('img');
	return $self->render(json => {success => 'false', error => 'no file'})
    unless defined $file && $file->filename && $file->filename =~ /\.(jpg|jpeg|bmp|gif|png|tif|swf|flv)$/i;
    
	my $article = $self->stash('id') ne 'add' ? $self->articles->get_article_by_id($self->stash('id')) : {};
    
	my $image = {};
	$image->{tag} = (time() =~ /(\d{5})$/)[0].'_'.lc($self->utils->translit($file->filename));
	$image->{tag} =~ s![\s\/\\]+!_!g;
	$image->{tag} =~ s![^\w\d\.\_]+!!g;
    
    #	my $folder_path = $self->config('image_dir').
    #		($article->{rubric} ? $article->{rubric} : $self->config('default_img_dir')).'/'.
    #		($article->{alias} ? $article->{alias} : $self->config('default_img_dir')).'/';
    #	make_path($folder_path) or die 'Error on creating article folder:'.$folder_path.' -> '.$! unless (-d $folder_path);
    #	$file->move_to($folder_path.$image->{tag});
    
	$image->{descr} = $info->{descr};
	$image->{descr} =~ s/\"/&quot/g;
	$image->{source}= $info->{source};
	$image->{source} =~ s/\"/&quot/g;
    
	return $self->render(json => {success => 'true', result => $image});
}

sub import_cities {
	my $self= shift;
	
#	my $xml = XML::XPath->new(filename => '/home/techtim/rocid.xml');
	my $xml = XMLin('/home/techtim/rocid.xml',  KeyAttr => {item => 'name'});
#	my $nodeset = $xml->find('/rocid/city'); # find all paragraphs
#    warn $self->dumper($xml);
 	my $rus->{name} = 'Россия';
 	my $ukr->{name} = 'Украина';
    foreach (@{$xml->{city}}) {
    	$_->{name}=~s/^\s+|\n|\r|\s+$//g;
    	next if $_->{name} =~ m/Москва|Петербург/;
#    	warn $_->{name} if $_->{name} =~/Павловский.*/;
    	push @{$rus->{cities}}, $_->{name} if $_->{country_id} == 3159;
    	push @{$ukr->{cities}}, $_->{name} if $_->{country_id} == 9908; 
    }

    @{$rus->{cities}} = sort @{$rus->{cities}};
    unshift @{$rus->{cities}}, 'Санкт-Петербург';
    unshift @{$rus->{cities}}, 'Москва';
#	$self->app->db->cities->save($rus);
#	$self->app->db->cities->save($ukr);
#	warn "$_ \n" foreach @cit;
    
    return $self->render(json => {success => $rus});	
}

sub get_russian_post_delivery_price {
	my $c = shift;

	my $ua = Mojo::UserAgent->new();
	my $tx = $ua->post($c->config('russian_post_api_url'), => {Accept => '*/*'} => form => {
		hash => md5_hex($c->config('russian_post_api_key').$c->config('russian_post_api_pass')),
		apikey => $c->config('russian_post_api_key'),
		method => 'calc',
		from_index => $c->config('russian_post_index'),
		to_index => $c->req->param('index'),
		weight => $c->req->param('weight'),
		ob_cennost_rub => $c->req->param('cost')
	});
	my $res;
	if ($res = $tx->success) {
		warn $c->dumper($res->body);
	}

	return $c->render(json => $res->body);
}

sub update_currency_rub_prices {
	my $c = shift;

	my $items = [$c->app->db->items->find({})->all];
	foreach (@$items) {
		# next if $_->{brand} eq 'mazzer' || $_->{brand} eq 'anfim';
		foreach (@{$_->{subitems}}) {
			$_->{qty} eq '' || $_->{qty} eq '0' ?  $_->{qty}=0 : $_->{qty} += 0;
			$_->{currency_price} = 0+$_->{price};
			$_->{currency} = 'rub';
		}
		
		# $_->{qty} eq '' || $_->{qty} eq '0' ?  $_->{qty}=0 : $_->{qty} += 0;
		# $_->{currency_price} = 0+$_->{price};;
		# $_->{currency} = 'rub';
#		warn $c->dumper($_);
		# $_->{brand_name} = $c->app->db->brands->find_one({_id => $_->{brand}}, {name => 1}) || '';
		# $_->{brand_name} = $_->{brand_name}->{name} if $_->{brand_name};
		
		# $c->{app}->db->items->update({_id => MongoDB::OID->new(value => ''.$_->{_id}) , 
		# 	{'$set' =>{qty => 0+$_->{qty}, price => $_->{price}, subitems => $_->{subitems}, brand_name => $_->{brand_name}}}); 
		$c->{app}->db->items->update({_id => MongoDB::OID->new(value => ''.$_->{_id})}, 
			{'$set' => { currency_price => $_->{price}, currency => 'rub', subitems => $_->{subitems} } } ) ; 
		# 
	}
	return $c->render(
		json => {ok => 1},
	);
}

1;
