package BlogoShop;

use Mojo::Base 'Mojolicious';

use MongoDB;

use JSON::XS;
use Redis;

use BlogoShop::Articles;
use BlogoShop::Admins;
use BlogoShop::Utils;
use BlogoShop::Item;
use BlogoShop::Qiwi;
use BlogoShop::Logistics;
use BlogoShop::Docs;
use BlogoShop::Group;

# This method will run once at server start
sub startup {
	my $self = shift;

	# Add conf
	$self->plugin('yaml_config',  {
		file      => 'BlogoShop.yml',
		stash_key => 'config',
		class     => 'YAML::XS',
		helper	  => 'config'
	});
	
	# Log conf
	$self->log->level($self->config('log_level'));
	$self->log->path('log/development.log');
	$SIG{__WARN__} = sub {
		my $mess = shift || '';
		$mess =~ s/\n$//;
		@_ = ($self->log, $mess); 
		goto &Mojo::Log::warn; 
	};
	
	# Set cache size for rendered templates
	$self->renderer->cache->max_keys(500);

	# Debug benchmarks
	#	$self->plugin('request_timer') if $self->config('log_level') eq 'debug';

	# Make signed cookies secure
	$self->secret($self->config('cookie_secret'));
	$self->sessions->cookie_name($self->config('cookie_name'));
	$self->sessions->default_expiration($self->config('cookie_expiration'));
	$self->sessions->cookie_domain('.'.$self->config('domain_name'));

	#Set Mode 'production' || 'development'
	$self->mode($self->config('mojo_mode'));

	# Mongo connection, Memcached and data models for forked process
	(ref $self)->attr(
		db => sub {
			return MongoDB::Connection->new(
				host => $self->config('db_host'), 
				port => $self->config('db_port')
			)->get_database($self->config('db_name'));
		}
	);
	(ref $self)->attr(
		memd => sub {
			return Cache::Memcached::Fast->new({
				servers => [ { address => 'localhost:11211', weight => 2.5 } ]
			});
		}
	);

	(ref $self)->attr(admins 	=> sub {return BlogoShop::Admins->new($self->db, $self->config)});
	(ref $self)->attr(articles 	=> sub {return BlogoShop::Articles->new($self->db, $self->config)}); 
	(ref $self)->attr(groups	=> sub {return BlogoShop::Group->new()});
	(ref $self)->attr(items 	=> sub {return BlogoShop::Item->new($self, $self->stash('id'))});
	(ref $self)->attr(courier 	=> sub {return BlogoShop::Courier->new()});
	(ref $self)->attr(conf 	=> sub {return $self->config});
	(ref $self)->attr(qiwi 	=> sub {return BlogoShop::Qiwi->new()});
	(ref $self)->attr(docs 	=> sub {return BlogoShop::Docs->new()});

	# Helpers part
	$self->helper(db 		=> sub { shift->app->db });
	$self->helper(admins 	=> sub { shift->app->admins });
	$self->helper(articles 	=> sub { shift->app->articles });
	$self->helper(groups 	=> sub { shift->app->groups });
	$self->helper(items 	=> sub { shift->app->items });
	$self->helper(courier 	=> sub { shift->app->courier });
	$self->helper(qiwi 	=> sub { shift->app->qiwi });
	$self->helper(docs 	=> sub { shift->app->docs });
	$self->helper(logistics => sub { return BlogoShop::Logistics->new(
			controller => shift,
	) } );

	# $self->helper(config 	=> sub { shift->app->config });

	my $utils = BlogoShop::Utils->new();
	$self->helper('utils' => sub {return $utils});
	
	my $json = JSON::XS->new();
	$self->helper('json' => sub {return $json});


	$self->plugin(mail => {
		from     => 'noreply@sport.megafon.ru',
		type     => 'text/plain',
		encoding => 'base64',
		how      => 'sendmail',
		howargs  => [ '/usr/sbin/sendmail -t' ],
	});

	# Security stuff 
	$self->plugin('CSRFProtect');
	# turn of js in this plug, couse we make it better in j.js
	$self->helper(jquery_ajax_csrf_protection => sub {
		my $c = shift;
		my $token = $c->session('csrftoken') || md5_sum( md5_sum( time() . {} . rand() . $$ ) );
		$c->session( 'csrftoken' => $token );
		my $js = '<meta name="csrftoken" content="' . $token . '"/>';
		Mojo::ByteStream::b($js);
	} );

	# Header plug for subdomains
	$self->plugin('HeaderCondition');

	# Mongo connection for startup
	my $mongo = MongoDB::Connection->new(
		host => $self->config('db_host'), 
		port => $self->config('db_port')
	)->get_database($self->config('db_name'));

	my @types = $mongo->types->find({})->all;# || ();
	my %types_alias = @types > 0 ? map {$_->{_id} => $_->{name}} @types : ();
	my @cats = $mongo->categories->find({})->sort({pos => 1})->all;
	$self->defaults({
		types       => \@types,
		types_alias => \%types_alias,
	});

	$self->hook(before_routes => sub {
		my $c = shift;
		if($c->req->url->path =~ m!^(/soap)!){
			$c->session('csrftoken' => 1);
			$c->param('csrftoken' => 1); 
		}
	});

	$self->hook(around_dispatch => sub {
    	my ($next, $c) = @_;

		my @cats = $c->app->db->categories->find({})->sort({pos => 1})->all;
		$c->stash->{categories} 	  	= \@cats;
		$c->stash->{categories_alias} 	= $c->app->utils->get_categories_alias(\@cats);
		$c->stash->{categories_info} 	= $c->app->utils->get_categories_info(@cats);
		$c->stash->{active_categories} = $c->app->utils->get_active_categories($c->app->db);
		$c->stash->{list_brands} 	  	= $c->app->utils->get_list_brands($c->app->db);
		$c->stash->{name_brands} 	  	= {map {$_->{_id} => $_->{name}} @{$c->stash->{list_brands}}};
		# $c->stash->{static_pages}		= {map {''.$_->{_id} => $_} $c->app->db->statics->find({})->fields({_id=>1,alias=>1,name=>1})->all};
		$next->();
	});

	# Routes
	my $r = $self->routes;

	# --AJAX--
	$r->route('/admin/article/:id/active/:bool', id => qr/[\d\w]+/, bool => qr/1|0/)->via('post')->to('controller-Ajax#activate_post', id => 'add');
	$r->route('/import_cities')->to('controller-Ajax#import_cities');
	$r->route('/update')->to('controller-Ajax#items_update_alias');

	$r->route('/subscribe')->via('post')->to('controller-ajax#subscribe');
	# make from array of hashes array of _ids and join ids to filter cuts in url
	my $bind_static = join '|', map {$_->{alias}} $mongo->statics->find({})->fields({_id=>0,alias=>1})->all;
	$r->route('/:template', template => qr/$bind_static/)->to('controller-static#show') if $bind_static;

	$r->route('/rss')->to('controller-article#rss');
	$r->route('/yandex_market')->to('controller-shop#yandex_market');
	$r->route('/get_items_banner')->to('controller-ajax#get_banner_xml');
	$r->route('/orders_cities')->to('controller-ajax#orders_cities');
	$r->route('/bill')->to('controller-qiwi#bill');
	$r->route('/soap')->to('controller-qiwi#soap');

	# $r->route('/:type/:alias', type => qr/$bind_types/, alias => qr/[\d\w_]+/ )->to('controller-article#show');

#    $self->routes->get('controller-shop#list')->over( headers => {Host => 'shop.'.$self->config('domain_name')} );

	# --BLOG--
	my  $blog = $r->route->over( headers => {Host => 'blog.'.$self->config('domain_name')} );

		$blog->any('/')->to('controller-article#list');
		$blog->route('/subscribe')->via('post')->to('controller-ajax#subscribe');
		my $bind_types = join '|', map {$_->{_id}} @types;
		$blog->route('/:type', type => qr/$bind_types/)->to('controller-article#list');
		$blog->route('/:type/:alias', type => qr/$bind_types/, alias => qr/[\d\w_]+/ )->to('controller-article#show');
		$blog->route('/tag/:tag', tag => qr/[^\{\}\[\]]+/i)->to('controller-article#list');
		$blog->route('/brand/:brand', brand => qr/[^\{\}\[\]]+/)->to('controller-article#list');

		$blog->route('/:move/:id', move => qr/next|prev/, id => qr/[\d\w]+/)->to('controller-article#list');
		$blog->route('/:type/:move/:id', type => qr/$bind_types/, move => qr/next|prev/, id => qr/[\d\w]+/)->to('controller-article#list');
		$blog->route('/:type/:tag/:move/:id', type => qr/$bind_types/, move => qr/next|prev/, id => qr/[\d\w]+/)->to('controller-article#list');
		$blog->route('/:type/:brand/:move/:id', type => qr/$bind_types/, move => qr/next|prev/, id => qr/[\d\w]+/)->to('controller-article#list');

	$r->any('/')->to('controller-shop#index');

	# --ADMIN--
	$r->route('/login')->via('get')->to('controller-login#login');
	$r->route('/login')->via('post')->to('controller-login#check_login');
	$r->route('/logout')->to('controller-login#logout');

	my 	$admin_bridge = $r->bridge('/admin')->to('controller-login#is_admin');
		# Admins part
		$admin_bridge->route('/')->to('controller-admin#index');
		$admin_bridge->route('/add_admin')->via('get')->to('controller-admin#add_admin');
		$admin_bridge->route('/add_admin')->via('post')->to('controller-admin#create_admin');
		$admin_bridge->route('/edit_admin')->via('get')->to('controller-admin#edit_admin');
		$admin_bridge->route('/edit_admin')->via('post')->to('controller-admin#update_admin');
		# Article part
		$admin_bridge->route('/article/edit/:id', id => qr/[\d\w]+/)->via('get')->to('controller-Adminarticle#get', id => 'add');
		$admin_bridge->route('/article/edit/:id', id => qr/[\d\w]+/)->via('post')->to('controller-Adminarticle#post', id => 'add');
		
		$admin_bridge->route('/article/preview/:id', id => qr/[\d\w]+/)->to('controller-Adminarticle#show_article_previews');
		$admin_bridge->route('/articles')->via('get')->to('controller-Adminarticle#list');
		$admin_bridge->route('/articles/render')->via('get')->to('controller-Adminarticle#render_all');
		
		# Group part
		$admin_bridge->route('/group/edit/:id', id => qr/[\d\w]+/)->via('get')->to('controller-Admingroup#get', id => 'add');
		$admin_bridge->route('/group/edit/:id', id => qr/[\d\w]+/)->via('post')->to('controller-Admingroup#post', id => 'add');
		
		$admin_bridge->route('/groups')->via('get')->to('controller-Admingroup#list');

		# Shop part
		$admin_bridge->route('/shop')->to('controller-Adminshop#show');
		$admin_bridge->route('/shop/search')->to('controller-Adminshop#show', search => 1);
		$admin_bridge->route('/shop/multi')->via('post')->to('controller-Adminshop#multi_act');
		$admin_bridge->route('/shop/brand/:brand', brand => qr![^\{\}\[\]/]+!)->to('controller-Adminshop#show');
		$admin_bridge->route('/shop/:category', category => qr![^\{\}\[\]/]+!)->to('controller-Adminshop#show');
		$admin_bridge->route(
			'/shop/:category/:subcategory',	category => qr![^\{\}\[\]/]+!, subcategory => qr![^\{\}\[\]/]+!
		)->to('controller-Adminshop#show');
		$admin_bridge->route(
			'/shop/:category/:subcategory/:act', category => qr![^\{\}\[\]/]+!, subcategory => qr![^\{\}\[\]/]+!, act => qr!on|off!
		)->to('controller-Adminshop#turn_category');
		$admin_bridge->route(
			'/shop/:category/:subcategory/:id/:act', id => qr/[\d\w]+/, category => qr![^\{\}\[\]/]+!, subcategory => qr![^\{\}\[\]/]+!, act => qr!\w+!
		)->to('controller-Adminshop#item', id => 'add', act => '');
		

		# Orders list
		$admin_bridge->route('/orders/qiwi_update')->via('get')->to('controller-Adminorders#qiwi_update_bills');

		$admin_bridge->route('/orders/qiwi/:qiwi_status', status => => qr/[\w\d]+/)->via('get')->to('controller-Adminorders#list', qiwi_status => '');
		$admin_bridge->route('/orders/:status', status => => qr/\w+/)->via('get')->to('controller-Adminorders#list', status => '');
		$admin_bridge->route('/orders/id/:id', id => qr/[\d\w]+/)->via('get')->to('controller-Adminorders#list', status => '');
		$admin_bridge->route('/orders/:id', id => qr/[\d\w]+/)->via('post')->to('controller-Adminorders#update');
		$admin_bridge->route('/orders/:status/:id', id => qr/[\d\w]+/, status => => qr/\w+/)->via('post')->to('controller-Adminorders#update');
		

		# Static pages
		$admin_bridge->route('/statics')->via('get')->to('controller-Adminarticle#list_statics');
		$admin_bridge->route('/statics/edit/:id', id => qr/[\d\w]+/)->via('get')->to('controller-Adminarticle#get', id => 'add', collection => 'statics');
		$admin_bridge->route('/statics/edit/:id', id => qr/[\d\w]+/)->via('post')->to('controller-Adminarticle#post', id => 'add', collection => 'statics');
		
		
		
		# Content
		$admin_bridge->route('/categories')->via('get')->to('controller-Admincontent#list_categories');
		$admin_bridge->route('/categories/save')->via('post')->to('controller-Admincontent#list_categories', save => 1);

		$admin_bridge->route('/brands')->via('get')->to('controller-Admincontent#list_brands');
		$admin_bridge->route('/brands/:do', do => qr/[\w]+/)->to('controller-Admincontent#list_brands');
		$admin_bridge->route('/brands/:do/:brand', do => qr/[\w]+/, brand => qr![^\{\}\[\]/]+!)->to('controller-Admincontent#list_brands');

		$admin_bridge->route('/banners')->via('get')->to('controller-Admincontent#list_banners');
		$admin_bridge->route('/banners/:type', type => qr/\d+/)->via('get')->to('controller-Admincontent#list_banners');
		$admin_bridge->route('/banners/:do', type => qr/\d+/, do => qr/[\w_]+/)->via('post')->to('controller-Admincontent#list_banners');
		$admin_bridge->route('/banners/:type/:do/:banner', type => qr/\d+/, do => qr/[\w_]+/, banner => qr![^\{\}\[\]/]+!)->to('controller-Admincontent#list_banners');
		
		# Service
		$admin_bridge->route('/update_articles')->to('controller-Ajax#articles_update');
		$admin_bridge->route('/update_items')->to('controller-Ajax#items_update');
		$admin_bridge->route('/update_orders')->to('controller-Ajax#orders_update');
		$admin_bridge->route('/logout')->to('controller-login#logout');
		$admin_bridge->route('/*' => sub {shift->redirect_to('/')});

		# Statistics 
		$admin_bridge->route('/orders_emails')->to('controller-Ajax#orders_emails');

		# Logistics 
		$admin_bridge->route('/logist/import_cities')->to('controller-Ajax#import_logist_cities');
		$admin_bridge->route('/logist/import_metros')->to('controller-Ajax#import_logist_metros');

	# --SHOP--
	$r->route('/cart')->via('get')->to('controller-shop#cart', act => '');
	$r->route('/cart')->via('post')->to('controller-shop#cart', act => 'checkout');
	$r->route('/cart/ship_cost')->via('get')->to('controller-ajax#check_logist_cost');

	$r->route('/checkout')->to('controller-shop#show_checkout');
	$r->route('/cart/:act/:id/:sub_id')->to('controller-shop#cart', act => '', id => '', sub_id => '');
	# list items 
	$r->route('/brand/:brand', brand => qr![^\{\}\[\]/]+!)->to('controller-shop#brand');
	$r->route('/tag/:tags', tag => qr![^\{\}\[\]/]+!)->to('controller-shop#list');

	$r->route('/group/:group', group => qr![^\{\}\[\]/]+!)->to('controller-shop#group');

	$r->route('/:sex/:category/:subcategory',
		sex => qr!m|w!, category => qr![^\{\}\[\]/]{2,}!, subcategory => qr![^\{\}\[\]/]{2,}!)
			->to('controller-shop#list', sex => '', category => '', subcategory => '', move => '', id => '');
	$r->route('/:category/:subcategory',
		category => qr![^\{\}\[\]/]{2,}!, subcategory => qr![^\{\}\[\]/]{2,}!)
			->to('controller-shop#list', sex => '', category => '', subcategory => '', move => '', id => '');
	# show item
	$r->route('/:sex/:category/:subcategory/:alias/:act/:subitem',
		sex => qr!m|w!, category => qr![^\{\}\[\]/]+!, subcategory => qr![^\{\}\[\]/]+!, alias => qr![^\{\}\[\]/]+!, act => qr!\w+!)
			->to('controller-shop#item', act => '', subitem => 0);
	$r->route('/:category/:subcategory/:alias/:act/:subitem',
		category => qr![^\{\}\[\]/]+!, subcategory => qr![^\{\}\[\]/]+!, alias => qr![^\{\}\[\]/]+!, act => qr!\w+!, subitem => qr!\d+!)
			->to('controller-shop#item', act => '', subitem => 0);

	$r->any('/*' => sub {shift->redirect_to('/')});
}

1;

#	$r->route('/vote/:rubric/:alias/:question_hash/:answer_hash')->to('controller-ajax#vote');
#	$r->route('/send_file/:id', id => qr/[\d\w\_]+/)->via('post')->to('controller-Ajax#write_file', id => 'add');
#	$r->route('/send_file/:id', id => qr/[\d\w\_]+/)->to('controller-Ajax#write_file', id => 'add');

# or manually
#    use Mojo::Renderer::Xslate;
#    my $xslate = Mojo::Renderer::Xslate->build(
#	    mojo             => $self,
#	    template_options => { },
#    );
#    $self->renderer->add_handler(tx => $xslate);                                                                                                                    