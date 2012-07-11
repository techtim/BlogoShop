package BlogoShop::Admins;

use Mojo::Base -base;

use constant {COLLECTION => 'admins'};
# my $mongo_table = $class->dbh->get_collection(COLLECTION);

sub new {
	my $class = shift;
	my $self;
	$self->{db} = shift;

	bless $self, $class; 
}

sub check {
	my ($self, $login, $pass) = @_;

	# Success
	if (my $fetch = $self->{db}->get_collection(COLLECTION)->find_one(login => $login))
	{
		if ($fetch->{admin_pass} eq sha256_hex($pass))
		{
			return $fetch; 
		}
	}
	# Fail
	return;
}

sub update {
	my ($self, $controller, $params) = @_;
	my $id = $controller->session()->{admin}->{_id};
    $params->{_id} = ref $id eq 'HASH' ? $id->{'$oid'} : $id;
    delete $params->{_id};
#    warn 'ADM PAR '. $controller->dumper($params);
#	$self->{db}->get_collection(COLLECTION)->update(
#	{
#		_id => MongoDB::OID->new(value => $id)
#	}, {
#		'$set' => $params
#	});
#
#	$controller->session(admin => $self->fetch_by_id($id));
    die;	
	return 1;
}

sub fetch_by_id {
	my $self = shift;
	my $id = shift;

	return $self->{db}->get_collection(COLLECTION)->find_one({
		_id => MongoDB::OID->new(value => $id)
	});
}

sub fetch_by_login {
	my $self = shift;
	my $login = shift;

	return $self->{db}->get_collection(COLLECTION)->find_one({
		login => $login
	});
}

sub add_admin {
	my ($self, $new_admin) = @_;
	
	return 'no params' if !$new_admin;
	$self->{db}->get_collection(COLLECTION)->save($new_admin);
	return '';
} 
1;