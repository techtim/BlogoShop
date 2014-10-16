package BlogoShop::Controller::Admin;

use Mojo::Base 'Mojolicious::Controller';

use Digest::SHA qw(sha256_hex);

use constant COLLECTION => 'admins';
use constant NEW_ADMIN_PARAMS => qw(login name email type);
use constant EDIT_ADMIN_PARAMS => (NEW_ADMIN_PARAMS, qw(old_pass new_pass new_pass_ctrl id));
use constant ARTICLE_PARAMS => qw(brand sale type tag active);

my @rndm_array = (0..9,'A'..'Z','a'..'z');

sub check_params {
	my ($self, $params) = @_;
	
	$params->{login} =~ s/(^\s+|\s+$)// if $params->{login};
	my $error_message = [];
	push @$error_message, 'no_login' if !$params->{login};
	push @$error_message, "no_email" unless $params->{email} =~ /(^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.)/i;
	
	return $error_message;
}

sub index {
	my $self = shift;

	my $session = $self->session();
	$self->stash(admin => $session->{admin});
	$self->stash(message => $self->flash('message')) if $self->flash('message');
	$self->stash(error_message => $self->flash('error_message')) if $self->flash('error_message');

    my $page = $self->req->param('page') ? $self->req->param('page') : 1;
	my $filter = {};
	$self->req->param($_) ? $filter->{$_} = $self->req->param($_) : () foreach ARTICLE_PARAMS;

    my @arts = $self->app->db->articles->find($filter)->
    skip(($page-1)*($self->config('articles_on_admin_page')||30))->
    limit($self->config('articles_on_admin_page')||30)->
    sort({'_id' => -1})->all;
	my $pages = $self->app->db->articles->find($filter)->count/($self->config('articles_on_admin_page')||30);
	$pages = $pages - int($pages) > 0 ? int($pages)+1 : $pages;

	return $self->render(
        tag => $filter->{tags} || '', 
        type => $filter->{type} || '',
        brand => $filter->{brand} || '',
        banners => $self->utils->get_banners($self, '', 680),
        articles => \@arts,
        pages => $pages || 0,
        template => 'admin/admin',
		format => 'html',
	);
}

sub list {
	my $self = shift;
    
	my $filter = {};
	my $page = $self->req->param('page') ? $self->req->param('page') : 1;
    
	$filter->{tag} = $self->req->param('tag') if $self->req->param('tag');
	$filter->{brand} = $self->req->param('brand') if $self->req->param('brand'); 
	$self->stash('message' => $self->flash('message')) if $self->flash('message');
	$self->stash('error_message' => $self->flash('error_message')) if $self->flash('error_message');
    
	my @arts = $self->app->db->articles->find($filter)->
    skip(($page-1)*($self->config('articles_on_admin_page')||30))->
    limit($self->config('articles_on_admin_page')||30)->
    sort({'_id' => -1})->all;
	my $pages = $self->app->db->articles->find($filter)->count/($self->config('articles_on_admin_page')||30);
	$pages = $pages - int($pages) > 0 ? int($pages)+1 : $pages;

	return $self->render(
        tag => $filter->{tag} || '', 
        type => $filter->{type} || '',
        brand => $filter->{brand} || '',
        
        articles => \@arts,
        pages => $pages || 0,
        template => 'admin/list_articles',
        format => 'html',
	);
}

# ADD ADMIN
sub add_admin {
	my $self = shift;
	
	$self->redirect_to('admin') if !$self->session()->{admin}->{type} || $self->session()->{admin}->{type} ne 'super'; 

	$self->render(
		template => 'admin/add_admin',
		map {$_ => ''} NEW_ADMIN_PARAMS,
		format => 'html',
	);
}

sub create_admin {
	my $self = shift;

	my $new_admin = {};
	for (NEW_ADMIN_PARAMS) {
		$new_admin->{$_} = $self->param($_);
	}
	
	# Check inputs
	$self->check_params($new_admin);
	
	$self->stash(error_message => ["login_exists"])
		if !$self->stash('error_message') &&  
			$self->admins->fetch_by_login($new_admin->{login});
	
	if ($self->stash('error_message')) {
		$new_admin->{type} = '' if !$new_admin->{type};
		return $self->render(
			%$new_admin,
			template => 'admin/add_admin',
			format => 'html',
		);
	} else {
		# Set random pass
		$new_admin->{pass} = '';
		$new_admin->{pass}.=$rndm_array[int(rand()*@rndm_array)] foreach (0..8);
        $new_admin->{email} =~ s/^\s+|\s+$//g;
		$self->stash(%$new_admin);

		my $mail = $self->mail(
		    to      => $new_admin->{email},
		    cc		=> $self->config('superadmin_mail'),
            from    => 'noreply@'.$self->config('domain_name'),
		    subject => 'Xoxloveka Login',
		    format => 'mail',
		    data => $self->render_mail(template => 'admin/registration_mail'),
            handler => 'mail',
		);

		$new_admin->{pass} = sha256_hex($new_admin->{pass});

		$self->admins->add_admin($new_admin);

		$self->flash(message => "admin_added" );
		return $self->redirect_to('admin');		
	}

}

# EDIT ADMIN
sub edit_admin {
	my $self = shift;
	
	$self->stash(admin => $self->session()->{admin});
	$self->render(
		template => 'admin/edit_admin',
		format => 'html',
	);
}

sub update_admin {
	my $self = shift;
	my $edited_admin ={};
	$edited_admin->{$_} = $self->req->param($_) foreach(EDIT_ADMIN_PARAMS);

	my $error_message = $self->check_params($edited_admin);

	push @$error_message, "login_exists"
		if 	$self->session()->{admin}->{login} ne $edited_admin->{login} && 
			$self->admins->fetch_by_login($edited_admin->{login});

	push @$error_message, 'wrong_pass' if !$edited_admin->{old_pass} || $self->session('admin')->{pass} ne sha256_hex($edited_admin->{old_pass});

	if ($edited_admin->{new_pass} && $edited_admin->{new_pass_ctrl}) {
		if ($edited_admin->{new_pass} ne $edited_admin->{new_pass_ctrl}) {
			push @$error_message, 'pass_dont_match';
		} else {
			$edited_admin->{pass} = sha256_hex($edited_admin->{new_pass});
		}
	}
	
	$self->stash('error_message' => $error_message) if @$error_message > 0;

	delete $edited_admin->{new_pass};
	delete $edited_admin->{new_pass_ctrl};
	delete $edited_admin->{old_pass};
	# delete $edited_admin->{type};

	$self->admins->update($self,$edited_admin) if !$self->stash('error_message');
	
	$self->stash(admin => $edited_admin);# return submitted params to form
	
	$self->stash('error_message') ?
		return $self->render(
			admin => $edited_admin,
			template => 'admin/edit_admin',
			format => 'html',
		)
	:	
		$self->flash(message => 'admin_edited'), $self->redirect_to('admin')
	;
}

1;