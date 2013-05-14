define(['l/carousel', 'modernizr'], function(){

	var $carousel_section = $('.carousel__main'),
		$carousel = $carousel_section.find('.carousel__wrapper'),
		$controls = $carousel_section.find('.controls'),
		$pagination = $('.carousel__main').find('.pagination'),
		carousel;

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
			interval: 3000
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
    }).on('createend.jcarouselpagination', function(){
		var width = 0 - $(this).outerWidth();
		$(this).css({
			marginLeft: width/2
		});
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