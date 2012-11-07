define(['jquery'], function($){

	$(function(){
		var $section = $('.sidebar__section .menu__section'),
			$subitem = '',
			_clicked = null,
			timeout = null;

		$section.on('click', '.expand__items', function(e){
			e.preventDefault();
			var $this = $(this);
			var _type = $this.data('role');
			console.log(_type)
			if( _type === 'brands'){

			}else{
				$this.toggleClass('opened');
				$('.item', $section).toggleClass('toggled');
			}
		});
	});
	
});