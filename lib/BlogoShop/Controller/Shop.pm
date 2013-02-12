package BlogoShop::Controller::Shop;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use Hash::Merge qw( merge );

use utf8;

use constant ITEM_FIELDS => qw(brand sale category subcategory tags sex);
use constant CART_ITEM_FIELDS => ITEM_FIELDS, qw(name alias preview_image);
use constant CHECKOUT_FIELDS => qw(	name surname phone email 
									country city zip address dom korp flat receiver 
									delivery_type self_delivery pay_type);
use constant SORT_FIELDS => qw(time price);

sub index {
	my $self = shift;

	my $art = $self->articles->get_filtered_articles({active => 1}, $self->config('articles_on_startpage'));

	my  $filter->{active} 		= 1;
		$filter->{'subitems.qty'}= {'$gt' => 0};
		$filter->{sale}->{sale_active} = 1;
		$filter->{sale}->{sale_start_stamp} = {'$lt' => time()};
		$filter->{sale}->{sale_end_stamp}   = {'$gt' => time()};

    my $item 	= BlogoShop::Item->new($self);
	# my $items 	= $item->list($filter, {}, int($self->config('items_on_startpage')/2));
	delete $filter->{sale};
	# @$items = ( @$items, @{$item->list( $filter, int($self->config('items_on_startpage')-@$items) )} );
	my $items 	= $self->utils->get_items_from_catalog($self);
	my $banners = $self->utils->get_banners($self, '');

    return $self->render(
		items => $items,
    	articles => $art,
        banners => $banners,
        %{$self->check_cart},
        page_name => 'shop',
        host => $self->req->url->base,
        sex => '',
        template => 'index',
		format => 'html',
    );
}

sub list {
    my $self = shift;

    my	$filter->{active} 		= 1;
       	$filter->{'subitems.qty'}= {'$gt' => 0};
       	$filter->{$_} 	 		= $self->stash($_)||'' foreach ITEM_FIELDS;

    my $sort 	= {};
    $sort->{price} = $self->req->param('price') eq 'asc' ?  1 : -1 if $self->req->param('price');
    $sort->{_id} = $self->req->param('time') eq 'asc' ?  1 : -1 if $self->req->param('time');

    my $item 	= BlogoShop::Item->new($self);
	my $items = $item->list($filter, $sort, ($self->req->param('next') && $self->req->param('next')=~/(\d+)/)?$1:0);

	if ($self->req->headers->header('X-Requested-With')) {
		foreach (@$items) {
			$_->{preview_image} = $self->config->{nginx_res_item_prev}.$self->config->{image_url}.
				join '/', 'item', $_->{category}, $_->{subcategory}, $_->{alias},$_->{preview_image};
			$_->{link} = ($filter->{sex} ? "\/$filter->{sex}\/": '/'). join '/', $_->{category}, $_->{subcategory}, $_->{alias};
		}
		return $self->render(
	        json => {
	        	items => $items
	        },
    	);
	} else {
	    return $self->render(
	        items 	=> $items,
	        %{$self->check_cart},
	        %$filter,
	        cur_category => $self->stash('categories_info')->{$filter->{category}.($filter->{subcategory} ? '.'.$filter->{subcategory} : '')} || {},
	        banners => $self->utils->get_banners($self, $filter->{subcategory}||$filter->{category}||''),
	        type 	=> '',
	        shop 	=> 1,
	        page_name => 'shop',
	        host 	=> $self->req->url->base,
	        template=> 'shop',
	        format 	=> 'html',
		);
	}
}

sub item {
	my $self = shift;

	my $item = BlogoShop::Item->new($self);
	return $self->redirect_to('/'. join '/', $item->{category}, $item->{subcategory}) if !$item->{_id};

	return $self->buy($item) if $self->stash('act') eq 'buy';

	my  $filter->{active} = 1;
		$filter->{'subitems.qty'} = {'$gt' => 0};
		$filter->{alias} = {'$ne' => $item->{alias}};
	$item->{$_} ? 
		push @{$filter->{'$or'}}, {$_ => $item->{$_}} : () 
			foreach qw(brand category subcategory);

	$self->utils->check_item_price($item);

	return $self->render(
		%{$item->as_hash},
		%{$self->check_cart},
		json_subitems => $self->json->encode($item->{subitems}),
		json_params_alias => $self->json->encode(BlogoShop::Item::OPT_SUBITEM_PARAMS),
		items 	=> $item->list($filter, {}, 0, 4),
		img_url => $self->config->{image_url}.join('/', 'item', $item->{category}, $item->{subcategory}, $item->{alias}).'/',
		host 	=> $self->req->url->base,
		url 	=> $self->req->url,
		is_item => 1,
		page_name => 'shop',
		template=> 'shop_item',
		format 	=> 'html',
	);
}

