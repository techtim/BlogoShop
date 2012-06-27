$(window).scroll(function(){
	_scrolled = ~~$(window).scrollTop();
	$section = $('.fixed__navigation__helper');
	
	if(_scrolled > 81 ){
		$section.addClass('active');	
	}else{
		$section.removeClass('active');
	}
});

$(function(){
	
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
	
	
	(function carousel(){
		$carousel_section = $('.carousel');
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
			})
		}, 100)
			
		function slider_callback (carousel){			
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
		        carousel.scroll($.jcarousel.intval($(this).attr('data-id')));
		    });
		    
			carousel.clip.hover(function(){
				$('.jcarousel-prev, .jcarousel-next').css({
					'visibility':'visible'
				})
		        carousel.stopAuto();
			},function(){
				$('.jcarousel-prev, .jcarousel-next').css({
					'visibility':'hidden'
				})
				carousel.startAuto();
			});
			
			$('.jcarousel-prev, .jcarousel-next').hover(function(){
				$('.jcarousel-prev, .jcarousel-next').css({
					'visibility':'visible'
				});
				$(this).addClass('hover');
				carousel.stopAuto();				
			}, function(){
				$('.jcarousel-prev, .jcarousel-next').css({
					'visibility':'hidden'
				});
				$(this).removeClass('hover');
				carousel.startAuto();
			});
			
			$('li',$controls).hover(function(){
		        carousel.stopAuto();
			},function(){
				carousel.startAuto();
			});
		};
			
		function set_active(carousel){
			$('li a', $controls).removeClass('current')
				.eq(carousel.first-1).addClass('current')
		};
		
		
	})();
})

