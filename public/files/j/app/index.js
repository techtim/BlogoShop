define([
	'jquery',
	'carousel'
],function($, jcarousel){
	
	var $carousel_section = $('.carousel'),
		$controls = $('.controls', $carousel_section);

	setTimeout(function(){
		$('.items',$carousel_section).jcarousel({
			auto: 3,
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
			

});