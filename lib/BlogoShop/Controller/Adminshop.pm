package BlogoShop::Controller::Adminshop;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use BlogoShop::Item;
use utf8;

use constant ITEM_FIELDS => qw( brand discount category subcategory tag sex );

use constant WEIGHTS => [
    {_id => 0.5, name => '0.1-0.5'},
    {_id => 1, name => '0.5-1'},
    {_id => 2, name => '2'},
    {_id => 3, name => '3'},
    {_id => 4, name => '4'},
    {_id => 5, name => '5'}
];

sub show {
    my $c = shift;

    my $filter = {};
    defined $c->stash($_) ? ($filter->{$_} = $c->stash($_)) : () foreach ITEM_FIELDS;
    $filter->{active} = 0+$c->req->param('active') if defined $c->req->param('active');
    $filter->{sale} = { sale_active => 0+$c->req->param('sale') } if defined $c->req->param('sale');

    return $c->redirect_to('/admin/shop/')
    	if $filter->{category} && !($c->stash('categories_alias'))->{$filter->{category}};

    my $item = BlogoShop::Item->new($c);

    if ($c->req->method eq 'POST' && $filter->{category} ) {
        my $vars = {title => $c->req->param('title.'.$filter->{category}.'.'.$filter->{subcategory}) || '',
                    descr => $c->req->param('descr.'.$filter->{category}.'.'.$filter->{subcategory}) || ''};
        if ($filter->{subcategory} eq '') {
            $c->app->db->categories->update(
                    {_id => $filter->{category}}, 
                    {'$set' => $vars},
            );
        } else {
            my $subcats = $c->stash('categories_info')->{$filter->{category}}->{subcats} || [];
            $_->{_id} eq $filter->{subcategory} ?
                $_ = {%$_, %$vars} : ()
                    foreach @$subcats;
            # warn $filter->{subcategory}. $c->dumper($subcats);
            $c->app->db->categories->update(
                    {_id => $filter->{category}}, 
                    {'$set' => {subcats => $subcats}},
            );
        }
        return $c->redirect_to("/admin/shop/$filter->{category}/$filter->{subcategory}");
    }

    # Search Part  
    if ($c->stash('search')) {
        my ($value, $type) = ($c->req->param('search'), $c->req->param('type'));
        $filter->{name} = qr!.*$value.*!i if $type eq 'name';
        $filter->{"subitems.articol"} = qr!.*$value.*!i if $type eq 'articol';
        $filter->{'$or'} = [{brand => qr!.*$value.*!i}, {brand_name => qr!.*$value.*!i}] if $type eq 'brand';
    }

    # Paging
    my $skip = $c->{app}->config->{items_on_page} * 2 * 
        ($c->req->param('page') && $c->req->param('page') =~ /(\d+)/ ? ($1>0 ? $1-1 : 0) : 0);

    my $pager_url  = $c->req->url->path->to_string.'?'.$c->req->url->query->to_string;
    $pager_url =~ s!csrftoken=[^\&]+\&?!!;
    $pager_url =~ s!\&?page=\d+\&?!!;
    my @act_cnt = ($pager_url =~ m!(active)!g);
    $pager_url =~ s!\&?active=\d+\&?!! if  @act_cnt> 1;
    $pager_url .= $pager_url =~ m!\?$! ? '' : '&';

    # warn $c->dumper($filter);
    return $c->render(
        %$filter,
        category => $filter->{category} ? $filter->{category} : '',
        subcategory => $filter->{subcategory}? $filter->{subcategory} : '',
        cur_page  => $c->req->param('page') || 1,
        pages => int( 0.99 + $item->count($filter)/($c->{app}->config->{items_on_page}*2) ),
        items => $item->list($filter, {brand => 1}, $skip, $c->{app}->config->{items_on_page}*2),
        cur_category => $c->stash('categories_info')->{($filter->{category} || '').($filter->{subcategory} ? '.'.$filter->{subcategory} : '')} || {},
        host  => $c->req->url->base,
        pager_url  => $pager_url,
        template => 'admin/shop',
        format => 'html',
    );
}


sub item {
    my $c = shift;

    my $item = BlogoShop::Item->new($c);

	# copy
	return $c->redirect_to('/admin/shop/'.join('/',$item->{category},$item->{subcategory}, $item->copy($c))) 
		if $c->stash('act') eq 'copy' && $item->{_id};

	if ($c->req->method eq 'POST') {
		# delete categories cache entry from db
        $c->app->db->stuff->remove({_id => 'active_categories'});
		$item->delete, return $c->redirect_to('/admin/shop/'.join('/',$item->{category},$item->{subcategory})) 
			if $c->req->param('delete') && $item->{_id};

		# save
		my $id = $item->save($c); # save returns 0 if failed + puts error_message to controller and form data to item
		return $c->redirect_to('/admin/shop/'.join('/',$item->{category},$item->{subcategory},$id)) if $id;
	}

	# to split required from opt for params dropdown
	my %opt_subitem_params = %{&BlogoShop::Item::OPT_SUBITEM_PARAMS};
	delete @opt_subitem_params{BlogoShop::Item::SUBITEM_PARAMS}; # to split required from opt for params dropdown
	
	shift @{$item->{subitems}} if ref $item->{subitems} eq ref []; # main item patrams duplicates in subitems[0]
#	warn $c->dumper($item->as_hash);
    return $c->render(
        %{$item->as_hash},
        action_type => $item->{_id} ? '' : 'add',
        brands => [$c->app->db->brands->find()->sort({_id => 1})->all],
        weights => WEIGHTS,
        subitem_params => \BlogoShop::Item::SUBITEM_PARAMS,
        opt_subitem_params => \%opt_subitem_params,
        colors => BlogoShop::Item::COLORS,
        host => $c->req->url->base,
        url => $c->req->url,
        error_message => $c->stash('error_message')||$c->flash('error_message'),
        template => 'admin/shop_item',
        format => 'html',
	);
}

sub call_courier {
    my ($c, $order) = @_;

    $c->config('logistics_id');

}

sub turn_category {
    my ($c) = @_;

    $c->db->items->update({category => $c->stash('category'), subcategory => $c->stash('subcategory')}, 
        {'$set' => {active => $c->stash('act') eq 'on' ? 1 : 0}}, {'multiple' => 1 });
    $c->app->db->stuff->remove({_id => 'active_categories'});
    $c->db->categories->update({_id => $c->stash('category'), "subcats._id" => $c->stash('subcategory')}, { '$set' => {'subcats.$.state' => $c->stash('act')} });

    return $c->redirect_to("/admin/shop/".$c->stash('category')."/".$c->stash('subcategory'));
}

1;