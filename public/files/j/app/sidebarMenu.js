define(['jquery'], function($){

	$(function(){
		var $section = $('.sidebar__section .menu__section'),
			$subitem = '',
			_clicked = null,
			timeout = null;

		$section.on('click', '.expand__items', function(e){
			e.preventDefault();
			var $this = $(this);
			$this.toggleClass('opened');
			$('.item', $section).toggleClass('toggled');
		});
	});
	
});