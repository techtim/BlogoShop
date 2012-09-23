define(['jquery'], function($){

	var set_equal_height = (function(){

		var _height = 150;
		
		$('.blogs__section li, .list__section li').each(function(){
			_h = $(this).height();
			_height = _h > _height ? _h : _height;
		});

		$('.blogs__section li, .list__section li').css({
			height: _height
		})
		
	})();
});