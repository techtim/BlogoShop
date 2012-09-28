define(['jquery', 'ui'], function($){
	
	$(function(){

		var config = {
			section: '.fiters__section',
			price_filter: '.price__filter',
			new_filter: '.new__filter',
			loading: false
		}


		$(config.price_filter).on('click', 'a', function(e){

			e.preventDefault();
			var $this = $(this),
				_url = $this.attr('href');

			console.log(_url)
		});
		
		$('.price__slider').find('.slider').slider({
			range: true,
			min: 0,
			max: 9999,
			values: [0, 9999],
			slide: function(e, ui){
				console.log(ui.values[0] + ui.values[1]);
			}
		});
	})
});