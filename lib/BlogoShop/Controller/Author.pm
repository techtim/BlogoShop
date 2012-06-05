package BlogoShop::Controller::Author;

use Mojo::Base 'Mojolicious::Controller';

use Digest::SHA qw(sha256_hex);

use constant COLLECTION => 'admins';
use constant NEW_ADMIN_PARAMS => qw(login name email type);
use constant EDIT_ADMIN_PARAMS => (NEW_ADMIN_PARAMS, qw(old_pass new_pass new_pass_ctrl id));

my @rndm_array = (0..9,'A'..'Z','a'..'z');

# ADD ADMIN
sub add_author {
	my $self = shift;
	$self->redirect_to('admin') if !$self->session()->{admin}->{type} || $self->session()->{admin}->{type} ne 'super'; 
	$self->stash('name' => $self->flash('name')) if $self->flash('name');
	$self->stash('error_message' => [$self->flash('error_message')]) if $self->flash('error_message');

	$self->render(
		template => 'admin/add_author',
		format => 'html',
		map {$_ => ''} NEW_ADMIN_PARAMS,
	);
}

sub create_author {
	my $self = shift;
	
	my $name = $self->param('name');
	
#	if ($name =~ m/([\w\d]+\ [\w\d]+)/) {
		$self->articles->add_author($name);
		$self->flash(message => "author_added");
		return $self->redirect_to('admin');
#	} else {
#		$self->flash(error_message => "bad_author_name");
#		$self->flash(name => $name);
#		return $self->redirect_to('admin/add_author');
#	}
}

1;