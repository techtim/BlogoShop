function init_sticky_sidebar_section(){

	var legacy_msie = fc.legacy_msie || $.browser.msie && ($.browser.version.slice(0,1) == "7" || $.browser.version.slice(0,1) == "6");
	var $window = $(window);
	var $content = $('#content');
	var $sidebar = $( $('.col-sidebar')[0] );
	var $recent_articles = $( $(".related-articles")[0] );
	var $banners = $( $('.banners')[0] );

	var parked_left = $sidebar.offset().left;

	// recalculate r.a.'s top offset on every scroll event. suboptimal, but bulletproof!
	var parked_top =
		$banners.offset().top +
		$banners.height() -
		$('#header').height()+
		(legacy_msie ? 16 : 0);
		
	if ( ~~$window.scrollTop() > ~~parked_top ) {

		$recent_articles.css({
			width: '233px',
			background: 'white',
			position: 'fixed',
			top: '116px',
			left: ~~(parked_left) + 'px',
			zIndex: 9,
			borderRadius: '0 0 5px 5px'
		});
		$('.sidebar-section-wrapper',$recent_articles).css({'border':'none'})
	}
	else {
		$recent_articles.css({
			position: 'static',
			background: 'transparent',
			display: 'block',
			'border-radius': '0'
		});
		
		$('.sidebar-section-wrapper',$recent_articles).removeAttr('style')
	}

}; 
    
$(function(){
	
	if($.browser.msie){
		version = $.browser.version;
		if ( version == '8.0' || version == '7.0') {
			$('body').addClass('ie');
		}
	};

	
    $(".fotorama").fotorama({
        resize: true,
        thumbsPreview: true,
        arrows: false,
        backgroundColor: "#dddddd",
        thumbsBackgroundColor: "#dddddd",
        caption: true,
        thumbBorderColor: '#1F6B23'
    });

   
	init_sticky_sidebar_section();
	$(window).scroll( function () {
		init_sticky_sidebar_section();
	});
	
    fc.showComments();


});