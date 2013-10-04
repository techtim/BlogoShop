package BlogoShop::Controller::Qiwi;

use Mojo::Base 'Mojolicious::Controller';
use Mojo::UserAgent;
use Mojo::Util qw/url_escape url_unescape/;
use SOAP::Lite;

use constant BILL_URL => 'w.qiwi.ru/setInetBill_utf.do';

sub soap {
	my $c = shift;
	warn $c->dumper($c->req);

	return $c->render(json => {ok=>1});
}

sub bill {
	my $c = shift;
	my $order;
	my $p = {
		from => $c->config->{qiwi_id},
		txn_id => '12341d1a23s4d12asd', # $order->{_id}
		summ => '1234'.'.00',
		lifetime => '240',
		check_agt => 'false',
		to => 9261365338,
		com => 'test test',
	};

	# $p->{to} = $c->req->param("to");
	# $p->{to} = '9261365338';
	# $p->{to} =~ s/[^\d]+// if $p->{to};
warn $c->dumper($p);
	# return $c->render(json => {error => 'wrong "to", must be 10 digit phone'}) if !$p->{to} || $p->{to} !~ m/(\d{10})/;

	my $ua = Mojo::UserAgent->new();
	my $url = BILL_URL.'?' . (join '&', map{ ($_ . '=' . url_escape( $p->{$_} ))} keys(%$p));
	warn $url;
	my $res = $ua->get($url)->res;
	# $url = BILL_URL;
	# my $res = $ua->post($url => form => $p)->res;
	warn $c->dumper($res);
	return $c->render(text => $res->body);
}

sub soap_bill {
	my $c = shift;

	my $soap_uri = 'http://server.ishop.mw.ru/';
		my $soap_proxy = 'http://ishop.qiwi.ru/services/ishop';
		
		my $date_from = '01.03.2010 12:00:00';
		my $date_to = '30.03.2010 12:00:00';
		my $login = '';
		my $password = '';
		my $txnID = '';

		my $client = SOAP::Lite->uri('');
		$client->proxy($soap_proxy);
		
		my $result = $client->call('cancelBill', 
			SOAP::Data->name( login => $login ),
			SOAP::Data->name( password => $password ),
			SOAP::Data->name( txn => $txnID )
		);
		print "Content-type:text/html\r\n\r\n"; 

		print Dumper($result);
		
};
}


1;