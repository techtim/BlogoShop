package BlogoShop::Controller::Adminshop;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use BlogoShop::Item;
use utf8;

use constant ITEM_FIELDS => qw( brand discount category subcategory tag sex );

sub show {
    my $self = shift;

    my $filter = {};
    $filter->{$_} = $self->stash($_)||'' foreach ITEM_FIELDS;
    $filter->{active} = 0+$self->req->param('active') if $self->req->param('active'); 
    $filter->{sale} = { sale_active => 0+$self->req->param('sale') } if $self->req->param('sale');

    return $self->redirect_to('/admin/shop/')
    	if $filter->{category} && !($self->stash('categories_alias'))->{$filter->{category}};

    my $item = BlogoShop::Item->new($self);

    if ($self->req->method eq 'POST' && $filter->{category} ) {
        my $vars = {title => $self->req->param('title.'.$filter->{category}.'.'.$filter->{subcategory}) || '',
                    descr => $self->req->param('descr.'.$filter->{category}.'.'.$filter->{subcategory}) || ''};
        if ($filter->{subcategory} eq '') {
            $self->app->db->categories->update(
                    {_id => $filter->{category}}, 
                    {'$set' => $vars},
            );
        } else {
            my $subcats = $self->stash('categories_info')->{$filter->{category}}->{subcats} || [];
            $_->{_id} eq $filter->{subcategory} ?
                $_ = {%$_, %$vars} : ()
                    foreach @$subcats;
            # warn $filter->{subcategory}. $self->dumper($subcats);
            $self->app->db->categories->update(
                    {_id => $filter->{category}}, 
                    {'$set' => {subcats => $subcats}},
            );
        }
        return $self->redirect_to("/admin/shop/$filter->{category}/$filter->{subcategory}");
    }

    # Search Part  
    if ($self->stash('search')) {
        my ($value, $type) = ($self->req->param('search'),$self->req->param('type'));
        $filter->{name} = qr!$value! if $type eq 'name';
        $filter->{"subitems.articol"} = $value if $type eq 'articol';
        $filter->{brand} = qr!$value! if $type eq 'brand';
    }

    # Paging
    my $skip = $self->{app}->config->{items_on_page} * 2 * 
        ($self->req->param('page') && $self->req->param('page') =~ /(\d+)/ ? ($1>0 ? $1-1 : 0) : 0);

    my $pager_url  = $self->req->url->path->to_string.'?'.$self->req->url->query->to_string;
    $pager_url =~ s!csrftoken=[^\&]+\&?!!;
    $pager_url =~ s!\&?page=\d+\&?!!;
    $pager_url .= $pager_url =~ m!\?$! ? '' : '&';

    # warn $self->dumper($filter);
    return $self->render(
        %$filter,
        cur_page  => $self->req->param('page') || 1,
        pages => int( 0.99 + $item->count($filter)/($self->{app}->config->{items_on_page}*2) ),
        items => $item->list($filter, {brand => 1}, $skip, $self->{app}->config->{items_on_page}*2),
        cur_category => $self->stash('categories_info')->{$filter->{category}.($filter->{subcategory} ? '.'.$filter->{subcategory} : '')} || {},
        host  => $self->req->url->base,
        pager_url  => $pager_url,
        template => 'admin/shop',
        format => 'html',
    );
}


sub item {
    my $self = shift;

    my $item = BlogoShop::Item->new($self);

	# copy
	return $self->redirect_to('/admin/shop/'.join('/',$item->{category},$item->{subcategory}, $item->copy($self))) 
		if $self->stash('act') eq 'copy' && $item->{_id};

	if ($self->req->method eq 'POST') {
		# delete
        $self->app->db->stuff->remove({_id => 'active_categories'});
		$item->delete, return $self->redirect_to('/admin/shop/'.join('/',$item->{category},$item->{subcategory})) 
			if $self->req->param('delete') && $item->{_id};

		# save
		my $id = $item->save($self); # save returns 0 if failed + puts error_message to controller and form data to item
		return $self->redirect_to('/admin/shop/'.join('/',$item->{category},$item->{subcategory},$id)) if $id;
	}

	# to split required from opt for params dropdown
	my %opt_subitem_params = %{&BlogoShop::Item::OPT_SUBITEM_PARAMS};
	delete @opt_subitem_params{BlogoShop::Item::SUBITEM_PARAMS}; # to split required from opt for params dropdown
	
	shift @{$item->{subitems}} if ref $item->{subitems} eq ref []; # main item patrams duplicates in subitems[0]
#	warn $self->dumper($item->as_hash);
    return $self->render(
        %{$item->as_hash},
        action_type => $item->{_id} ? '' : 'add',
        brands => [$self->app->db->brands->find()->sort({_id => 1})->all],
        subitem_params => \BlogoShop::Item::SUBITEM_PARAMS,
        opt_subitem_params => \%opt_subitem_params,
        colors => BlogoShop::Item::COLORS,
        host => $self->req->url->base,
        url => $self->req->url,
        error_message => $self->stash('error_message')||$self->flash('error_message'),
        template => 'admin/shop_item',
        format => 'html',
	);
}

1;