sub brand {
	my $self = shift;
	my $filter = {active => 1};
	$filter->{'subitems.qty'} = {'$gt' => 0};
	my $brand = $self->app->db->brands->find_one({_id => $self->stash('brand')});
	return $self->redirect_to('/') if !$brand;
	$self->stash(brand => $brand);
	$filter->{brand} = $brand->{_id};
	my $item 	= BlogoShop::Item->new($self);
	my $sort 	= {};
	$sort->{price} 	= $self->req->param('price') eq 'asc' ?  1 : -1 if $self->req->param('price');
    $sort->{_id} 	= $self->req->param('time') eq 'asc' ?  1 : -1 if $self->req->param('time');

	# $item->list()
	# warn $self->dumper([$self->app->db->items->find({brand => $brand->{_id}})->all]);
	my $items = $item->list($filter, $sort, $self->req->param('next')?($self->req->param('next')=~/(\d+)/)[0]:0);

	if ($self->req->headers->header('X-Requested-With')) {
		foreach (@$items) {
			$_->{preview_image} = $self->config->{nginx_res_item_prev}.$self->config->{image_url}.
				join '/', 'item', $_->{category}, $_->{subcategory}, $_->{alias},$_->{preview_image};
			$_->{link} = ($filter->{sex} ? "\/$filter->{sex}\/": '/'). join '/', $_->{category}, $_->{subcategory}, $_->{alias};
		}
		return $self->render(
	        json => {
	        	items => $items
	        },
    	);
	} else {
		return $self->render(
			host 	=> $self->req->url->base,
	        items 	=> $items,
	        %{$self->check_cart},
	        sex		=> '',
		brand_id => $brand->{_id},
	        page_name => 'shop',
	        template=> 'brand', # return only
			format 	=> 'html', 
		);
	}
}

sub cart {
	my $self = shift;
	my $filter = {};
	
	return $self->unbuy({_id => $self->stash('id'), sub_id => $self->stash('sub_id')}) if $self->stash('act') eq 'unbuy';

	my $cart = $self->check_cart(1);
#	warn 'cart'.$self->dumper($cart);
	$filter->{_id}->{'$in'} = 
		[ map {MongoDB::OID->new(value => ''.$_->{_id})} @{$cart->{cart_items}} ] 
			if ref $cart->{cart_items} eq ref [];
	
	my $item 	  = BlogoShop::Item->new($self);
	my $sel_items = {map {$_->{_id} => $_ } @{$item->list($filter, {}, 0, 1000)}}; # big stupid limit num to fetch all

	my ($cnt, @failed_items) = (0, ());
	foreach my $it (@{$cart->{cart_items}}) {
		$it->{$_} = $sel_items->{ $it->{_id} }->{ $_ } for CART_ITEM_FIELDS;
		push @failed_items, $cnt && next if !$sel_items->{ $it->{_id} }->{name};
		$self->utils->check_item_price($sel_items->{ $it->{_id} });
		my $h = merge( $it, $sel_items->{ $it->{_id} }->{subitems}->[$it->{sub_id}] );
		$it = $h;
		$it->{count} = $it->{qty} if $it->{count} > $it->{qty};
		$cnt++;
	}

	$self->session(expires => 1), $cart->{cart_count} = 0 if @{$cart->{cart_items}} == 0;

	$self->stash('checkout_ok' => $self->_checkout($cart)) if $self->stash('act') eq 'checkout';
	
	$cnt = 0;
	foreach (sort @failed_items) {
		$self->unbuy($cart->{cart_items}->[$_], 1);
		splice (@{$cart->{cart_items}}, $_-$cnt, 1) if $_ ne '';
		$cnt++ if $_ ne '';
	}
	$self->stash(%$cart) if !$self->stash('checkout_ok');

	return $self->render(
		items 	=> $self->stash('checkout_ok') ? [] : $cart->{cart_items},
		sex 	=> '',
		page_name => 'shop',
		template=> 'cart',
		format 	=> 'html',
	);
}

