package BlogoShop::Controller::Login;

use Mojo::Base 'Mojolicious::Controller';

use Captcha::reCAPTCHA ();
use Digest::SHA qw(sha256_hex);

use constant COLLECTION => 'admins';

sub _recaptcha {
	my $self = shift;
    my $recaptcha_html = Captcha::reCAPTCHA->new->get_html(
        $self->config('recaptcha_public_key'), undef, undef,
        { lang => 'ru', theme => 'clean' }
    );
    $self->stash(recaptcha_html => $recaptcha_html);
    #<%== $recaptcha_html %>
}

sub login {
	my $self = shift;

	$self->redirect_to('admin') if ($self->session())->{admin};

    #$self->_recaptcha;

	$self->render(
		template => 'login',
		format => 'html',
    	message => 'Login please'
    );
}

sub check_login{
	my $self = shift;

#	my $cr = Captcha::reCAPTCHA->new->check_answer(
#		$self->config('recaptcha_private_key'),
#        $self->req->headers->header('X-Real-IP') || $self->tx->{remote_address},
#        $self->req->param('recaptcha_challenge_field'),
#        $self->req->param('recaptcha_response_field')
#    );
#	
#   	if ($cr && $cr->{is_valid}) {
		my ($login, $pass) = ($self->param('login'), $self->param('pass'));
		if ($pass && $login){
			my $fetch = $self->admins->fetch_by_login($login);

			if (defined $fetch->{pass})	{
				if ($fetch->{pass} eq sha256_hex($pass)) {
					$self->flash('message' => $self->flash('message')) if $self->flash('message'); # forward message
					$self->session(admin => $fetch);
					$self->redirect_to('admin');
				}
			}
			$self->stash(error_message => ['wrong_pass_log']);
		}
#   	} else {
#   		$self->stash(error_message => ['wrong_captcha']);
#   	}

    $self->_recaptcha;

	$self->render(
		template => 'login',
		format => 'html',
    );
}

sub is_admin {
	my $self = shift;

	if ($self->session('admin')){
		return 1;
	}

	$self->redirect_to('login');
	return;
}

sub logout {
	my $self = shift;

	$self->session(expires => 1);

	$self->redirect_to('/login') if ($self->session())->{admin};
}
1;