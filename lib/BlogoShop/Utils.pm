package BlogoShop::Utils;

use Mojo::Base -base;

use strict;
use warnings;
use utf8 qw(encode decode);

use Time::Local;
use Data::Dumper;
use Digest::MD5 qw( md5_hex );
use POSIX qw(strftime);
use File::Path qw(make_path remove_tree);

use constant {	
	ARTICLES_COLLECTION => 'articles',
};

sub new {
	my $class= shift;
	my $self = {}; 
	$self->{months} = [qw(января февраля марта апреля мая июня июля августа сентября октября ноября декабря)];
	bless $self, $class; 
}

sub translit($)
{ 
	my ($self, $str, $for_url) = @_;
	return '' if !$str;
    $_ = $for_url ? lc($str) : $str;
    
    s/\s+/_/g if $for_url; 
    s/ъ|ь|Ъ|Ь|//g if $for_url;
    
	s/Сх/Sh/; s/сх/sh/; s/СХ/SH/;
	s/Ш/Sh/g; s/ш/sh/g;
	
	s/Сцх/Sch/; s/сцх/sch/; s/СЦХ/SCH/;
	s/Щ/Sch/g; s/щ/sch/g;
	
	s/Цх/Ch/; s/цх/ch/; s/ЦХ/CH/;
	s/Ч/Ch/g; s/ч/ch/g;
	
	s/Йа/Ja/; s/йа/ja/; s/ЙА/JA/;
	s/Я/Ja/g; s/я/ja/g;
	
	s/Йо/Jo/; s/йо/jo/; s/ЙО/JO/;
	s/Ё/Jo/g; s/ё/jo/g;
	
	s/Йу/Ju/; s/йу/ju/; s/ЙУ/JU/;
	s/Ю/Ju/g; s/ю/ju/g;
	
	s/Э/E/g; s/э/e/g;
	s/Е/E/g; s/е/e/g;
	
	s/Зх/Zh/g; s/зх/zh/g; s/ЗХ/ZH/g;
	s/Ж/Zh/g; s/ж/zh/g;
	
    tr/
	абвгдзийклмнопрстуфхцъыьАБВГДЗИЙКЛМНОПРСТУФХЦЪЫЬ/
	abvgdzijklmnoprstufhc\"y\'ABVGDZIJKLMNOPRSTUFHC\"Y\'/;
	
	$str = $_;
	return $str;
}

sub get_polls {
	my ($self, $article) = @_;
	my $polls;
	my @questions;
    return '' if !$article->{article_text};
	while ($article->{article_text} =~ /<poll="([^"]+)">(.+?)<\/poll>/gs) {
		my $poll = {};
		my $orig = $poll->{question} = $1;
		my $str = $2;
		$poll->{question} =~ s/ +/ /g;
		$poll->{question} =~ s/^ | $//g;
		utf8::encode($poll->{question});
		$poll->{hash} = md5_hex($poll->{question}); # create uniq id for poll
	  	push @questions, {orig => $orig, que => $poll->{question}};
		while ($str =~ /poll_(item|img)="([^"]+?)"/gs) {
			my ($img, $answer) = $1 eq 'img' ? split ';', $2 : ('', $2); # if poll_img then split value on img_tag and answer
			utf8::encode($answer);
			$poll->{answers}->{md5_hex($answer)} = {text => $answer, hash => md5_hex($answer), count => 0, img => $img};
		}
		$polls->{$poll->{hash}} = $poll;
	}

	foreach (@questions) {
		utf8::decode($_->{que});
		$article->{article_text} =~ s{<poll="\Q$_->{orig}\E">}{<poll="$_->{que}">};
	}
	return $polls;
}

sub date_from_mongoid {
	my $self = shift; 
	my $time = (hex(substr pop, 0, 8));
	my @lt = (localtime($time))[1..5];
	$lt[0] =~ s/^(\d{1})$/0$1/;
	return $lt[2].' '.$self->{months}[$lt[3]] . ($lt[4] != (localtime(time))[5] ? ' '.$lt[4]+1900 : '')." $lt[1]\:$lt[0]";
}

sub date_time_from_mongoid {
	my $self = shift; 
	my $time = (hex(substr shift, 0, 8));
	my $for_rss = pop;
	#for RSS return rfc822
	return strftime("%a, %d %b %Y %H:%M:%S %z", localtime($time)) if defined $for_rss && $for_rss == 1;
	my @lt = (localtime($time))[1..5];
	$lt[0] =~ s/^(\d{1})$/0$1/;
	return (join ('-', $lt[2], $lt[3]+1, $lt[4]+1900), "$lt[1]\:$lt[0]");
}

sub update_mongoid_with_time {
	my ($self, $id, $article_date, $article_time) = @_; 
	my $old_time = (hex(substr $id, 0, 8));
	my @new_time;
	push @new_time, $_ foreach reverse (split (':', $article_time), 0); # sec, min, hour 
	push @new_time, $_ foreach split ('-', $article_date); # day, month, year
	$new_time[5] -= 1900; # get unix year 
	$new_time[4]--; # mounth 0..11
	$id =~ s/[\d\w]{8}/sprintf("%x",timelocal(@new_time))/e;
	return $id;
}

