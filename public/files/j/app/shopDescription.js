define(['jquery'], function($){
	$('.shop__description').on('click', '.expand__items', function(e){
		e.preventDefault();
		$(this).toggleClass('opened');
		$('.shop__description').toggleClass('active');
	})
});