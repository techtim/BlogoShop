(function($){
	
	$(window).scroll(function(){
		_scrolled = $(window).scrollTop();
		$section = $('.fixed__navigation__helper');
		_section_height = $('.navigation__section', $section).outerHeight(true);
		
		if(_scrolled > 81 ){
			$('.header__section').css({
				marginBottom: _section_height
			});
			$section.addClass('active');	
		}else{
			$('.header__section').css({
				marginBottom: 0
			});
			$section.removeClass('active');
		}
	});
	
	var set_equal_height = function(){
		var _height = 150;
		
		$('.blogs__section li, .list__section li').each(function(){
			_h = $(this).height();
			_height = _h > _height ? _h : _height;
		});
		$('.blogs__section li, .list__section li').css({
			height: _height
		})
	};
	set_equal_height()
	
	$("body").screw({
		loadingHTML: '<img alt="Loading" src="/i/ajax-loader.gif">'
	}, function(){
		set_equal_height()
	});
	
	
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
					auto: 5,
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

	$('select:not(".not__custom")').selectik();
	
	$('.fake__checkbox').toggle(function(){
		$('input', this).attr('checked', true);
	}, function(){
		$('input', this).attr('checked', false);
	});

	(function bind__menu(){
		var $section = $('.sidebar__section .menu__section'),
			$subitem = '',
			_clicked = null,
			timeout = null;
			
		
		$section.on('click.title', '.title a', function(e){
			var $this = $(this),
				$parent = $this.closest('.item'),
				_id = $parent.index();

			$.cookie('menu_expand', _id, {
				expires: 365,
				path: '*.xoxloveka.ru'
			});
		});
		
		$section.on('click.expand_items', '.expand__items', function(){
			var $this = $(this);
			$this.toggleClass('opened');
			$('.item', $section).toggleClass('toggled');
		});
		
		
	})();
	
})(jQuery)
