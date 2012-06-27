function setBlockPosRight(){

	$block = $('.logo-block');
	w_width = $(window).width();
	pos_left = $block.offset().left;
	wrap_width = $('#content .wrap').width();
	wrap_left = $('#content .wrap').offset().left + wrap_width;
	
	
	if ( w_width > 1305 ) {
		if($('.logo-block').hasClass('megafon-logo-sochi')) wrap_left = wrap_left-43
		$block.css({'left':wrap_left+'px','right':'auto'});
	}
	else {
		$block.css({'left':'auto','right':'10px'});
	};
}


function setBlockPosLeft(){
	$block = $('h1 a');
	w_width = $(window).width();
	pos_left = $('.first.euro2012').offset().left;
	$block.css({'left':pos_left+'px'});
}


function checkWindowPos(){
	scrolled = ~~$(window).scrollTop();
	header_height = ~~$('#header').height();
	sub_nav_height = ~~$('#sub-nav').height();
	
	if(scrolled > header_height){
		$('#content').addClass('spacer');
		$('#main-nav, #sub-nav').addClass('fixed');
		if($.browser.msie){
   			if($.browser.version == '7.0'){
   				$('#sub-nav-strip').addClass('fixed');
   			}
   		}
		$('#content').addClass('spacer');
		$('#main-nav .home a').fadeIn(500)
	}else{
		$('#content').removeClass('spacer')
		$('#main-nav, #sub-nav').removeClass('fixed')
		if($.browser.msie){
   			if($.browser.version == '7.0'){
   				$('#sub-nav-strip').addClass('fixed');
   			}
   		}
		$('#main-nav .home a').stop().fadeOut(100)
		
	}
}

$(function(){
	
	checkWindowPos()
	fc.refreshCounters();
	
	if ( $.browser.msie ){
		version = $.browser.version;
		if ( version == '8.0' || version == '7.0') {
			$('body').addClass('ie');
		}
		if ( version == '9.0'){
			$('body').addClass('ie9')
		}
	};
	
	setBlockPosRight();
	setBlockPosLeft();
	
	$(window).resize(function(){
		setBlockPosRight();
		setBlockPosLeft();
	});
	
	
	$('#pagination').hide();
	
	$("body").screw({
		loadingHTML: '<img alt="Loading" src="/i/ajax-loader.gif">'
	}, function(){
		fc.refreshCounters();
	});

    $('.twitter-in-text').live('click',function(){
    	href = $(this).attr('href');
    	
    	var	windowWidth = 600,
			windowHeight = 436,
			windowLeftPosition = (screen.width - windowWidth) / 2 + 50,
			windowTopPosition = (screen.height - windowHeight) / 3 + 80;
			
			windowLeftPosition = windowLeftPosition > 0 ? windowLeftPosition : 0;
			windowTopPosition = windowTopPosition > 0 ? windowTopPosition : 0;
			
			window.open(href,'','toolbar=0,status=0,width=' + windowWidth + ',height=' + windowHeight + ',left=' + windowLeftPosition + ',top=' + windowTopPosition);
		
		return false;
    });
    
    
	$(window).scroll(function(){
		checkWindowPos()
	})
		
    
});

