package BlogoShop::Courier;

use Mojo::Base -base;
use Mojo::Util qw( url_escape );

use utf8;
use Digest::MD5 qw(md5_hex);
use JSON::XS;
use DateTime;
use Data::Dumper;

use constant {
	# LOG => 'mral.ex.shishkin@gmail.com',
	# PASS => 'test_api',
	LOG => 'xoxloveka.shop@gmail.com',
	PASS => 'original7',
	URL => 'http://citycourier.me/api/',
};


sub new {
	my ($class, $config) = @_;
	my $self = {};
	$self->{ua} = Mojo::UserAgent->new();
	$self->{config} = BlogoShop->conf;

	_auth($self);
	bless $self, $class;
}

sub _auth {
	my $self = shift;
	warn 'l => '.LOG. 'pwd1 => '.md5_hex(LOG.md5_hex(PASS));
	# my $tx = $self->{ua}->post(URL.'user/login' => form => { l => LOG, pwd1 => md5_hex(LOG.md5_hex(PASS)) });
	my $tx = $self->{ua}->post(URL.'user/login?l='.LOG.'&pwd1='.md5_hex(LOG.md5_hex(PASS)));

	if (my $res = $tx->success) {
		# warn Dumper $res;
		my $json = {};
		eval {
			$json = decode_json($res->body);
		};
		if ($@) {
			warn 'Error on JSON parse from CityCourier: '.$@;
			die 'Cant authorize CityCourier';
		} else {
			$self->{auth} = $json->{result};
			return 1;
		}
	} else {
		die 'Cant authorize CityCourier';
	}
}

sub call {
	my ($self, $order) = @_;

	my $date = DateTime->from_epoch(epoch => time());
	$date->set(day=> $date->day+1,hour => 12-4, minute => 0, second => 0); # hour 12-4 couse we are in moscow +4 GMT
	$order->{phone} =~ s/[^\d]+//m if $order->{phone};

	return 0 if !$order->{address};

	my $tx = $self->{ua}->post(URL.'order/save?'.
		'sid='.$self->{auth}->{sid}.
		'&points[0][address]='.$self->{config}->{address_for_courier}.
		'&points[0][description]='.$self->{config}->{descr_for_courier}.
		'&points[0][phone]='.$self->{config}->{phone_for_courier}.
		'&points[1][address]='.$order->{address}.
			($order->{dom} ? ' д. ' .$order->{dom} : '').
			($order->{korp}? ' к. ' .$order->{korp}: '').
			($order->{flat}? ' кв. '.$order->{flat}: '').
		($order->{phone} ? '&points[1][phone]='.$order->{phone} : '').
		'&dt_start='.$date->epoch.
		'&dt_finish='.($date->epoch+3600*8)
	);

	if (my $res = $tx->success) {
		warn 'COUR RES'. Dumper $tx;
		my $json = decode_json($res->body);
		return 1 if $json->{system}{code};
		return 0;
	} else {
		return 0;
	}
}

1;