package BlogoShop::Logistics;

use Mojo::Base -base;

use utf8 qw(encode decode);
use MIME::Base64;
use URL::Encode qw(url_encode);
use Encode;
use LWP::UserAgent;
use XML::Simple;
use Data::Dumper;
use constant LOGISTICS_API => 'http://client-shop-logistics.ru/index.php?route=deliveries/api';

sub new {
	my ($class, %args) = @_;
	my $self = {%args};
	$self->{ua} = Mojo::UserAgent->new();
	$self->{logistics_id} = BlogoShop->conf->{logistics_id};
	bless $self, $class;
}

sub _send_req {
	my ($self, $params) = @_;

	$params->{logistics_id} = $self->{logistics_id};

	my $xml_req = $self->{controller}->render(
		partial => 1,
		%$params,
		format => 'xml',
	);

	my $ua = LWP::UserAgent->new();
	my $res = $ua->post( 'http://client-shop-logistics.ru/index.php?route=deliveries/api', {xml => encode_base64($xml_req)} )->content;
	my $result = {};
	eval {
		$result = XMLin(Encode::decode('utf8', $res));
	};
	if ($@) {
		warn 'XML parse error:'.$@;
		warn $res;
		$result = { error => $res ? $res : 'soap parse error:'.$@ };
	}

	return $result;
}

sub check_cost {
	my ($self, $order) = @_;

	my %params;
	$order->{from_city} = 405065;
    $order->{to_city} = $order->{city};

	$order->{template} = 'xml/delivery_cost';

	my $res = $self->_send_req($order);

	return $res;
}

sub get_cities {
	my ($self, $filter) = @_;
	# return [] unless ref $filter ne ref {};
	return [BlogoShop->db->logCities->find()->sort({name => 1})->all];
}

sub get_data {
	my ($self, $type) = @_;

	return {} unless $type =~ m!(city|metro)!;
	my $params = {
		logistics_id => $self->{logistics_id},
		type => $type
	};

	my $xml_req = $self->{controller}->render(
		partial => 1,
		%$params,
		template => 'xml/delivery_data',
		format => 'xml',
		# handler  => 'tx',
	);
	# my $ua = Mojo::UserAgent->new();
	my $ua = LWP::UserAgent->new();
	my $res = $ua->post( 'http://client-shop-logistics.ru/index.php?route=deliveries/api', {xml => encode_base64($xml_req)} )->content;
	my $xml =XMLin(Encode::decode('utf8', $res), ForceArray => 1);
	
	if ($type eq 'city') {
		BlogoShop->db->logCities->remove();
		
		foreach ( @{$xml->{cities}[0]{city}} ) {
			my $data = {
				_id => $_->{code_id}[0],
				name => $_->{name}[0],
				courier => $_->{is_courier}[0],
			};

			BlogoShop->db->logCities->save($data);
		}
	} elsif ($type eq 'metro') {
		BlogoShop->db->logMetros->remove();
		
		foreach (@{$xml->{metros}[0]{metro}}) {
			my $data = {
				_id => $_->{code_id}[0],
				name => $_->{name}[0],
				city_id => $_->{city_code_id}[0],
			};

			BlogoShop->db->logMetros->save($data);
		}
	}
	return $xml;
}

1;