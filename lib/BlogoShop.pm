package BlogoShop;

use Mojo::Base 'Mojolicious';

use MongoDB;

use JSON::XS;
use Redis;

use BlogoShop::Articles;
use BlogoShop::Admins;
use BlogoShop::Utils;
use BlogoShop::Item;

use constant STATIC_PAGES => qw(map about pay delivery);

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
    #	$self->sessions->cookie_domain($self->config('cookie_domain'));
	$self->sessions->cookie_name($self->config('cookie_name'));
	$self->sessions->default_expiration($self->config('cookie_expiration'));
    
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

	(ref $self)->attr(admins => sub {return BlogoShop::Admins->new($self->db, $self->config)});
	(ref $self)->attr(articles => sub {return  BlogoShop::Articles->new($self->db, $self->config)}); 
	(ref $self)->attr(items => sub {return  BlogoShop::Item->new($self, $self->stash('id'))});

	# Helpers part
	$self->helper(db => sub { shift->app->db });
	$self->helper(admins => sub { shift->app->admins });
	$self->helper(articles => sub { shift->app->articles });
	$self->helper(items => sub { shift->app->items });

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
        list_brands => $utils->get_list_brands($self->app->db),
        categories  => \@cats,
        categories_alias => $utils->get_categories_alias(\@cats),
	});

    $self->hook(before_dispatch => sub {
        my $c = shift;
        $c->app->defaults->{categories} 	  = [$c->app->db->categories->find({})->sort({pos => 1})->all];
        $c->app->defaults->{categories_alias} = $c->utils->get_categories_alias($c->app->defaults->{categories});
        $c->app->defaults->{list_brands} 	  = $c->utils->get_list_brands($self->app->db);
    });
    
	# Routes
	my $r = $self->routes;
	
    # --AJAX--
    $r->route('/admin/article/:id/active/:bool', id => qr/[\d\w]+/, bool => qr/1|0/)->via('post')->to('controller-Ajax#activate', id => 'add');

    # --SHOP--
    my $shop = $r->route->over( headers => {Host => 'shop.'.$self->config('domain_name')} );
	
	$shop->route('/cart')->to('controller-shop#cart', act => '');
	$shop->route('/cart/:act/:id/:sub_id')->to('controller-shop#checkout', act => '', id => '', sub_id => '');
	
	$shop->route('/brand/:brand', brand => qr![^\{\}\[\]/]+!)->to('controller-shop#item');
    $shop->route('/:sex/:category/:subcategory',
    	sex => qr!m|w!, category => qr![^\{\}\[\]/]{2,}!, subcategory => qr![^\{\}\[\]/]{2,}!)
    		->to('controller-shop#show', sex => '', category => '', subcategory => '');
	$shop->route('/:category/:subcategory',
    	category => qr![^\{\}\[\]/]{2,}!, subcategory => qr![^\{\}\[\]/]{2,}!)
    		->to('controller-shop#show', sex => '', category => '', subcategory => '');
    $shop->route('/:sex/:category/:subcategory/:alias/:act',
    	sex => qr!m|w!, category => qr![^\{\}\[\]/]+!, subcategory => qr![^\{\}\[\]/]+!, alias => qr![^\{\}\[\]/]+!, act => qr!\w+!)
			->to('controller-shop#item', act => '');
    $shop->route('/:category/:subcategory/:alias/:act/:subitem',
    	category => qr![^\{\}\[\]/]+!, subcategory => qr![^\{\}\[\]/]+!, alias => qr![^\{\}\[\]/]+!, act => qr!\w+!, subitem => qr!\d+!)
			->to('controller-shop#item', act => '', subitem => 0);
	
#    $self->routes->get('controller-shop#show')->over( headers => {Host => 'shop.'.$self->config('domain_name')} );
    
    # --BLOG--
	my $bind_static = join '|', map {$_->{alias}} $mongo->statics->find({})->fields({_id=>0,alias=>1})->all; # make from array of hashes array of _ids and join ids to filter cuts in url
    my $bind_types = join '|', map {$_->{_id}} @types;
    
	$r->any('/')->to('controller-article#list');
    $r->route('/subscribe')->via('post')->to('controller-ajax#subscribe');

	$r->route('/:template', template => qr/$bind_static/)->to('controller-static#show');
    $r->route('/:type', type => qr/$bind_types/)->to('controller-article#list');
    $r->route('/tag/:tag', tag => qr/[а-яА-Я\w]+/i)->to('controller-article#list');
    $r->route('/brand/:brand', brand => qr/[^\{\}\[\]]+/)->to('controller-article#list');

    $r->route('/:move/:id', type => qr/$bind_types/, move => qr/next|prev/, id => qr/[\d\w]+/)->to('controller-article#list');
	$r->route('/:type/:move/:id', type => qr/$bind_types/, move => qr/next|prev/, id => qr/[\d\w]+/)->to('controller-article#list');
