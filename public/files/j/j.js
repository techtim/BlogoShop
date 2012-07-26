(function($){
	
	$(window).scroll(function(){
		_scrolled = $(window).scrollTop();
		$section = $('.fixed__navigation__helper');
		
		if(_scrolled > 81 ){
			$section.addClass('active');	
		}else{
			$section.removeClass('active');
		}
	});
	
	(function set_equal_height(){
		_height = 200;
		
		$('.blogs__section li').each(function(){
			_h = $(this).height();
			_height = _h > _height ? _h : _height;
		});
		$('.blogs__section li').css({
			height: _height
		})
	})();
	
	if($.screw){
		$("body").screw({
			loadingHTML: '<img alt="Loading" src="/i/ajax-loader.gif">'
		});
	};
	
	if($('.fotorama').length > 0 ) {		
	    jQuery(".fotorama").fotorama({
	        resize: true,
	        thumbsPreview: true,
	        arrows: false,
	        backgroundColor: "#dddddd",
	        thumbsBackgroundColor: "#dddddd",
	        caption: true,
	        thumbBorderColor: '#1F6B23'
	    });
	}
	
	if($.jcarousel){
		(function carousel(){
			$carousel_section = $('.carousel');
			$controls = $('.controls', $carousel_section);
			
			setTimeout(function(){
				$('.items',$carousel_section).jcarousel({
					scroll: 1,
					visible: 1,
					itemFallbackDimension: 330,
					setupCallback: slider_callback,
					itemVisibleInCallback:{
						onAfterAnimation: set_active
					} 
				});
				
			}, 100)
				
			function slider_callback (carousel){
				window.carousel = carousel;	
				$slider = $('.items',$carousel_section);		
				_total = $('li',$slider).length;
				
				var _html = '';
				for(var i=1;i <= _total; i++){
					_html += '<li><a href="#" data-id="'+i+'"><\/a><\/li>';
				}
				
				$controls.append(_html).each(function(){
					_width = $('li',$controls).outerWidth(true) * _total;
					
					$(this).css({
						'width':_width,
						'margin-left': -(_width/2)
					}).each(function(){
						$('li:first a',$controls).addClass('current')
						$(this).css('display','block')
					});
					
				})
				
				$('li a',$controls).on('click', function(e) {
					e.preventDefault();
			        window.carousel.scroll($.jcarousel.intval($(this).attr('data-id')));
			    });
			    
				window.carousel.clip.hover(function(){
					$('.jcarousel-prev, .jcarousel-next').css({
						'visibility':'visible'
					})
			        window.carousel.stopAuto();
				},function(){
					$('.jcarousel-prev, .jcarousel-next').css({
						'visibility':'hidden'
					})
					window.carousel.startAuto();
				});
				
				$('.jcarousel-prev, .jcarousel-next').hover(function(){
					$('.jcarousel-prev, .jcarousel-next').css({
						'visibility':'visible'
					});
					$(this).addClass('hover');
					window.carousel.stopAuto();				
				}, function(){
					$('.jcarousel-prev, .jcarousel-next').css({
						'visibility':'hidden'
					});
					$(this).removeClass('hover');
					window.carousel.startAuto();
				});
				
				$('li',$controls).hover(function(){
			        window.carousel.stopAuto();
				},function(){
					window.carousel.startAuto();
				});
				
				if(typeof _scroll_to != 'undefined') window.carousel.scroll($.jcarousel.intval(_scroll_to));
			};
				
			function set_active(carousel){
				$('li a', $controls).removeClass('current')
					.eq(carousel.first-1).addClass('current')
			};
			
			
		})();
	};

		
	(function bind__menu(){
		$menu__section = $('.sidebar__section .menu__section');
		_cookie = $.cookie('opened_menu');
		
		$('.title', $menu__section).click(function(){
			$this = $(this);
			$parent = $this.closest('ul')
			_index = $parent.index();
			$('.item', $menu__section).removeClass('active');
			$parent.addClass('active');
			$.cookie('opened_menu', _index, {
				path: '/',
				expires: 365
			});
		});
		
		if(_cookie){
			_val = _cookie-1;
			$('.item', $menu__section).eq(_val).addClass('active');
		};
		
	})();
})(jQuery)
