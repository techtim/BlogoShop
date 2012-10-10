define(['jquery'], function($){

	set_equal_height = function(){ // in global to be able to call it from other scripts ( scroll.js )

		var _height = 150;
		
		$('.blogs__section li, .list__section li').each(function(){
			_h = $(this).height();
			_height = _h > _height ? _h : _height;
		});

		$('.blogs__section li, .list__section li:not(".scroll__helper")').css({
			height: _height
		})
		
	};

	set_equal_height()
});