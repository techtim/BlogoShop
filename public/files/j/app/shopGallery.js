define(['jquery'], function($){
	
	var shop_gallery = {}
	shop_gallery.config = {
		section: '#shop__gallery',
		preview_section: '.previews__section' ,
		full_section: '.full__size__section',
		popup: '.popup__full__img'	
	};

	shop_gallery.init = function(){
		
		var that = this,
			config = that.config,
			$section = $(config.section),
			$preview_section = $(config.preview_section),
			$full_section = $(config.full_section),
			$first_item = $('a:first', $preview_section),
			_href = $first_item.attr('href'),
			$full_size = $('a', $full_section),
			$popup = $(config.popup, $section),
			w1,w2,w4,h1,h2,h4,rw,rh;
		
		$popup.find('img').attr('src', _href);
		
		$full_size
			.attr('href', _href)
			.find('img')
			.attr('src', _href)
			.load(function(){
				$(this).addClass('loaded');
			})
			.on('mouseover', function(e){
				var $this = $(this);
				w1 = $('img', $full_section).width();
				h1 = $('img', $full_section).height();
				w2 = $popup.width();
				h2 = $popup.height();
				w3 = $popup.find('img').width();
				h3 = $popup.find('img').height();	
				w4 = w3 - w2;
				h4 = h3 - h2;	
				rw = w4/w1,
				rh = h4/h1;
				
				$popup.addClass('visible');
				image_move(e);
			})
			.on('mousemove', function(e){
				image_move(e)
			})
			.on('mouseout', function(){
				$popup.removeClass('visible');
				//$big_img.attr('src','')
			})
			.on('click', function(e){
				e.preventDefault();
			});
		
		
		var image_move = function(e){
			
			var p = $full_section.offset()
				pl = e.pageX - p.left,
				pt = e.pageY - p.top,
				xl = pl*rw,
				xt = pt*rh;

			xl = (xl>w4) ? w4 : xl,
			xt = (xt>h4) ? h4 : xt;

			$popup.find('img').css({'left':xl*(-1),'top':xt*(-1)})
		}
		
		
		$('a:first', $preview_section).addClass('current');
		$preview_section.on('click', 'a', function(e) {
			e.preventDefault();
			var $this = $(this),
				_href = $this.attr('href');
				
			$('a', $preview_section).removeClass('current');
			$this.addClass('current');
			$full_size.attr('href', _href);
			$('img', $full_section).attr('src', _href);
			$popup.find('img').attr('src', _href);
		});
		
	};

	return shop_gallery;
})