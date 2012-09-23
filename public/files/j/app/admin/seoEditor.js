define(['jquery'], function($){
	$('.toggle__seo__editor').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('opened');
		$('.seo__editor').toggleClass('opened');	
	});
});