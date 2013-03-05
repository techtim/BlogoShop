define(['jquery', 'app/shopFilters'], function($, draw_list){

	function checkBlockPosition(options){
		var block = options.block
		var pos_top = block.offset().top
		var block_height = block.height() || options.height
		var from_top = $(window).scrollTop()
		if(pos_top >= (from_top-options.threshold) && pos_top <= ($(window).height() + $(window).scrollTop())){
			return true
		}else{
			return false
		}
	}

	var infinite__scroll = (function(){


		var CONFIG = {
			helper: '.scroll__helper'
		};

		var timeout = null,
			loading = false;

		$(window).bind('scroll.infinite__scroll', function(){

			if(timeout){
				clearTimeout(timeout);
				CONFIG.timeout = null;
			}

			timeout = setTimeout(scrollHandler, 1);
		});

		var scrollHandler = function(){

			var $ele = $(CONFIG.helper),
				_visible = checkBlockPosition({
					block: $ele,
					threshold: 50
				});

			if(_visible && !loading){

				var _url = $ele.data('href'),
					_rand = Math.round(Math.random()*1000),
					_step = $ele.data('next') ? ~~$ele.data('next') : 0;

				if(typeof _url !== 'undefined' && _url.length > 0 ){

					loading = true;

					$.get(_url, {next: _step, rand: _rand}, function(data){

						if ( _step ) { // если есть шаг - значит мы в магазине и нам надо сохранить хелпер для сролла

							if(data.items.length > 0){
								draw_list({ data: data 	});
								$ele.data('next', _step + 16); // плюсуем шаг к предыдущему
							}else{
								$ele.remove();
							}

						}else{
							$(data).insertAfter($ele);
							$ele.remove();
						}

						set_equal_height();
						loading = false;
					})
				}else{
					$ele.remove();
				}

			};

		};

	})();



})