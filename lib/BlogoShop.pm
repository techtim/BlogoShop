package BlogoShop;

use Mojo::Base 'Mojolicious';

use MongoDB;

use JSON::XS;

use BlogoShop::Articles;
use BlogoShop::Admins;
use BlogoShop::Utils;

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
	$self->log->path('log/error.log');
	$SIG{__WARN__} = sub {
		my $mess = shift || '';
		$mess =~ s/\n$//;
		@_ = ($self->log, $mess); 
		goto &Mojo::Log::warn; 
	};

	# Set cache size for rendered templates
	$self->renderer->cache->max_keys(500);

	# Debug benchmarks
	$self->plugin('request_timer') if $self->config('log_level') eq 'debug';

	# Make signed cookies secure
	$self->secret($self->config('cookie_secret'));
#	$self->sessions->cookie_domain($self->config('cookie_domain'));
	$self->sessions->cookie_name($self->config('cookie_name'));
	$self->sessions->default_expiration($self->config('cookie_expiration'));

	#Set Mode 'production' || 'development'
	$self->mode($self->config('mojo_mode'));

	# Mongo connection and models for forked process
	(ref $self)->attr(
        db => sub {
			return MongoDB::Connection->new(
				host => $self->config('db_host'), 
				port => $self->config('db_port')
				)->get_database($self->config('db_name'));
	});

	(ref $self)->attr(admins => sub {return BlogoShop::Admins->new($self->db, $self->config)});
	(ref $self)->attr(articles => sub {return  BlogoShop::Articles->new($self->db, $self->config)}); 

	# Helpers part
	$self->helper(db => sub { shift->app->db });
	$self->helper(admins => sub { shift->app->admins });
	$self->helper(articles => sub { shift->app->articles });

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

	# Mongo connection for startup
	my $mongo = MongoDB::Connection->new(
		host => $self->config('db_host'), 
		port => $self->config('db_port')
	)->get_database($self->config('db_name'));

	my $articles = BlogoShop::Articles->new($mongo, $self->config);

	# Add cuts & rubs to default once on startup to not disturb DB
	my $cuts = $articles->get_cuts();
	my $rubrics = $articles->get_rubrics();
	my $cuts_alias = $articles->get_cuts('hash');
	my $rubrics_alias = $articles->get_rubrics('hash');
	my $active_rubrics_in_cuts = $articles->get_active_rubrics_in_cuts();
	$self->defaults({
		cuts => $cuts,
		rubrics => $rubrics,
		cuts_alias => $cuts_alias,
		rubrics_alias => $rubrics_alias,
		active_rubrics_in_cuts => $active_rubrics_in_cuts 
	});

	# Routes
	my $r = $self->routes;

	# TEMP SERV
#	$r->route('/vote/import_sources')->to('controller-ajax#import_sources');
	# Normal routes to controllers
	my $bind_cuts = join '|', map {$_->{_id}} @{$articles->get_cuts()}; # make from array of hashes array of _ids and join ids to filter cuts in url
	my $bind_rubrics = join '|', map {$_->{_id}} @{$articles->get_rubrics()}; # make from array of hashes array of _ids and join _ids to filter rubrics in url

	$r->any('/')->to('controller-article#list');
	$r->route('/:rubric', rubric => qr/$bind_rubrics/)->to('controller-article#list');
	$r->route('/:cut', cut => qr/$bind_cuts/)->to('controller-article#list');
	$r->route('/:cut/:rubric/', cut => qr/$bind_cuts/, rubric => qr/$bind_rubrics/)->to('controller-article#list');

	$r->route('/:move/:id', move => qr/next|prev/, id => qr/[\d\w]+/)->to('controller-article#list');
	$r->route('/:rubric/:move/:id', rubric => qr/$bind_rubrics/, move => qr/next|prev/, id => qr/[\d\w]+/)->to('controller-article#list');
	$r->route('/:cut/:move/:id', cut => qr/$bind_cuts/, move => qr/next|prev/, id => qr/[\d\w]+/)->to('controller-article#list');
	$r->route('/:cut/:rubric/:move/:id', cut => qr/$bind_cuts/, rubric => qr/$bind_rubrics/, move => qr/next|prev/, id => qr/[\d\w]+/)->to('controller-article#list');

	$r->route('/topgear')->to('controller-article#show', alias => 'topgear');
	$r->route('/rss')->to('controller-article#rss');
	$r->route('/:rubric/:alias', rubric => qr/$bind_rubrics/, alias => qr/[\d\w_]+/ )->to('controller-article#show');
	$r->route('/:cut/:rubric/:alias', rubric => qr/$bind_rubrics/, cut => qr/$bind_cuts/, alias => qr/[\d\w_]+/ )->to('controller-article#show');

	$r->route('/akcia')->to('controller-viktorina#show');
	$r->route('/akcia/m')->to('controller-viktorina#show', mobile => '1');
	$r->route('/akcia/send_question')->to('controller-viktorina#send_question');
	$r->route('/akcia/send_video')->to('controller-viktorina#send_video');
	$r->route('/akcia/video/:id')->to('controller-viktorina#show_video', id => 'test');
	$r->route('/akcia/:alias')->to('controller-viktorina#show_one_news');
	$r->route('/akcia/results/get')->to('controller-viktorina#results_get');
	$r->route('/akcia/results/reload')->to('controller-viktorina#results_reload');
	$r->route('/akcia/results/search')->to('controller-viktorina#results_search');
	
	# LONDON
