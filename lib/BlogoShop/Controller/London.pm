package BlogoShop::Controller::London;

use Mojo::Base 'Mojolicious::Controller';
use LWP::UserAgent ();
use XML::Simple ();
use Captcha::reCAPTCHA ();

use utf8;

use constant ARTICLE_FILTER => qw(cut rubric alias);

sub import {
	my $self = shift;

	use XML::Simple;
	use HTML::Entities;

	#my $xml = new XML::Simple;
	use Data::Dumper;
	open my $fh, '<:encoding(UTF-8)', '/home/LDAP/ttavlintsev/london_poi_no_links.xml';
#	open my $OUT, '>:encoding(UTF-8)', 'london_poi_work.xml';
	my $xml = '';
	$xml .= $_ while <$fh>;
	$xml =~ s!<description>(.+?)</description>!'<description>'.HTML::Entities::encode($1, '<>').'</description>'!seg;
	
	my $ref = XMLin($xml, ForceArray => ['row']);

	my $places = $ref->{pois}->{row};
	#print Dumper $places;
	my @array;
	
	foreach my $id (keys %$places) {
	    my $place = $places->{$id};
	    $place->{redigo_id} = 0+$id;  
	    my @cat;
	    push @cat, $place->{category}->{row}->{$_}->{title} foreach keys %{$place->{category}->{row}};
	    $place->{category} = \@cat;
	#    print $place->{description};
	    $place->{description} = ref $place->{description} eq 'HASH' ? '': 
	        HTML::Entities::decode($place->{description});
		$place->{location} = {lon => 0+$place->{longitude}, lat => 0+$place->{latitude}};
		delete $place->{latitude}; delete $place->{longitude};

		$place->{editors_choice} = length $place->{editors_choice} == 2 ? 1 : 0; # 2 means "da" 3 mean "net" 
	    if ($place->{description}) {
	        $place->{description} =~ s!</?btw>|</?p>!!gs;
	        $place->{description} =~ s!<title>.+?</title>!!gs;
	        $place->{description} =~ s![\n\r]+!!gs;
	        $place->{description} =~ s![ \t]+! !gs;
	        $place->{description} =~ s!^ | $!!gs;
	    }
	    push @array, $place;
	    warn Dumper $place;
#    	$self->app->db->london_places->save($place);
	}
	return $self->render(
		json => \@array,
	);
}

sub get_sights_json {
	my $self = shift;
	my @all = $self->app->db->london_places->find({})->all;
	return $self->render(
		json => {sights => \@all},
	);
}

sub get_sports_json {
	my $self = shift;
	my @all = $self->app->db->london_sports->find({})->all;
	return $self->render(
		json => {sports => \@all},
	);
}

sub import_sports {
	my $self = shift;
	
	my @cit = $self->app->db->games_cities->find()->sort({pos=>1})->all;
	
	my $ct = 1;
	@cit = ( @cit[1..4], $cit[0], @cit[5..12]); 
	warn $self->dumper(\@cit);

	foreach (@cit) {
		$_->{pos} = $ct++;
#		$self->app->db->big_games_cities->save($_);
	}
return $self->render(
		json => {ok => \@cit},
	);
	use XML::Simple;
	open my $fh, '<:encoding(UTF-8)', '/home/LDAP/ttavlintsev/sports1_utf.xml';
	my $xml = '';

	$xml .= $_ while <$fh>;

	my $ref = XMLin($xml);
	$ref = $ref->{item};
	my @sports;
	foreach (keys %$ref) {
		$ref->{$_}->{_id} = 0+$_;
		$ref->{$_}->{sport} =~ s![\n\r]!!gm;
		$ref->{$_}->{content} =~ s![\n\r]!!gm;
		$ref->{$_}->{content} =~ s!<img src=\"([\w_\.]+?)\"[^>]+?>!!m;
		$ref->{$_}->{img} = 'i/sport_images/'.$1;
		warn $self->dumper($ref->{$_});
		push @sports, $ref->{$_};
#		$self->app->db->london_sports->save($ref->{$_});
	}
#	warn $self->dumper($ref);
	
	return $self->render(
		json => {sights => $ref},
	);
}

use Spreadsheet::ParseExcel;
sub import_stadions {
	my $self = shift;

	my $parser   = Spreadsheet::ParseExcel->new();
    my $workbook = $parser->parse('/home/LDAP/ttavlintsev/central_zone_olympics.xls');

    if ( !defined $workbook ) {
        die $parser->error(), ".\n";
    }
    
    for my $worksheet ( $workbook->worksheets() ) {
        
    	my ( $row_min, $row_max ) = $worksheet->row_range();
        my ( $col_min, $col_max ) = $worksheet->col_range();

        for my $row ( 1 .. $row_max ) {
            my $place = {};
            for my $col ( $col_min .. $col_max ) {

                my $cell = $worksheet->get_cell( $row, $col );
                next unless $cell;

				$place->{zone_id} = 1;
				$place->{zone} = $cell->value() if $col == 0;
                $place->{name} = $cell->value() if $col == 1;
                $place->{name_eng} = $cell->value() if $col == 2;
				$place->{category} = [split '/', $cell->value()] if $col == 3;
				$place->{address} = $cell->value() if $col == 4;
				$place->{location}->{lat} = $cell->value() if $col == 5;
				$place->{location}->{lon} = $cell->value() if $col == 6;
				$place->{descr} = $cell->value() if $col == 7;
            }
            warn $self->dumper($place);
            $self->app->db->london_sports->save($place);
   		}
    }
    return $self->render(
		json => {ok => 1},
	);
}
1;