#	$r->route('/:type/:tag/:move/:id', type => qr/$bind_types/, move => qr/next|prev/, id => qr/[\d\w]+/)->to('controller-article#list');
#	$r->route('/:type/:brand/:move/:id', type => qr/$bind_types/, move => qr/next|prev/, id => qr/[\d\w]+/)->to('controller-article#list');
    
	$r->route('/rss')->to('controller-article#rss');
	$r->route('/:type/:alias', type => qr/$bind_types/, alias => qr/[\d\w_]+/ )->to('controller-article#show');
    
    # --ADMIN--
	$r->route('/login')->via('get')->to('controller-login#login');
	$r->route('/login')->via('post')->to('controller-login#check_login');
	$r->route('/logout')->to('controller-login#logout');

	my $admin_bridge = $r->bridge('/admin')->to('controller-login#is_admin');
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
    
    # Shop part
    $admin_bridge->route('/shop')->to('controller-Adminshop#show');
    $admin_bridge->route('/shop/:category', category => qr![^\{\}\[\]/]+!)->to('controller-Adminshop#show');
    $admin_bridge->route(
    	'/shop/:category/:subcategory',	category => qr![^\{\}\[\]/]+!, subcategory => qr![^\{\}\[\]/]+!
	)->to('controller-Adminshop#show');
    $admin_bridge->route(
    	'/shop/:category/:subcategory/:id/:act', id => qr/[\d\w]+/, category => qr![^\{\}\[\]/]+!, subcategory => qr![^\{\}\[\]/]+!, act => qr!\w+!
    )->to('controller-Adminshop#item', id => 'add', act => '');
    
    # Static pages
    $admin_bridge->route('/statics')->via('get')->to('controller-Adminarticle#list_statics');
    $admin_bridge->route('/statics/edit/:id', id => qr/[\d\w]+/)->via('get')->to('controller-Adminarticle#get', id => 'add', collection => 'statics');
    $admin_bridge->route('/statics/edit/:id', id => qr/[\d\w]+/)->via('post')->to('controller-Adminarticle#post', id => 'add', collection => 'statics');
    
    # Big Games
    #		$admin_bridge->route('/big_games_news')->via('get')->to('controller-Adminarticle#list_big_games');
    #		$admin_bridge->route('/big_games_news/edit/:id', id => qr/[\d\w]+/)->via('get')->to('controller-Adminarticle#get', id => 'add', collection => 'big_games_news');
    #		$admin_bridge->route('/big_games_news/edit/:id', id => qr/[\d\w]+/)->via('post')->to('controller-Adminarticle#post', id => 'add', collection => 'big_games_news');
    
    # Content
    $admin_bridge->route('/categories')->via('get')->to('controller-Admincontent#list_categories');
    $admin_bridge->route('/categories/save')->via('post')->to('controller-Admincontent#list_categories', save => 1);
    $admin_bridge->route('/brands')->via('get')->to('controller-Admincontent#list_brands');
    $admin_bridge->route('/brands/:do', do => qr/[\w]+/)->to('controller-Admincontent#list_brands');
    $admin_bridge->route('/brands/:do/:brand', do => qr/[\w]+/, brand => qr![^\{\}\[\]/]+!)->to('controller-Admincontent#list_brands');
    $admin_bridge->route('/banners')->via('get')->to('controller-Admincontent#list_banners');
    $admin_bridge->route('/banners/:do')->via('post')->to('controller-Admincontent#list_banners');
    $admin_bridge->route('/banners/:do/:banner', do => qr/[\w]+/, banner => qr![^\{\}\[\]/]+!)->to('controller-Admincontent#list_banners');
    
    # Service
    $admin_bridge->route('/update_articles')->to('controller-Ajax#articles_update');
    $admin_bridge->route('/update_items')->to('controller-Ajax#items_update');
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
#    $self->renderer->add_handler(tx => $xslate);