#	$r->route('/london/do/import')->to('controller-london#import_sports_icons');
	$r->route('/london/import/stad')->to('controller-london#import_stadions');
	$r->route('/london/sights/json')->to('controller-london#get_sights_json');
	$r->route('/london/sports/json')->to('controller-london#get_sports_json');
	$r->route('/london/places/json')->to('controller-london#get_olimpic_places');
#	$r->route('/london/news_world/json')->to('controller-london#get_world_news');
#	$r->route('/london/news_rus/json')->to('controller-london#get_russian_news');
	# BIG GAMES	
	$r->route('/big_games')->to('controller-Biggames#show');
	$r->route('/big_games/sync')->to('controller-Biggames#sync_big_news_with_BlogoShop');
	$r->route('/big_games/send_question')->to('controller-Biggames#send_question');
	$r->route('/big_games/:city', city => qr/[\w\'\-]+/)->to('controller-Biggames#show');
	$r->route('/big_games/:city/:alias')->to('controller-Biggames#show_one');
	
	$r->route('/vote/:rubric/:alias/:question_hash/:answer_hash')->to('controller-ajax#vote');
#	$r->route('/send_file/:id', id => qr/[\d\w\_]+/)->via('post')->to('controller-Ajax#write_file', id => 'add');
#	$r->route('/send_file/:id', id => qr/[\d\w\_]+/)->to('controller-Ajax#write_file', id => 'add');

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
		
		# Viktorina
		$admin_bridge->route('/news')->via('get')->to('controller-Adminarticle#list_news');
		$admin_bridge->route('/news/edit/:id', id => qr/[\d\w]+/)->via('get')->to('controller-Adminarticle#get', id => 'add', collection => 'news');
		$admin_bridge->route('/news/edit/:id', id => qr/[\d\w]+/)->via('post')->to('controller-Adminarticle#post', id => 'add', collection => 'news');
		
		# Big Games
		$admin_bridge->route('/big_games_news')->via('get')->to('controller-Adminarticle#list_big_games');
		$admin_bridge->route('/big_games_news/edit/:id', id => qr/[\d\w]+/)->via('get')->to('controller-Adminarticle#get', id => 'add', collection => 'big_games_news');
		$admin_bridge->route('/big_games_news/edit/:id', id => qr/[\d\w]+/)->via('post')->to('controller-Adminarticle#post', id => 'add', collection => 'big_games_news');
		
		$admin_bridge->route('/videos')->via('get')->to('controller-Adminarticle#list_videos');
		$admin_bridge->route('/videos')->via('post')->to('controller-Adminarticle#list_videos',  post => 1);

		# Author
		$admin_bridge->route('/add_author')->via('get')->to('controller-Author#add_author');
		$admin_bridge->route('/add_author')->via('post')->to('controller-Author#create_author');
		
		$admin_bridge->route('/dump_xml')->to('controller-ajax#dumpXML');

	$r->any('/*' => sub {shift->redirect_to('/')});
}

1;

  	# or manually
#    use Mojo::Renderer::Xslate;
#    my $xslate = Mojo::Renderer::Xslate->build(
#	    mojo             => $self,
#	    template_options => { },
#    );
#    $self->renderer->add_handler(tx => $xslate);