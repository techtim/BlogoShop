define(['jquery', 'app/shopFilters'], function($, draw_list){
	
	(function ($) {
		    function getViewportHeight() {
		        var height = window.innerHeight; // Safari, Opera
		        // if this is correct then return it. iPad has compat Mode, so will
		        // go into check clientHeight (which has the wrong value).
		        if (height) { return height; }
		        var mode = document.compatMode;

		        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
		            height = (mode == 'CSS1Compat') ?
		            document.documentElement.clientHeight : // Standards
		            document.body.clientHeight; // Quirks
		        }

		        return height;
		    }
		    
		    function offsetTop(debug)
		    {
		        // Manually calculate offset rather than using jQuery's offset
		        // This works-around iOS < 4 on iPad giving incorrect value
		        // cf http://bugs.jquery.com/ticket/6446#comment:9
		        var curtop = 0;
		        for (var obj = debug; obj !== null; obj = obj.offsetParent)
		        {
		            curtop += obj.offsetTop;
		        }
		        return curtop;
		    }

		    function check_inview()
		    {
		        var vpH = getViewportHeight(),
		            scrolltop = (window.pageYOffset ?
		                window.pageYOffset : 
		                document.documentElement.scrollTop ?
		                document.documentElement.scrollTop :
		                document.body.scrollTop),
		            elems = [];
		        
		        // naughty, but this is how it knows which elements to check for
		        $.each($.cache, function () {
		            if (this.events && this.events.inview) {
		                elems.push(this.handle.elem);
		            }
		        });

		        if (elems.length) {
		            $(elems).each(function () {
		                var $el = $(this),
		                    top = offsetTop(this),
		                    height = $el.height(),
		                    inview = $el.data('inview') || false;

		                if (scrolltop > (top + height) || scrolltop + vpH < top) {
		                    if (inview) {
		                        $el.data('inview', false);
		                        $el.trigger('inview', [ false ]);                        
		                    }
		                } else if (scrolltop < (top + height)) {
		                    var visPart = ( scrolltop > top ? 'bottom' : (scrolltop + vpH) < (top + height) ? 'top' : 'both' );
		                    if (!inview || inview !== visPart) {
		                      $el.data('inview', visPart);
		                      $el.trigger('inview', [ true, visPart]);
		                    }
		                }
		            });
		        }
		    }

		    $(window).scroll(check_inview);
		    $(window).resize(check_inview);
		    $(window).click(check_inview);
		    
		    // kick the event to pick up any elements already in view.
		    // note however, this only works if the plugin is included after the elements are bound to 'inview'
		    $(function () {
		        check_inview();
		    });
	})(jQuery);

	var infinite__scroll = (function(){


		var CONFIG = {
			helper: '.scroll__helper',
			timeout: null
		};


		$(window).bind('scroll.infinite__scroll', function(){

			if(CONFIG.timeout){
				clearTimeout(CONFIG.timeout);
				CONFIG.timeout = null;
			}

			CONFIG.timeout = setTimeout(scrollHandler, 500);
		});

		var scrollHandler = function(){

			$(CONFIG.helper).one('inview', function(){

				var $this = $(this),
					_url = $this.data('href'),
					_rand = Math.round(Math.random()*1000),
					_step = $this.data('next') ? ~~$this.data('next') : 0;

				if(typeof _url !== 'undefined' && _url.length > 0){

					$.get(_url, {next: _step, rand: _rand}, function(data){

						if ( _step ) { // если есть шаг - значит мы в магазине и нам надо сохранить хелпер для сролла

							if(data.items.length > 0){
								draw_list({ data: data 	});
								$this.data('next', _step + 16); // плюсуем шаг к предыдущему
							}else{ 
								$this.remove();
							}

						}else{

							$(data).insertAfter($this);
							$this.remove();

						}

						set_equal_height();
					})
				}else{
					$this.remove();
				}
			});

		};

	})();

	
		
})