sub _checkout {
	my ($self, $cart) = @_;

	my $all_is_ok = 1;
	my $co_params = {map {$_ => $self->req->param($_)||''} CHECKOUT_FIELDS};
	$co_params->{items} = [];
	$co_params->{$_} && $co_params->{$_} ne '' ? 
		() : ($all_is_ok = 0)
			foreach qw(name surname phone email);

	my @not_enought_qty;
	foreach my $it (@{$cart->{cart_items}}) {
		$it->{count} = $self->req->param($it->{_id}.':'.$it->{sub_id}) || 0;
		if ($it->{count} > $it->{qty}) {
			$all_is_ok = 0;
			$it->{not_enought} = 1;
			$it->{count} = $it->{qty};
		}
		# warn 'ITEM'.$self->dumper($it);
		push @{$co_params->{items}}, 
			{_id => $it->{_id}, sub_id => $it->{sub_id}, count => $it->{count}, name => $it->{name}, price => $it->{price}[-1]} 
				if $it->{count} > 0;
	}
	$all_is_ok = 0 if @{$co_params->{items}} == 0;

	return $self->_proceed_checkout($co_params) 
		if $all_is_ok;

	$self->stash(%$co_params);
	return 0;
}

sub _proceed_checkout {
	my ($self, $co_params) = @_;

	$co_params->{status} 	= 'new';
	my $order_id 			= $self->app->db->orders->save($co_params);
	$co_params->{order_id} 	= ($order_id=~/^(.{8})/)[0];

	$self->stash(%$co_params);
	my $mail = $self->mail(
	    to      => $co_params->{email},
	    cc		=> $self->config('superadmin_mail'),
        from    => 'noreply@'.$self->config('domain_name'),
	    subject => 'Ваша покупка в магазине Xoxloveka',
	    type 	=> 'text/html',
	    format => 'mail',
	    data => $self->render_mail(template => 'order_mail'),
        handler => 'mail',
	);

	foreach (@{$co_params->{items}}) {

		$self->app->db->items->update(
			{ _id => MongoDB::OID->new(value => ''.$_->{_id}) }, 
			{ '$inc' => { "subitems.$_->{sub_id}.qty" => -$_->{count}, total_qty => -$_->{count} } }
		);
	}
# warn 'CO CART'.$self->dumper($co_params);

	my $session = $self->session();
	$session->{client}->{items} = {};

	return $order_id;
}

##
###### staff ######
##

sub buy {
	my ($self, $item) = @_;

	my $session = $self->session();

	for ($session->{client}->{items}->{$item->{_id}.':'.$self->stash('subitem')}) {
		$_->{count} = 0 if !$_->{count};
		$_->{count} += 1
			unless ($_->{count} + 1) > $item->{subitems}->[$self->stash('subitem')]->{qty};
		
		$_->{price} = $item->{subitems}->[$self->stash('subitem')]->{price}; 
		if ($item->{sale}->{sale_active} &&
			$item->{sale}->{sale_start_stamp} <= time() &&
			$item->{sale}->{sale_end_stamp} >= time()) {
				$_->{price} -=  $item->{sale}->{sale_value} =~ s/(%+)// ?
								$_->{price} * $item->{sale}->{sale_value}/100 :
								$item->{sale}->{sale_value};
			}
	}
	return
		$self->req->headers->header('X-Requested-With') ?
			$self->render(json => {ok => $item->{_id}}) :
			$self->redirect_to('/'. join '/', $item->{category}, $item->{subcategory}, $item->{alias});
}

sub unbuy {
	my ($self, $cart_item, $no_redirect) = @_;

	my $session = $self->session();
	delete $session->{client}->{items}->{$cart_item->{_id}.':'.$cart_item->{sub_id}};
	#warn 'SESSion '.$self->dumper($session);
	return 1 if $no_redirect;
	return
		$self->req->headers->header('X-Requested-With') ?
			$self->render(json => {ok => $cart_item->{_id}}) :
			$self->redirect_to('/cart');
}

sub check_cart {
	my $self = shift;
	my $need_full = shift || 0;

	my $session = $self->session();
#	warn 'SESSion '. $self->dumper($session);
	return {cart_count => 0} if !$session || !$session->{client} || ref $session->{client} ne ref {};
	
	my ($ct, $sum) = (0,0);
	my $items = [];
	eval {
		foreach my $key (keys %{$session->{client}->{items}}) {
			for ($session->{client}->{items}->{$key}) {
				$ct += $_->{count};
				$sum += $_->{price}*$_->{count};
				push @$items, {_id => (split ':', $key)[0], sub_id => (split ':', $key)[1], count => $_->{count} } 
					if $need_full && $key=~m!:+!;
			}
		}
	};
	$self->session(expires => 1) if $@; # if wrong cookies, clean them

	return {cart_count => $ct, cart_price => $sum, cart_items => $items};
}

1;
