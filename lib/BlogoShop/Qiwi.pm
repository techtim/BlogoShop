package BlogoShop::Qiwi;

use Mojo::Base -base;

use SOAP::Lite;
use SOAP::WSDL;
use Data::Dumper;

use constant QIWI_URL => 'http://server.ishop.mw.ru';
use constant QIWI_PROXY => 'https://ishop.qiwi.ru/services/ishop';

use constant QIWI_CODES =>
{
	0 => 'Счет выставлен',
	13 => 'Сервер QIWI занят.',
	50 => 'Счет ожидает оплату.',
	51 => 'Счет ожидает оплату.',
	52 => 'Проводится.',
	60 => 'Счет успешно оплачен.',
	130 => 'Отказ от провайдера.',
	148 => 'Не прошел фин. контроль.',
	149 => 'Не прошел фин. контроль.',
	150 => 'Ошибка авторизации (указан неверный пароль в системе QIWI).',
	160 => 'Счет отменен',
	161 => 'Счет отменен по истечении его срока годности.',
	210 => 'Счет не найден.',
	215 => 'Счет с таким № уже существует.',
	241 => 'Сумма слишком мала.',
	242 => 'Превышена максимальная сумма платежа - 15 000 р.',
	255 => 'Ошибка соединения с сервером.',
	278 => 'Превышено максимально время получения списка счетов.',
	298 => 'Агента не существует в системе.',
	300 => 'Неожиданная неизвестная ошибка (также выводится, если в настройках платежного модуля указан неверный логинв системе QIWI).',
	330 => 'Ошибка шифрования.',
	339 => 'Не пройден контроль IP-адреса.',
	341 => 'Ошибка запроса - указаны не все данные.',
	370 => 'Превышено макс. кол-во одновременных запросов.',
};

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
	my ($self, $order, $c) = @_;

	my $soap_uri = 'http://server.ishop.mw.ru/';
		my $soap_proxy = 'https://ishop.qiwi.ru/services/ishop';

	my $item   = BlogoShop::Item->new($c);

	
	foreach (@{$order->{items}}) {
		$_->{info} = $item->get($_->{_id}, $_->{sub_id});
		$order->{sum} += $_->{price}*$_->{count};
	}
	$order->{sum} += $order->{delivery_cost};
	$order->{order_id} 	= ($order->{_id}->{value}=~/^(.{8})/)[0];
	$order->{order_id_full} 	= $order->{_id}->{value};

	my $client = SOAP::Lite->service('https://ishop.qiwi.ru/docs/IShopServerWS.wsdl')->proxy(QIWI_PROXY);
	my $dt = DateTime->from_epoch( epoch => time()+3600*24*30 );
	$order->{lifetime} = $dt->strftime('%d.%m.%Y %H:%M:%S');
	$order->{phone} =~ s/^(\+7|7|8)//;

	my $result = $client->call('createBill', 
		SOAP::Data->name( login => $self->{login} ),
		SOAP::Data->name( password => $self->{pass} ),
		SOAP::Data->name( txn => $order->{_id}->{value} ),
		SOAP::Data->name( user => ''.$order->{phone} ),
		SOAP::Data->name( amount => $order->{sum} ),
		SOAP::Data->name( comment => $order->{comment} || 'Xoxloveka.ru bill' ),
		SOAP::Data->name( lifetime => $order->{lifetime} ),
		SOAP::Data->name( alarm => 1 )->type('int'),
		SOAP::Data->name( create => 1 )->type('boolean'),
	);

	# warn 'QIWI result:'. Dumper $result;
	return {
		status => $result->result, 
		descr => QIWI_CODES->{$result->result}
	};
}

sub cancel_bill {
	my ($self, $order) = @_;

	my $client = SOAP::Lite->service('https://ishop.qiwi.ru/docs/IShopServerWS.wsdl')->proxy(QIWI_PROXY);
		
	my $result = $client->call('cancelBill', 
		SOAP::Data->name( login => $self->{login} ),
		SOAP::Data->name( password => $self->{pass} ),
		SOAP::Data->name( txn => ''.$order->{_id}->{value} ),
	);

	return { status=>160, descr=>QIWI_CODES->{160} };
}

sub get_bill_list {
	my ($self) = @_;

	my $client = SOAP::Lite->service('https://ishop.qiwi.ru/docs/IShopServerWS.wsdl')->proxy(QIWI_PROXY);

	my $vars = {};

	my $dt_from = DateTime->from_epoch( epoch => time()-3600*24*30 );
	$vars->{date_from} = $dt_from->strftime('%d.%m.%Y %H:%M:%S');
	
	my $dt_to = DateTime->from_epoch( epoch => time()+3600*4 );
	$vars->{date_to} = $dt_to->strftime('%d.%m.%Y %H:%M:%S');

	my $result = $client->call('getBillList', 
		SOAP::Data->name( login => $self->{login} ),
		SOAP::Data->name( password => $self->{pass} ),
		SOAP::Data->name( dateFrom => $vars->{date_from} ),
		SOAP::Data->name( dateTo => $vars->{date_to} ),
		SOAP::Data->name( status => 0 ),
	);

	my $html = $result->result;
	warn 'GET_BILL_LIST'. Dumper $result->result;
	my $orders = [];
	while ( $html =~ /id="([^"]+)" status="(\d+)"/g ) {
		push @$orders, {_id => $1, status => 0+$2, descr => QIWI_CODES->{$2}};
	}
	return $orders;
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