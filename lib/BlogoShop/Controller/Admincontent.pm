package BlogoShop::Controller::Admincontent;

use Mojo::Base 'Mojolicious::Controller';

use strict;
use warnings;
use utf8;

use File::Path qw(make_path remove_tree);

use constant BRAND_PARAMS => qw(name descr id category logo images);
use constant BANNER_PARAMS => qw(id link image category weight);

sub list_categories {
    my $self = shift;
    my $error_message = [];
    
    return $self->render(
    	template => 'admin/categories',
    	categories => [$self->app->db->categories->find()->sort({pos=>1})->all] || [],
    ) unless $self->stash('save');
    
    my $pars = $self->req->params();
    my $even = 0;
    my $key = '';
    my @params = ();
    foreach (@{$pars->{params}}) {
        !$even ? $key = $_ :
        push @params, {$key=>$_};
        $even = !$even;
    }

    foreach my $par (@params) {
        my $key = ''.(keys %$par)[0];
        push @$error_message, 'no_name' && next unless $par->{$key} =~ m/([^\{\}\[\]]+)$/i;
        $self->flash('error_message' => $error_message);
        if ($par->{new_cat} && $par->{new_cat} ne '') {
            my $cat->{name} = $par->{new_cat};
            $cat->{_id} = $self->utils->translit($cat->{name}, 1);
            $self->app->db->categories->save($cat) if @$error_message == 0;
            next;
        } elsif ($par->{delete_cat} && $par->{delete_cat} ne '') {
            $self->app->db->categories->remove({_id => $par->{delete_cat}});
        } elsif ($key =~ m/(\:+)/ && $par->{$key} ne '') {
            my ($act, $cat) = split ':', $key;
            #            warn $self->dumper($act, $cat);

            $self->app->db->categories->update(
	            {_id => $cat}, 
	            {'$push' => {subcats => {
	            	_id => $self->utils->translit($par->{$key}, 1), name => $par->{$key}}}
	            }
            ) if $act eq 'new_subcat';
#            warn "DELETE $cat \-\> $par->{$key}";
            $self->app->db->categories->update({_id => $cat}, { '$pull' => {subcats => {_id => $par->{$key}}} }) if $act eq 'delete_subcat'
        }
    }

    my @cats = $self->app->db->categories->find()->sort({pos=>1})->all;

	foreach my $cat (@cats) {
		my $pos = 0+$self->req->param('pos.cat.'.$cat->{_id});
		warn $cat->{_id}.":  $cat->{pos} => $pos "; 
		if ($pos != $cat->{pos}) {
			$self->app->db->categories->update(
				{pos => $pos},
				{'$set' => {pos => $cat->{pos}}}
			);
			$self->app->db->categories->update(
	            {_id => $cat->{_id}}, 
	            {'$set' => {pos => $pos}}
	        );
		}
		foreach (@{$cat->{subcats}}) {
			$_->{pos} = 0+$self->req->param("pos.cat.$cat->{_id}.subcat.$_->{_id}");
		}
		@{$cat->{subcats}} = sort {$a->{pos} <=> $b->{pos}} @{$cat->{subcats}}; 
		$self->app->db->categories->update(
            {_id => $cat->{_id}}, 
            {'$set' => {subcats => $cat->{subcats}}}
        );
		
		$self->dumper( $self->app->db->categories->find()->fields({pos=>1, subcats=>1})->sort({pos=>1})->all);
	}

#warn $self->dumper(\@cats);
    $self->redirect_to('admin/categories');
}

