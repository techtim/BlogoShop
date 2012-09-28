define(['jquery', 'ui'], function($){

	(function(){
		var config = {
			section: '.fiters__section',
			price_filter: '.price__filter',
			new_filter: '.new__filter',
			loading: false
		}

		console.log(config)
		$(config.section).on('click', config.new_filter, function(e){
			e.preventDefault();
			var $this = $(this),
				_url = $this.attr('href');

			console.log(_url)
		});
	})()
	

	$('.price__slider').slider()
});