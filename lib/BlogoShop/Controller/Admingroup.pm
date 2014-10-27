package BlogoShop::Controller::Admingroup;

use Mojo::Base 'Mojolicious::Controller';

use utf8 qw(encode decode);

use Data::Dumper;
use File::Path qw(make_path remove_tree);

use constant GROUP_PARAMS => qw( active alias type name group_text preview_image images );

sub list {
    my $c = shift;

    my $session = $c->session();
    $c->stash(admin => $session->{admin});
    $c->stash(message => $c->flash('message')) if $c->flash('message');
    $c->stash(error_message => $c->flash('error_message')) if $c->flash('error_message');
    
    my $page = $c->req->param('page') ? $c->req->param('page') : 1;
    my $filter = {};

    my @groups = $c->app->db->groups->find($filter)->
        skip(($page-1)*($c->config('articles_on_admin_page')||30))->
        limit($c->config('articles_on_admin_page')||30)->
        sort({'_id' => -1})->all;

    my $pages = $c->app->db->groups->find($filter)->count() / ($c->config('articles_on_admin_page')||30);
    $pages = $pages - int($pages) > 0 ? int($pages)+1 : $pages;

    return $c->render(
        groups => \@groups,
        pages => $pages || 1,
        template => 'admin/list_groups',
        format => 'html',
    );
}

sub get {
    my $c = shift;
    
    $c->{collection} = 'groups';
    foreach (@{$c->req->cookies}){
        $c->stash('sid' => $_->value) if $_->{name} eq $c->config('cookie_name');
    }
    
    return # if no id(='add') move to add
        $c->stash('id') eq 'add' ? 
            $c->add() :
            $c->edit(); 
}

sub post {
    my $c = shift;
    
    $c->{collection} = $c->stash('collection') || 'groups';
    return $c->write_file() if $c->req->param('flash_file');
    return # if no id(='add') move to create
        $c->stash('id') eq 'add' ?
            $c->create() :
            $c->update() ;
}

sub check_input {
    my ($self, $group) = @_;
    
    my $error_message = [];
    
    ($self->req->param($_) ? $group->{$_} = $self->req->param($_) : ()) foreach GROUP_PARAMS;

    $group->{type} = 'group'; # defines path to save files
    $group->{group_text} =~ s/\r//g if $group->{group_text};
    
    { # shitty "Malformed UTF-8 character"
        no warnings;
        $group->{group_text} =~ s/\&raquo;|\&laquo;|\x{ab}|\x{bb}/\"/g if $group->{group_text};
    };

    # $group->{preview_image} = '' if !$group->{preview_image};

    $group->{alias} = lc($self->utils->translit($group->{alias}));
    $group->{alias} =~ s![\s\/\\]+!_!g;
    $group->{alias} =~ s![^\w\d\_]+|\_$|^\_!!g;
    $group->{alias} =~ s!\_+!_!g;
    $group->{alias} .= $self->groups->check_existing_alias($self->stash('id') || '', $group, $self->{collection});

    # $group->{date} = $self->utils->date_from_mongoid($group->{new_id}||$self->stash('id')) if $self->stash('id');
    
    push @$error_message, 'no_article_name' if !$group->{name} || $group->{name} eq '';
    push @$error_message, 'no_article_alias' if !$group->{alias} || $group->{alias} eq '';
    $group->{active} = 0,   $self->stash('error_message' => $error_message) if @$error_message > 0; 
    
    if (@$error_message > 0) {
        $self->flash('error_message' => $error_message);
        $self->redirect_to('/admin/group/edit/'.$self->stash('id')) if $self->stash('id');
    }
}