sub list_brands {
    my $self = shift;	
    my $error_message = [];
    
    return $self->redirect_to('admin/brands') if $self->req->param('cancel');
    
    if ($self->req->param('delete')) {
        $self->app->db->brands->remove({_id => ($self->req->param('delete')=~m/([^\{\}\[\]]+)/)[0]});
        return $self->redirect_to('admin/brands');
    }
    
    if ($self->stash('do') && $self->stash('do') eq 'edit') {
        my $brand = $self->stash('brand') || $self->req->param('brand') || '';
        $brand = $self->app->db->brands->find_one({_id => $brand});
        return $self->redirect_to('admin/brands') if !$brand;
        $self->stash(%$brand);
        
    } elsif ($self->stash('do') && $self->stash('do') eq 'save')  { 
        my $brand = {};
        $brand->{$_} = $self->req->param($_) foreach BRAND_PARAMS;
        delete $brand->{images};
        push @$error_message, 'no_name' if !$brand->{name} || $brand->{name} =~ m/([\{\}\[\]]+)$/i;
        push @$error_message, 'no_descr' if !$brand->{descr};
        $brand->{category} = $self->app->db->categories->find_one({_id => $brand->{category}}) if $brand->{category};
        push @$error_message, 'no_category' if !$brand->{category};
        
        my $file = $self->req->upload('logo');
        push @$error_message, 'no_logo'
        unless $self->req->param('logo_loaded') || $file || $file->filename || $file->filename =~ /\.(jpg|jpeg|bmp|gif|png)/i;
        if (@$error_message == 0) {
            
            my $id = $brand->{id} || $self->utils->translit($brand->{name}, 1);
            
            $brand->{logo} = $self->req->param('logo_loaded') || '';
            if ($file->filename =~ /\.(jpg|jpeg|bmp|gif|png)/i) {
                my $type = $1;
                my $folder_path = $self->config('image_dir').'brands/'.$id;
                $folder_path =~ s!/?$!/!;
                make_path($folder_path) or die 'Error on creating image folder:'.$folder_path.' -> '.$! unless (-d $folder_path);
                $file->move_to($folder_path.'logo.'.$type);                
                $brand->{logo} = $self->config('image_url').'brands/'.$id.'/logo.'.$type;
            }
            #            $brand->{images} = $self->utils->get_images($self, 'image', $folder_path);
            
            if (delete $brand->{id}) { # delete returns true -> means save after edit
                $self->app->db->brands->update({_id => $id }, {'$set' => {%$brand}});
            } else {
                $brand->{_id} = $id;
                $self->app->db->brands->save($brand);
            }
            return $self->redirect_to('admin/brands/edit/'.$id);
        } else {
            $self->stash(error_message => $error_message);
            $self->stash(%$brand);
        }
    } else {
        $self->stash('error_message' => $error_message);
        $self->stash($_ => '') foreach BRAND_PARAMS;
    }
    $self->stash(brands => [$self->app->db->brands->find()->sort({_id => 1})->all] || []);
    return $self->render(
        images => $self->stash('images') || '',
        do => $self->stash('do') || '',
        categories => [$self->app->db->categories->find()->all] || [],
        template => 'admin/brands',
        format => 'html', 
    );
}

sub list_banners {
    my $self = shift;	
    my $error_message = [];
    
    return $self->redirect_to('admin') if $self->req->param('cancel');
    
    my $banner = {};
    if ($self->req->param('delete')) {
        $self->app->db->banners->remove({_id => MongoDB::OID->new(value => ($self->req->param('delete')=~m/([^\{\}\[\]]+)/)[0])});
        return $self->redirect_to('admin/banners');
    }
    
    if ($self->stash('do') && $self->stash('do') eq 'edit') {
        my $banner = $self->stash('banner') || $self->req->param('banner') || '';
        $banner = $self->app->db->banners->find_one({_id => MongoDB::OID->new(value => $banner)});
        return $self->redirect_to('admin/banners') if !$banner;
        $self->stash(%$banner);
        
    } elsif ($self->stash('do') && $self->stash('do') eq 'save')  { 
        $banner->{$_} = $self->req->param($_) foreach BANNER_PARAMS;
        push @$error_message, 'no_link' if !$banner->{link};
        
        my $file = $self->req->upload('image');
        push @$error_message, 'no_logo' 
        unless $self->req->param('image_loaded') || $file || $file->filename || $file->filename =~ /\.(jpg|jpeg|bmp|gif|png)/i;
        if (@$error_message == 0) {
            $banner->{image} = $file && $file->filename ? 
                $self->utils->store_image($self, $file, 'banners') :
                $self->req->param('image_loaded');
            $banner->{weight} += 0;
            $banner->{link} = 'http://'.$banner->{link} unless $banner->{link} =~ m!^(http://)!;
            
            my $id = delete $banner->{id};
            if ($id) { # delete returns true -> means save after edit
                $self->app->db->banners->update({_id => MongoDB::OID->new(value =>$id)}, {'$set' => {%$banner}});
                #                warn 'banner UPD '. $self->dumper($banner);
            } else {
                $id = $self->app->db->banners->save($banner);
                #                warn 'banner SAVE '. $self->dumper($banner);
            }
            return $self->redirect_to('admin/banners/edit/'.$id);
            
        } else {
            $self->stash('error_message' => $error_message);
            $self->stash(%$banner);
        }
        
    } else {
        $self->stash($_ => '') foreach BANNER_PARAMS;
    }
    
    my @weights; push @weights, {_id => $_, name => $_} foreach (1..5);
    my %cat_alias;
    foreach (@{$self->app->defaults->{categories}}) {
        $cat_alias{$_->{_id}} = $_->{name};
        $cat_alias{$_->{_id}} = $_->{name} foreach @{$_->{subcats}};
    }
    
    return $self->render(
        banners => [$self->app->db->banners->find()->sort({pos => 1})->all] || [],
        weights => \@weights,
        cat_alias => \%cat_alias || {},
        do => $self->stash('do') || '',
        template => 'admin/banners',
        format => 'html',
    );
}

1;