define(['jquery'], function($){
	var $section = $('.categories__list__section');

	$section.on('click', '.plus', function(e){
		e.preventDefault();
		var $this = $(this),
			$parent = $this.closest('li');

		$parent.find('.second__lvl').toggleClass('active');
	})
})