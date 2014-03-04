package Bspk::Event;

use Mojo::Base -base;

sub new {
	my ($class, $mongo, $id) = @_;
	my $self = {};
	$self = $mongo if $id =~ m!^([\d\w]+)!;
	$self->{mongo} = $mongo if $mongo;
	bless $self, $class;
}