package BlogoShop::Group;

use Mojo::Base -base;

use utf8 qw(encode decode);

use Data::Dumper;
use File::Path qw(make_path remove_tree);

use constant {
	GROUPS_COLLECTION => 'groups',
};

sub new {
	my ($class, $id) = @_;
	my $self;
	$self->{db} = BlogoShop->db;
	$self->{config} = BlogoShop->conf;
	if ($id) {
	    %$self = ( %$self, 
	    	%{ BlogoShop->db->groups->find_one( {'$or' => [{_id => MongoDB::OID->new(value => $id)}, {alias => $id}]} ) || {} } 
	    );
	};
	bless $self, $class;	 
}

sub add_group {
	my ($self, $group, $collection) = @_;
	
	return $self->{db}->get_collection(GROUPS_COLLECTION)->save($group);
}

sub update_group {
	my ($self, $id, $group) = @_;
	
	return if !$id;
	
	$id = ref $id eq 'MongoDB::OID' ? $id->{value} : $id;
	
	my $old_group = $self->get_group_by_id($id);
	return if !$old_group;

	if ($old_group->{alias} ne $group->{alias}) { # check if alias changed , change directory with images
		
		my $old = $self->{config}->{image_dir}.$old_group->{type}.'/'.($old_group->{alias}||$self->{config}->{default_img_dir});
		my $new = $self->{config}->{image_dir}.$group->{type}.'/'.($group->{alias}||$self->{config}->{default_img_dir});
		
		my $new_dir = $self->{config}->{image_dir}.$group->{type}.'/';
		make_path($new_dir)	or die 'Error on creating group folder:'.$new_dir.' -> '.$! 
		unless (-d $new_dir);
		system("mv $old $new");
	}
	
	delete $group->{_id} if $group->{_id};
	$self->{db}->get_collection(GROUPS_COLLECTION)->update(
		{_id => MongoDB::OID->new(value => $id)}, {'$set' => $group}
	);
	return $id;

}

sub get_group_items {
	my ($self, $filter, $sort, $count) = @_;

	return [] if !$self->{_id};

	$filter->{group_id} = ''.$self->{_id};

	if ($self->{alias} eq 'sale'){
		delete $filter->{group_id};
		$filter->{"sale\.sale_active"} = "1";
		$filter->{"sale\.sale_start_stamp"} = {'$lte' => time()};
		$filter->{"sale\.sale_end_stamp"} = {'$gte' => time()};
	}
	ref $sort ne ref {} ? $sort = {price => -1} : ();
	$count //= 1000;

	return [BlogoShop->db->items->find($filter)->sort($sort)->limit($count)->all];
}

sub get_group {
	my ($self, $filter) = @_;
	return $self->{db}->get_collection(GROUPS_COLLECTION)->find_one($filter);
}

sub get_group_by_id {
	my ($self, $id) = @_;
	return $self->{db}->get_collection(GROUPS_COLLECTION)->find_one(
		{_id => MongoDB::OID->new(value => $id)},
	);
}

sub remove_group {
	my ($self, $id) = @_;
	
	my $group = $self->{db}->get_collection(GROUPS_COLLECTION)->find_one(
		{_id => MongoDB::OID->new(value => $id)}
	);
	return 0 unless $group;
	eval {
		remove_tree( $self->{config}->{image_dir} . 
			$group->{type} . '/' .
			($group->{alias} ? $group->{alias} : $self->{config}->{default_img_dir})
		);
	};
	warn "ERROR on group files delete:\"$@\"" if $@;

	$self->{db}->get_collection('items')->update({ group_id => ''.$group->{_id} }, 
		{ '$pull' => {group_id => $id} },
		{ 'multiple' => 1 }
	);
	return $self->{db}->get_collection(GROUPS_COLLECTION)->remove(
		{_id => MongoDB::OID->new(value => $id)},
	);
}

sub get_all {
	my ($self, $need_hash) = @_;
	my @all = $self->{db}->get_collection(GROUPS_COLLECTION)->find->sort( { name => 1 } )->all;
	return { map { $_->{_id} => $_->{name} } @all } if $need_hash;
	return \@all;
}

# Actions
sub activate {
	my ($self, $id, $bool) = @_;
	warn $id, $bool;
	$self->{db}->get_collection(GROUPS_COLLECTION)->update(
		{_id => MongoDB::OID->new(value => $id)},
		{'$set' => {active => 0+$bool}}
	);
	return 1;
}

# Controll Stuff
sub check_existing_alias {
	my ($self, $id, $group, $collection) = @_;
	my $filter->{alias} = qr/^$group->{alias}\d?/;
	$filter->{_id} = {'$ne' => MongoDB::OID->new(value => $id)} if $id;

	my @check = $self->{db}->get_collection(GROUPS_COLLECTION)->find(
		$filter,
		{"alias" => '1'} # fetch only alias
	)->sort({alias => -1})->all;
	
	return ($#check > -1 ? ($check[0]->{alias} =~ /(\d+)$/ ? $1 + 1 : 1) : '');  
}

1;