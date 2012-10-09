package BlogoShop::Item;

use Mojo::Base -base;

use utf8 qw(encode decode);

use Data::Dumper;
use File::Path qw(make_path remove_tree);
use File::Copy::Recursive qw( dircopy );
$File::Copy::Recursive::MaxDepth = 1;
use Mojo::JSON;
use Hash::Merge qw( merge );

my $json  = Mojo::JSON->new;

use constant ITEM_FIELDS => qw(id name alias descr active
								category subcategory 
								brand tags total_qty
								sale_start sale_end sale_value sale_active
								sex preview_image images
								);
use constant LIST_FIELDS => map {$_ => 1} qw(name alias brand brand_name category subcategory subitems
											preview_image price sale_start sale_end sale_value sale_active);

use constant SALE_PARAMS => qw(sale_start sale_end sale_value sale_active);

use constant SUBITEM_PARAMS => qw (size price qty);

use constant OPT_SUBITEM_PARAMS => {
	size => "размер", 
	price => "цена",
	qty => "кол-во",
	color => 'цвет',
	length => 'длина',
	width => 'ширина',
	height => 'высота',
	deep => 'глубина',
	consist => 'состав',
	articol => 'артикул',
};

use constant COLORS => [qw( 111111 FFFFFF FF0000 00FF00 0000FF FFFF00 00FFFF FF00FF)]; # 111111 black 
#use overload '%{}' => 'hash';

sub new {
    my ($class, $ctrl) = @_;
	my $self;
    $self->{app} = $ctrl->app if $ctrl;
    if ($ctrl->stash('id') && $ctrl->stash('id') ne 'add') {
	    %$self = ( %$self, 
	    	%{ $self->{app}->db->items->find_one({_id => MongoDB::OID->new(value => $ctrl->stash('id'))}) || {} } 
	    );
    } elsif ($ctrl->stash('alias')) {
    	%$self = ( %$self, 
	    	%{ $self->{app}->db->items->find_one({alias => $ctrl->stash('alias')}) || {} } 
	    );
    }
    if (!$self->{_id}) {
	    my $tmp = merge( $self, { map {$_ => $ctrl->stash($_)||''} ITEM_FIELDS, keys OPT_SUBITEM_PARAMS } ); 
	    $self 	= $tmp;
    }
#warn $ctrl->dumper($self);
#	$self->{config} = $conf;
	bless $self, $class;
}

sub save {
    my ($self, $ctrl) = @_;

    $self->_parse_data($ctrl);
    warn 'ERROR:'.$ctrl->dumper($ctrl->stash('error_message')) if $ctrl->stash('error_message');
#    return 0 if $ctrl->stash('error_message');
    $ctrl->flash('error_message' => $ctrl->stash('error_message')) if $ctrl->stash('error_message');

	if ($self->{name} && $self->{category}) {
	    if ($self->{id} && $self->{_id}) {
	    	local $self->{_id};
	    	delete $self->{_id};
	    	$self->_update($ctrl);
	    	warn 'UPD:';#. $ctrl->dumper($self->as_hash);
	    	$self->{app}->db->items->update({_id => MongoDB::OID->new(value => ''.delete $self->{id})}, {'$set' => {%{$self->as_hash}}});
	    } else {
	    	warn 'SAVE:';#.$ctrl->dumper($self->as_hash);
	    	$self->{_id} = $self->{app}->db->items->save($self->as_hash);
	    }
	}

    return $self->{_id}||0;
}

sub delete {
	my ($self) = @_;
	warn 'DELETE:'.$self->{_id};
	$self->{app}->db->items->remove({_id => MongoDB::OID->new(value => ''.$self->{_id})}); 
	return 1;
}

sub copy {
	my ($self, $ctrl) = @_;
	my $item = $self;
	delete $item->{id};
	$item->{alias} =~ s/\d+$//;
	$item->{alias} .= $item->check_existing_alias(); # no 'id' param to increment alias
	$item->{id} = $item->{_id};
	$item->_update($ctrl);
	delete $item->{_id};
	$item->{active} = 0;
	return $self->{app}->db->items->save($item->as_hash);
}

sub get {
    my ($self, $id, $sub_id) = @_;
    my $it = $self->{app}->db->items->find_one({_id => MongoDB::OID->new(value => $id)});
    return merge( $it, $it->{subitems}->[$sub_id] );
}

sub list {
    my ($self, $filt, $sort, $skip, $limit) = @_;
    my %filter = ref $filt eq ref {} ? %$filt : ();
	$limit ||= $self->{app}->config->{items_on_page}; 
    foreach (keys %filter) {
    	delete $filter{$_} if !$filter{$_};
    }
    $filter{sex} = {'$in' => ['', $filter{sex}]} if $filter{sex}; # to show unisex cloths
    # warn 'FLTR'. $self->{app}->dumper(\%filter);

	$sort = {price => -1} if ref $sort ne ref {} ||  keys %$sort == 0;
	$skip = $skip =~ m/(\d+)/ ? $1 : 0;
# warn $filter->{tag};
# warn $self->{app}->dumper($filter);	
	my @all = $self->{app}->db->items->find(\%filter)->sort($sort)->fields({LIST_FIELDS})->skip($skip)->limit($limit)->all;
    return \@all;
}

