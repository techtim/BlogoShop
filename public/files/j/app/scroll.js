define(['jquery', 'app/shopFilters'], function($, draw_list){
	
	;(function( $, window, undefined ) {
	  
	  /**
	   * $.withinViewport()
	   * @description          jQuery method
	   * @param {Object}       [settings] optional settings
	   * @return {Collection}  Contains all elements that were within the viewport
	  */
	  $.fn.withinViewport = function(settings) {
	    if (typeof settings === "string") { settings = {sides: settings}; }
	    var opts = $.extend({}, settings, {sides: "all"}), elems = [];
	    this.each(function() {
	      if (withinViewport(this, opts)) {
	        elems.push(this);
	      }
	    });
	    return $(elems);
	  };
	  
	  // Custom selector
	  $.extend($.expr[":"], {
	    "within-viewport": function(element) {
	      return withinViewport(element, "all");
	    }
	  });
	  
	  /**
	   * Optional enhancements and shortcuts
	   * 
	   * @description Uncomment or comment these pieces as they apply to your project and coding preferences
	   */
	  
	  // Shorthand jQuery methods
	  //
	  $.fn.withinViewportTop = function(settings) {
	    if (typeof settings === "string") { settings = {sides: settings}; }
	    var opts = $.extend({}, settings, {sides: "top"}), elems = [];
	    this.each(function() {
	      if (withinViewport(this, opts)) {
	        elems.push(this);
	      }
	    });
	    return $(elems);
	  };
	  
	  $.fn.withinViewportRight = function(settings) {
	    if (typeof settings === "string") { settings = {sides: settings}; }
	    var opts = $.extend({}, settings, {sides: "right"}), elems = [];
	    this.each(function() {
	      if (withinViewport(this, opts)) {
	        elems.push(this);
	      }
	    });
	    return $(elems);
	  };
	  
	  $.fn.withinViewportBottom = function(settings) {
	    if (typeof settings === "string") { settings = {sides: settings}; }
	    var opts = $.extend({}, settings, {sides: "bottom"}), elems = [];
	    this.each(function() {
	      if (withinViewport(this, opts)) {
	        elems.push(this);
	      }
	    });
	    return $(elems);
	  };
	  
	  $.fn.withinViewportLeft = function(settings) {
	    if (typeof settings === "string") { settings = {sides: settings}; }
	    var opts = $.extend({}, settings, {sides: "left"}), elems = [];
	    this.each(function() {
	      if (withinViewport(this, opts)) {
	        elems.push(this);
	      }
	    });
	    return $(elems);
	  };
	  
	  // Custom jQuery selectors
	  //
	  $.extend($.expr[":"], {
	    "within-viewport-top": function(element) {
	      return withinViewport(element, "top");
	    },
	    "within-viewport-right": function(element) {
	      return withinViewport(element, "right");
	    },
	    "within-viewport-bottom": function(element) {
	      return withinViewport(element, "bottom");
	    },
	    "within-viewport-left": function(element) {
	      return withinViewport(element, "left");
	    }
	    //,
	    // "within-viewport-top-left-45": function(element) {
	    //   return withinViewport(element, {sides:'top left', top: 45, left: 45});
	    // }
	  });
	  
	})(jQuery, window);

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

			CONFIG.timeout = setTimeout(scrollHandler, 200);
		});

		var scrollHandler = function(){

			$(CONFIG.helper).bind('inview', function(){
				var $this = $(this),
					_url = $this.data('href'),
					_rand = Math.round(Math.random()*1000),
					_step = $this.data('next') ? ~~$this.data('next') : 0;

				if(typeof _url !== 'undefined' && _url.length > 0){
					
					$.get(_url, {next: _step, rand: _rand}, function(data){
						var $html = $(data);
						
						if ( _step ) { // если есть шаг - значит мы в магазине и нам надо сохранить хелпер для сролла

							draw_list({data: data});
							$this.data('next', _step + 16); // плюсуем шаг к предыдущему
						}else{
							$html.insertAfter($this);
							$this.remove();
						}

						set_equal_height();
					})
				}else{
					//$this.remove();
				}
			});

		};

	})();

	
		
})