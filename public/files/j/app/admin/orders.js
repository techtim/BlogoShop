define(['jquery'], function($){

	$('.list').on('click', '.cut', function(){
		var $this = $(this),
			$parent = $this.closest('li');

		$parent.toggleClass('active');
	}).on('click', '.submit__button', function(e){
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this),
			$parent = $this.closest('li'),
			_active = $this.hasClass('active');

		if(_active) $parent.find('form').submit();

	});


});