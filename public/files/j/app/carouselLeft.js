define(['l/carousel', 'modernizr'], function(){

	var $carousel_section = $('.carousel__left'),
		$carousel = $carousel_section.find('.carousel__wrapper'),
		$controls = $carousel_section.find('.controls'),
		$pagination = $('.carousel__left').find('.pagination'),
		carousel;

	if($carousel_section.find('li').length === 0 ) {
		$carousel_section.hide();
		return false;
	}

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
			$controls.addClass('visible');
		})
		.on('mouseleave', function(){
			$(this).jcarouselAutoscroll('start');
			$controls.removeClass('visible');
		});

	$pagination.on('active.jcarouselpagination', 'li', function() {
        $(this).find('a').addClass('current');
    }).on('inactive.jcarouselpagination', 'li', function() {
        $(this).find('a').removeClass('current');
    }).jcarouselPagination({
		item: function(page, carouselItems) {
			return '<li><a href="#' + page + '"></a></li>';
		}
	});

	$carousel_section.find('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $carousel_section.find('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });


});