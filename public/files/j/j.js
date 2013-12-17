$(function(){

	(function side__navigation(){
		var $section = $('.side__navigation__section');

		$section.on('click', '.title', function( e ){
			e.preventDefault();
			$section.find('.list li').removeClass('active');
			$(this).closest('li').toggleClass('active');
		});

	})();

	(function build_carousel(){
		var $section = $('.carousel__section__main'),
			$carousel = $section.find('.wrapper'),
			$controls = $section.find('.controls');

		$carousel
			.jcarousel({
				animation: {
					duration: 800,
					easing: 'linear'
				},
				transitions: Modernizr.csstransitions ? {
					transforms:   Modernizr.csstransforms,
					transforms3d: Modernizr.csstransforms3d
				} : false,
				wrap: 'circular'
			})
			.jcarouselAutoscroll({
				autostart: true,
				interval: 5000
			})
			.on('mouseenter', function(){
				$(this).jcarouselAutoscroll('stop');
			})
			.on('mouseleave', function(){
				$(this).jcarouselAutoscroll('start');
			});

		$section.find('.jcarousel-prev').jcarouselControl({
			target: '-=1'
		});

		$section.find('.jcarousel-next').jcarouselControl({
			target: '+=1'
		});

	})();

	var set_equal_height = function(){
		var $section = $('.preview__list');

		$.each( $section, function( idx, ele ){
			var $items = $(ele).find('li.item'),
				max_height = 0;

			$.each( $items, function( idx, item ){
				if( $(item).height() > max_height ){
					max_height = $(item).height();
				}
			});

			$items.css({
				height: max_height
			});

		});
	};
	set_equal_height();
});