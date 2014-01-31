package BlogoShop::Docs;

use Mojo::Base -base;

use utf8 qw(encode decode);
use Net::Google::Spreadsheets;
use Data::Dumper;

sub new {
	my $class= shift;
	my $self = {}; 
	$self->{redis} = Redis->new;
	$self->{months} = [qw(января февраля марта апреля мая июня июля августа сентября октября ноября декабря)];
	$self->{sheets} = Net::Google::Spreadsheets->new(
	    username => 'xoxloveka.bot@gmail.com',
	    password => 'original88'
	  );
	bless $self, $class; 
}

sub create_brand_request {
	my ($self, $items) = @_;
	my $date= join ('.', (localtime(time))[2], (localtime(time))[3]+1, (localtime(time))[4]+1900);

	my $sorted = {};
	# push @{$sorted->{$_->{brand}}}, $_ foreach @$items;

	 my @spreadsheets = $self->{sheets}->spreadsheets();
	warn 'SHIITS'.Dumper(\@spreadsheets);
}

1;