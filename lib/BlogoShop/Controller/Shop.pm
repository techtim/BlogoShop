package BlogoShop::Controller::Shop;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use Hash::Merge qw( merge );

use utf8;

use constant ITEM_FIELDS => qw(brand sale category subcategory tag sex);
use constant CART_ITEM_FIELDS => ITEM_FIELDS, qw(name alias preview_image);

sub show {
    my $self = shift;

    my $filter->{active} = 1;
       $filter->{$_} 	 = $self->stash($_)||'' foreach ITEM_FIELDS;

    my $item 	= BlogoShop::Item->new($self);
	my $banners = $self->utils->get_banners($self, $filter->{subcategory}||$filter->{category}||'');

    return $self->render(
        items 	=> $item->list($filter),
        %{$self->check_cart},
        %$filter,
        cat_alias => $self->utils->get_categories_alias($self->app->defaults->{categories}),
        banners => $banners,
        type 	=> '',
        shop 	=> 1,
        page_name => 'shop',
        host 	=> $self->req->url->base,
        template=> 'shop',
        format 	=> 'html',
	);
}

sub item {
	my $self = shift;

	my $item = BlogoShop::Item->new($self);
	return $self->redirect_to('/'. join '/', $item->{category}, $item->{subcategory}) if !$item->{_id};
	
	return $self->buy($item) if $self->stash('act') eq 'buy';

	my $filter->{active} = 1;	
	   $filter->{alias}	 = {'$ne' => $item->{alias}};
	push @{$filter->{'$or'}}, {$_ => $item->{$_}} foreach ITEM_FIELDS;

#	unshift @{$item->{subitems}}, {map {$_ => $item->{$_}} keys BlogoShop::Item::OPT_SUBITEM_PARAMS};
	if ($item->{sale}->{sale_active} && 
		$item->{sale}->{sale_start_stamp} <= time() &&
		$item->{sale}->{sale_end_stamp}   >= time() ) {
			$_->{price} = [$_->{price}, $_->{price} - 
				($item->{sale}->{sale_value} =~ m/(%+)/ ?
					$_->{price} * ($item->{sale}->{sale_value}/100) :
					$item->{sale}->{sale_value})] 
						foreach @{$item->{subitems}};
	} else { 
		$_->{price} = [$_->{price}] foreach @{$item->{subitems}};
	}

	return $self->render(
		%{$item->as_hash},
		%{$self->check_cart},
		json_subitems => $self->json->encode($item->{subitems}),
		json_params_alias => $self->json->encode(BlogoShop::Item::OPT_SUBITEM_PARAMS),
		cat_alias => $self->utils->get_categories_alias($self->app->defaults->{categories}),
		items 	=> $item->list($filter, 4),
		type 	=> '',
		shop 	=> 1,
		page_name => 'shop',
		img_url => $self->config->{image_url}.join('/', 'item', $item->{category}, $item->{subcategory}, $item->{alias}).'/',
		host 	=> $self->req->url->base,
		url 	=> $self->req->url,
		template=> 'shop_item',
		format 	=> 'html',
	);
}

sub cart {
	my $self = shift;
	my $filter = {};
	
	return $self->unbuy({_id => $self->stash('id'), sub_id => $self->stash('sub_id')}) if $self->stash('act') eq 'unbuy';

	my $cart = $self->check_cart(1);
	warn 'cart'.$self->dumper($cart);
	$filter->{_id}->{'$in'} = 
		[ map {MongoDB::OID->new(value => ''.$_->{_id})} @{$cart->{cart_items}} ] 
			if ref $cart->{cart_items} eq ref [];
	
	my $item 	  = BlogoShop::Item->new($self);
	my $sel_items = {map {$_->{_id} => $_ } @{$item->list($filter, 1000)}}; # big stupid limit num to fetch all
	
	my ($cnt, @failed_items) = (0, ());
	foreach my $it (@{$cart->{cart_items}}) {
		$it->{$_} = $sel_items->{ $it->{_id} }->{ $_ } for CART_ITEM_FIELDS;
		push @failed_items, $cnt if !$sel_items->{ $it->{_id} }->{name};
		my $h = merge( $it, $sel_items->{ $it->{_id} }->{subitems}->[$it->{sub_id}] );
		$it = $h;
		$it->{count} = $it->{qty} if $it->{count} > $it->{qty};
		$cnt++;
	}
	$cnt = 0;
	foreach (@failed_items) {
		$self->unbuy($cart->{cart_items}->[$_], 1);
		splice (@{$cart->{cart_items}}, $_-$cnt, 1) if $_ ne '';
		$cnt++ if $_ ne '';
	}

	$self->utils->get_categories($self);
	return $self->render(
		%$cart,
		items 	=> $cart->{cart_items},
		sex 	=> '',
		page_name => 'shop',
		template=> 'cart',
		format 	=> 'html',
	);
}

sub checkout {
	my $self = shift;
	
	return $self->render(
		template=> 'checkout',
		format 	=> 'html',
	);
}

##
#### staff ####
##
sub buy {
	my ($self, $item) = @_;

	my $session = $self->session();
	
	for ($session->{client}->{items}->{$item->{_id}.':'.$self->stash('subitem')}) {
		$_->{count} += 1;
		$_->{price} = $item->{subitems}->[$self->stash('subitem')-1]->{price}; 
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
	return {cart_count => 0} if !$session->{client} || ref $session->{client} ne ref {};
	
	my ($ct, $sum) = (0,0);
	my $items = [];
	eval {
		foreach my $key (keys %{$session->{client}->{items}}) {
			for ($session->{client}->{items}->{$key}) {
				$ct += $_->{count};
				$sum += $_->{price}*$_->{count};
				push @$items, {_id => (split ':', $key)[0], sub_id => (split ':', $key)[1], count => $_->{count} } if $need_full && $key=~m!:+!;
			}
		}
	};
	$self->session(expires => 1) if $@; # if wrong cookie, clean them

	return {cart_count => $ct, cart_price => $sum, cart_items => $items};
}
1;