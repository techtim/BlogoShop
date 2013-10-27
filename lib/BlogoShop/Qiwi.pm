package BlogoShop::Qiwi;

use Mojo::Base -base;

use SOAP::Lite;
use Data::Dumper;

use defined QIWI_URL => 'https://ishop.qiwi.ru/services/ishop';

sub new {
	my ($class, $config) = @_;
	my $self = {};
	$self->{ua} = Mojo::UserAgent->new();
	$self->{config} = BlogoShop->conf;
	$self->{client} = SOAP::Lite->uri(QIWI_URL);
	$self->{login} = $self->{config}{qiwi_id};
	$self->{pass} = $self->{config}{qiwi_pass};

	bless $self, $class;
}

sub create_bill {
	my ($self, $order) = @_;

	my $soap_uri = 'http://server.ishop.mw.ru/';
		my $soap_proxy = 'http://ishop.qiwi.ru/services/ishop';

	my $item   = BlogoShop::Item->new($self);

	foreach my $order (@$orders) {
		foreach (@{$order->{items}}) {
			$_->{info} = $item->get($_->{_id}, $_->{sub_id});
			$order->{sum} += $_->{price}*$_->{count};
		}
		$order->{order_id} 	= ($order->{_id}->{value}=~/^(.{8})/)[0];
		$order->{order_id_full} 	= $order->{_id}->{value};
	}

	my $client = SOAP::Lite->uri('');
	$client->proxy($soap_proxy);
	my $dt = DateTime->from_epoch( epoch => time()+3600*24*30 );
	$order->{lifetime} = $dt->strftime('%Y-%m-%d %H:%M:%S');
	# $self->{client}->service('https://ishop.qiwi.ru/docs/IShopServerWS.wsdl');
	my $result = $self->{client}->call('createBill', 
		SOAP::Data->name( login => $self->{login} ),
		SOAP::Data->name( password => $self->{pass} ),
		SOAP::Data->name( txn => ''.$order->{_id} ),
		SOAP::Data->name( user => ''.$order->{phone} ),
		SOAP::Data->name( amount => $order->{sum} ),
		SOAP::Data->name( comment => $order->{comment} ),
		SOAP::Data->name( lifetime => $order->{lifetime} ),
		SOAP::Data->name( alarm => 1 )->type('int'),
	);

	warn Dumper $result;
	return $result;
}

sub cancel_bill {
	my ($self, $order) = @_;

	my $soap_uri = 'http://server.ishop.mw.ru/';
		my $soap_proxy = 'http://ishop.qiwi.ru/services/ishop';
		
		# my $date_from = '01.03.2010 12:00:00';
		# my $date_to = '30.03.2010 12:00:00';
		my $login = '';
		my $password = '';
		my $txnID = '';

		my $client = SOAP::Lite->uri('');
		$client->proxy($soap_proxy);
		
		my $result = $self->{client}->call('cancelBill', 
			SOAP::Data->name( login => $self->{login} ),
			SOAP::Data->name( password => $self->{pass} ),
			SOAP::Data->name( txn => ''.$order->{_id} ),
		);
		print "Content-type:text/html\r\n\r\n"; 

		print Dumper($result);
	return $result;
}

# CREATE BILL
# login
# password
# user
# amount
# comment
# txn
# lifetime
# <xs:element name="alarm" type="xs:int"/>
# <xs:element name="create" type="xs:boolean"/>



1;