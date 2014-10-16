package BlogoShop::Order;

use Mojo::Base -base;

sub new {
	my ($class) = @_;
	my $self = {};

	return bless $self, $class;
}
