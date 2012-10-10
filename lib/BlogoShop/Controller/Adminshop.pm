package BlogoShop::Controller::Adminshop;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use BlogoShop::Item;
use utf8;

use constant ITEM_FIELDS => qw( brand discount category subcategory tag sex );

sub show {
    my $self = shift;
	$self->add_vars;
    my $filter = {};
    $filter->{$_} = $self->stash($_)||'' foreach ITEM_FIELDS;
    return $self->redirect_to('/admin/shop/')
    	if $filter->{category} && !($self->stash('categories_alias'))->{$filter->{category}};

    my $item = BlogoShop::Item->new($self);

    if ($self->req->method eq 'POST') {
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

#    warn $self->dumper($item->list($filter));
    return $self->render(
        %$filter,
        items => $item->list($filter, {}, 0, 1000),
        cur_category => $self->stash('categories_info')->{$filter->{subcategory}||$filter->{category}} || {},
        host => $self->req->url->base,
        template => 'admin/shop',
        format => 'html',
    );
}


sub item {
    my $self = shift;
	
	$self->add_vars;

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

sub add_vars {
	my $self = shift;

#	$self->stash( categories_alias => $self->utils->get_categories_alias($self->app->defaults->{categories}));
	return 0;
}
	
1;