sub get_images {
	my ($self, $controller, $name, $path) = @_;
    
    return 0 if !$path || !$name;
	my $images = [];
	my @image_descr = $controller->req->param($name.'_descr');
    
	my %image_delete = map {$_ => 1} $controller->req->param($name.'_delete');

	# Collect already uploaded files
	foreach ($controller->req->param($name.'_tag')) {
		my $tmp = {tag => $_, descr => shift @image_descr};
		$tmp->{descr} =~ s/\"/&quot;/g;
		push @$images, $tmp unless $image_delete{$_}; 
	}
    
	# Collect new files
	foreach my $file ($controller->req->upload($name)) {
		next unless $file->filename || $file->filename =~ /\.(jpg|jpeg|bmp|gif|png|tif|swf|flv)$/i;;

		my $image = {};
		$image->{tag} = (time() =~ /(\d{5})$/)[0].'_'.lc($self->translit($file->filename));
		$image->{tag} =~ s![\s\/\\]+!_!g;
		$image->{tag} =~ s![^\w\d\.\_]+!!g;
        
		my $folder_path = $controller->config('image_dir').$path;
        $folder_path =~ s/\/?$/\//;

		make_path($folder_path) or die 'Error on creating image folder:'.$folder_path.' -> '.$! unless (-d $folder_path);
		$file->move_to($folder_path.$image->{tag});
        
		$image->{descr} = shift @image_descr;
		$image->{descr} =~ s/\"/&quot/g;

		push @$images, $image;
	}
    
	return $images if @$images>0;
	return 0;
}

sub store_image {
    my ($self, $ctrlr, $file, $path) = @_;
    return unless $file->filename =~ /\.(jpg|jpeg|bmp|gif|png)/i;
    $path =~ s!/?$!/!;
    my $type = $1;
    my $folder_path = $ctrlr->config('image_dir').$path;
    make_path($folder_path) or die 'Error on creating image folder:'.$folder_path.' -> '.$! unless (-d $folder_path);
    my $filename = (int rand 1000).$file->filename;
    $file->move_to($folder_path.$filename);                
    return $ctrlr->config('image_url').$path.$filename;
}


sub get_list_brands {
    my ($self, $db) = @_;
    my $list_brands = {};
    push @{$list_brands->{$_->{category}->{_id}}}, $_ foreach ($db->brands->find({})->sort({name=>1})->all);
    return $list_brands;
}

sub get_banners {
    my ($self, $ctrlr, $category) = @_;
    my @banners = $ctrlr->app->db->banners->find({category=>$category})->all;
    my @rand_array;
    my $i = 0;
    # create array for randomization with number of banner position in array multiply on weight
    push @rand_array, ($i++) x $_->{weight} foreach @banners;
    my $selected = $rand_array[int rand @rand_array]; # get random position
    my $banner = splice(@banners,$selected,1); # delete from position
    unshift @banners, $banner; # put deleted at array front
    return \@banners;
}

sub render_article {
	my ($self, $controller, $article) = @_;

	return $article->{article_text} if !$article->{article_text};

	my $text = $article->{article_text};

	$text =~ s/([^\n\r]+)/<p>$1<\/p>\r/g;
	$text =~ s/\r?\n\r?\n/<br>/gi;
	{ # shitty "Malformed UTF-8 character"
		no warnings;
		$text =~ s/\&raquo;|\&laquo;|\x{ab}|\x{bb}/\"/g;
	};

	my %images = map {$_->{tag} => $_} @{$article->{images}} if ref $article->{images} eq 'ARRAY';
	my $img_url = $controller->config('image_url').($article->{type}|| $controller->config('default_img_dir')).'/'.$article->{alias}.'/';

	my @galleries;
	while ($text =~ m/<gallery>(.+?)<\/gallery>/gs) {
		my $html = $1;
		my $gallery = [];
		next unless $article->{images};
		while ($html =~ /img=\"([^\"]+?)\"/g) {
			next unless $images{$1};
			push @$gallery, $images{$1};
		}
		push @galleries, $gallery;
	}

#	my $gallery = [];
#	while ($text =~ /img=\"([^\"]+?)\"/g) {
#			my $image->{tag} = $1;
#			push @$gallery, $image;
#		}
#	$galleries[0] = $gallery;

	if (@galleries > 0) {
		my $i=0;
		while ($text =~ s/<gallery>.+?<\/gallery>/$controller->render("includes\/gallery", partial => 1, img_url => $img_url, gallery => $galleries[$i++])/gse) {;} 
	}

	$text =~ s/<img="([^"]+)">/$controller->render("includes\/image", partial => 1, img_url => $img_url.$1, img_descr => $images{$1}->{descr})/eg;
	
	$text =~ s/<flash="([^"]+)" ?height="([\d%]+)">/$controller->render("includes\/flash", partial => 1, flash_url => $img_url.$1, obj_id => "id-$1", height => $2||100)/eg;

	$text =~ s/<video="([^"]+)">/$controller->render("includes\/video", partial => 1, video_src => $img_url.$1, video_id => md5_hex($1))/eg;

	while ($text =~ s/<bq>(.+?)<\/bq>/$controller->render("includes\/blockquote", partial => 1, quote_text => $1)/sge) {;} 

	return $text;
}

sub update_active_rubrics {
	my ($self, $controller) = @_;
	$controller->app->defaults->{active_rubrics_in_cuts} = $controller->articles->get_active_rubrics_in_cuts();
	return 1;
}

# pop controller
sub is_mobile {
	my $agent = pop->req->headers->{headers}->{'user-agent'}->[0]->[0];
	return 0 if !$agent;
	return ( 
		$agent =~ m/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i ||
		substr($agent , 0, 4) =~ m/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i 
		?
		1 : 0
	);
}
	 

1;