sub _parse_data {
	my ($self, $ctrl) = @_;
	
	my $error_message = [];

	$self->{$_} = $ctrl->req->param($_)||$ctrl->stash($_)||'' foreach (ITEM_FIELDS, keys OPT_SUBITEM_PARAMS);
#	warn $ctrl->dumper($ctrl->req->params());
	
	$self->{active} = $self->{active} eq '' ? 0 : 0+$self->{active}; 
	
	$self->{brand_name} = $ctrl->app->db->brands->find_one({_id => $self->{brand}}, {name => 1}) || '';
	$self->{brand_name} = $self->{brand_name}->{name} if $self->{brand_name};

	$self->{category} = $self->{app}->db->categories->find_one({'subcats._id' => $self->{subcategory}}) if $self->{subcategory} ne '';
	$self->{category} = $self->{category}->{_id} if $self->{subcategory} ne '';
#	if !$self->{category};
	
	$self->{descr} 	=~ s/\r|(\r?\n)+$|\ +$//g if $self->{descr};
	{ # shitty "Malformed UTF-8 character"
		no warnings;
		$self->{descr} =~ s/\&raquo;|\&laquo;|\x{ab}|\x{bb}/\"/g if $self->{descr};
	};
		
	$self->{alias}  = lc($ctrl->utils->translit($self->{name}, 1));
	$self->{alias} .= $self->check_existing_alias();
# warn 'END:'.$self->{alias};
	my @colors 	= $self->{color} ? split (',', $self->{color}) : ();
	$self->{color} 	= \@colors; 

		my @tags 	= $self->{tags} ? split (/\s*[;,]\s*/, $self->{tags}) : ();
	$self->{tags} 	= \@tags;

	if ( $self->{sale_start} && $self->{sale_end} ){
		$self->{sale}->{sale_start_stamp} = $ctrl->utils->timestamp_from_date($self->{sale_start}) ;
		$self->{sale}->{sale_end_stamp}   = $ctrl->utils->timestamp_from_date($self->{sale_end}) ;
	} else {
		$self->{sale_active} = 0;
	}
	$self->{sale}->{$_} = delete $self->{$_} foreach SALE_PARAMS;
	
	$self->{qty} 	   += 0;
	$self->{size} 	   .= '';
	$self->{price} 	   += 0;
	$self->{total_qty} 	= $self->{qty}; 
	$self->{subitems}	= $self->_get_subitems($ctrl);

	$self->{preview_image} = '' if !$self->{preview_image};

	# store main item patrams in subitems[0]
	unshift @{$self->{subitems}}, {map {$_ => $self->{$_}} keys BlogoShop::Item::OPT_SUBITEM_PARAMS};

	push @$error_message, 'no_category' if !$self->{category};
	push @$error_message, 'no_name' if !$self->{name};

	$self->{images} = $self->_get_images($ctrl, 'image') if @$error_message==0;

	push @$error_message, 'no_price' if !$self->{price};
	push @$error_message, 'no_preview_image' if !$self->{preview_image};

	$self->{active} = 0, $ctrl->stash(error_message => $error_message) if @$error_message>0;

	return $self;
}

sub _get_images {
	my ($self, $ctrl, $name) = @_;
	
	my $images = [];
	my @image_descr = $ctrl->req->param($name.'_descr');
	my @image_size = $ctrl->req->param($name.'_size');
	my @image_subitem = $ctrl->req->param($name.'_subitem');
	my %image_delete = map {$_ => 1} $ctrl->req->param($name.'_delete');
	
	# Collect new files
	foreach my $file ($ctrl->req->upload($name)) {
		unless ($file->filename || $file->filename =~ /\.(jpg|jpeg|bmp|gif|png|tif|swf|flv)$/i) {
			shift @image_descr;
			next;
		}
		
		my $image = {};
		$image->{tag} = (time() =~ /(\d{5})$/)[0].'_'.lc($ctrl->utils->translit($file->filename));
		$image->{tag} =~ s![\s\/\\]+!_!g;
		$image->{tag} =~ s![^\w\d\.\_]+!!g;

		my $folder_path = $ctrl->config('image_dir').'item/'.
			join('/', $self->{category}, $self->{subcategory}) .'/'.
			($self->{alias} ? $self->{alias} : $ctrl->config('default_img_dir')).'/';

		make_path($folder_path) or die 'Error on creating item folder:'.$folder_path.' -> '.$! unless (-d $folder_path);
		$file->move_to($folder_path.$image->{tag});

		$image->{size} 	= $file->size;
		$image->{descr} = shift @image_descr;
		$image->{descr} =~ s/\"/&quot/g;
		$image->{subitem} = shift @image_subitem;

		push @$images, $image;
	}
	
	# Collect already uploaded files
	foreach ($ctrl->req->param($name.'_tag')) {
		my $tmp = {tag => $_, descr => shift @image_descr, size => 0 + shift @image_size, subitem => shift @image_subitem};
		$tmp->{descr} =~ s/\"/&quot;/g if $tmp->{descr};
		push @$images, $tmp unless $image_delete{$_}; 
	}
	for (0..$#{$images}) {
		if ($images->[$_]->{tag} eq $self->{preview_image}) {
			my $img = splice(@$images,$_,1); # delete from position
	    	unshift @$images, $img;
		}
	}
	return $images if @$images>0;
	return 0;
}