sub get_images {
    my ($self, $name, $group) = @_;
    
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
        ($group->{type} || $self->config('default_img_dir')).'/'.
        ($group->{alias} ? $group->{alias} : $self->config('default_img_dir')).'/';
        
        make_path($folder_path) or die 'Error on creating group folder:'.$folder_path.' -> '.$! unless (-d $folder_path);
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
    my $c = shift;
    
    $c->stash($_ => '') foreach GROUP_PARAMS;

    $c->render(
        action_type => 'add',
        groups => $c->groups->get_all(),
        groups_alias => $c->groups->get_all(1),
        template => 'admin/group',
        format => 'html',
    );
}

sub create {
    my $self = shift;
    my $group = {};
    
    $self->check_input($group);

    my $folder_path = $group->{type}.'/'.$group->{alias};
    $group->{images} = $self->utils->get_images($self, 'image', $folder_path);
    $group->{preview_image} = $self->utils->get_images($self, 'preview_image', $folder_path);

    $group->{group_text_rendered} = $self->utils->render_article($self, $group);

    my $id = $self->groups->add_group($group, $self->{collection});

    return $self->redirect_to('/admin/group' . '/edit/'.$id) if $self->stash('error_message');
    return $self->redirect_to('/admin/group' . '/edit/'.$id) if $self->req->param('update');
    $self->flash('message' => 'group_added');
    $self->flash('id' => $id);
    
    return $self->redirect_to('/admin');
}

sub edit {
    my $c= shift;

    my $group = BlogoShop::Group->new($c->stash('id'));
    
    if (!$group->{_id}) {
        $c->flash('error_message' => ['no_group']);
        return $c->redirect_to('/admin/'.$c->{collection});
    }

    $group->{$_} = ($group->{$_} ? $group->{$_} : '') foreach GROUP_PARAMS;
    
    my $item    = BlogoShop::Item->new($c);
    my $filter = {group_id => $c->stash('id')};

    $group->{items} = $group->get_group_items($filter);

    $c->stash('error_message' => $c->flash('error_message')) if $c->flash('error_message');
    $c->stash('message' => $c->flash('message')) if $c->flash('message');

    return $c->render(
        %$group,
        id => $group->{_id}->{value},
        groups => $c->groups->get_all(),
        groups_alias => $c->groups->get_all(1),
        action_type => 'edit',
        template => 'admin/group',
        format => 'html',
    );  
}

sub update {
    my $self = shift;
    
    my $group = {};
    
    $self->stash('id' => $self->req->param('id')) if !$self->stash('id');
    
    if (!$self->stash('id')){
        $self->flash('error_message' => ['no_group']);
    }
    elsif ( $self->req->param('delete')) {
        $self->groups->remove_group($self->stash('id'), $self->{collection});
        $self->flash(message => 'group_removed');
    } else {
        $self->check_input($group);
        
        my $folder_path = $group->{type}.'/'.$group->{alias};
        $group->{images} = $self->utils->get_images($self, 'image', $folder_path);
        $group->{preview_image} = $self->utils->get_images($self, 'preview_image', $folder_path);

        $group->{group_text_rendered} = $self->utils->render_article($self, $group);
        
        if ($self->stash('error_message')) {
            my $id = $self->groups->update_group($self->stash('id'), $group, $self->{collection});
            return $self->redirect_to('/admin/group' . '/edit/' . $id);
        }

        my $id = $self->groups->update_group($self->stash('id'), $group, $self->{collection}); # id can change when change group time
        
        #       $self->utils->update_active_rubrics($self) if $self->{collection} eq 'groups';
        
        $self->flash(message => 'group_updated');
        if ($self->req->param('update')) {
            return $self->redirect_to('/admin/group' . '/edit/' . $id) ;
        }
    }
    
    return $self->redirect_to('/admin');
}

sub update_items_make_group_array {
    my $c = shift;

    my $items = [$c->app->db->items->find({group_id => {'$exists' => 1}})->all];
    foreach (@$items) {
        $c->app->db->items->update({_id => $_->{_id}}, {'$set' => {group_id => [$_->{group_id}]}});
    }

    return $c->render(json => {"update items" => 'ok'});
}

1;