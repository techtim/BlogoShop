package BlogoShop::Controller::Adminsettings;

use Mojo::Base 'Mojolicious::Controller';

sub show {
	my $c = shift;	

	return $c->render(
		template => 'admin/settings',
		format => 'html',
	);
}

sub update {
	my $c = shift;

	update_currencies($c);

	return $c->redirect_to('/admin/settings');
}

sub update_currencies {
	my $c = shift;

	my $glob_curr = $c->utils->get_global_currencies();
	my $glob_curr_new = {};
	my $upd_flag = 0;
	foreach ( keys %$glob_curr ) {
		next if !$c->req->param($_);
		$glob_curr_new->{$_} = 0+$c->req->param($_);
		$upd_flag = 1 if $glob_curr_new->{$_} != $glob_curr->{$_}
	}

	$c->utils->update_global_currencies($glob_curr_new) if $upd_flag;

    return;
}

1