sub _get_subitems {
	my ($self, $ctrl) = @_;
	my $ct = 1;
	my $subitems = [];

	while (1) {
		my $sub = {};
		$sub->{$_} = $ctrl->req->param("sub$ct.".$_)||'' foreach (keys OPT_SUBITEM_PARAMS);

		last unless $sub->{qty} || $sub->{size} || $sub->{price};
		$self->{total_qty} += $sub->{qty};
		$sub->{qty} 	+= 0;
		$sub->{price}	+= 0;
		my @colors = $sub->{color} ? split (',', $sub->{color}) : ();
		$sub->{color} = \@colors;
		push @$subitems, $sub;
		$ct++;
	}

	return $subitems;
}

sub _update {
	my ($self, $ctrl) = @_;
	my $old_item = $self->{app}->db->items->find_one({_id => MongoDB::OID->new(value => ''.$self->{id})});

    if ($old_item->{alias} ne $self->{alias} || 
    	$self->{subcategory} ne $old_item->{subcategory} || 
    	$self->{category} ne $old_item->{category})
    {
		my $old = $ctrl->config('image_dir').'item/'.
			join('/', $old_item->{category}, $old_item->{subcategory}) .'/'.
			($old_item->{alias} ? $old_item->{alias} : $ctrl->config('default_img_dir'));

		my $new = $ctrl->config('image_dir').'item/'.
			join('/', $self->{category}, $self->{subcategory}) .'/'.
			($self->{alias} ? $self->{alias} : $ctrl->config('default_img_dir'));

		my $new_dir = $ctrl->config('image_dir').'item/'.join('/', $self->{category}, $self->{subcategory}) .'/';
		make_path($new_dir)	or die 'Error on creating article folder:'.$new_dir.' -> '.$! 
				unless (-d $new_dir);
		warn "*****\ncp $old $new\n*****";
		dircopy($old, $new);
		# system("cp -r $old $new");
    }
    return 1;
}

sub check_existing_alias {
	my ($self) = @_;
	my $filter->{alias} = $self->{alias};
	warn 'START:'.$self->{alias};
	$filter->{_id} 		= {'$ne' => MongoDB::OID->new(value => ''.$self->{id})} if $self->{id};
	my @full_match = $self->{app}->db->items->find($filter)->fields({alias => 1})->sort({alias => -1})->all;
	return '' if 0+@full_match == 0;
	$filter->{alias} 	= qr/^$self->{alias}\d*$/;
	my @check = $self->{app}->db->items->find($filter)->fields({alias => 1})->sort({alias => -1})->all;
	@check = sort {
		my $ob = 0+($b->{alias}=~/(\d+)$/)[0]||0; my $oa = 0+($a->{alias}=~/(\d+)$/)[0]||0;
		$ob <=> $oa;
	} @check;

	if ($self->{id} && 0+@full_match == 0) {
		my $old_item = $self->{app}->db->items->find_one({_id => MongoDB::OID->new(value => ''.$self->{id})});
		warn 'RET OLD' if ($old_item->{alias} =~ /^(.+?)\d*$/)[0] eq ($self->{alias} =~ /^(.+?)\d*$/)[0];
		return ($old_item->{alias} =~ /(\d*)$/)[0] if ($old_item->{alias} =~ /^(.+?)\d*$/)[0] eq ($self->{alias} =~ /^(.+?)\d*$/)[0];
	}

	return '' if ($self->{alias} =~ /(\d*)$/)[0] && ($self->{alias} =~ /(\d*)$/)[0] != ($check[0]->{alias} =~ /(\d*)$/)[0];
	warn 'prev num:'.(0+int(($check[0]->{alias} =~ /(\d+)$/)[0])+1);
	return ($#check > -1 ? int(($check[0]->{alias} =~ /(\d+)$/)[0]) + 1 : '');
}

sub TO_JSON {
    my $self = shift;
    my $tmp = \%{$self};
    return $json->encode($tmp);
}

sub as_hash {
	my $self = shift;
	my $tmp = {%{$self}};
    delete $tmp->{app};
    delete $tmp->{id};
    return $tmp;
}

1;