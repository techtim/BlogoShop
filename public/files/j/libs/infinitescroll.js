define(['jquery'], function($){}
	(function(){
	 	$.fn.extend({ 
	 		screw: function(options, callback) {
				var defaults = {
				 loadingHTML : 'Loading ... '
				}				
				var option =  $.extend(defaults, options);
	            var obj = $(this);

	    		return this.each(function() {
	    			var isiOS = false;
					var agent = navigator.userAgent.toLowerCase();
					if(agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0){
						   $(window).bind('touchmove',function(e){
						      screwIt($(this));
						});
					}
					
					$(window).scroll(function() {
						screwIt($(this));                             
					});
	              
					var screwIt = function(it){				
						
						var h = $(window).height(), w = $(window).width(), st = it.scrollTop(), t = h+st;                
		
						$(".screw-image").each(function(){  
	                 
							var pos = $(this).offset(), rand = Math.round(Math.random()*1000);

							if(t >= pos.top && pos.left <= w){
								if(!$(this).hasClass('screw-loaded') && !$(this).hasClass('screw-loading')){

									$(this).addClass('screw-loading').html('<div id="screw-loading-' + rand + '">' + option.loadingHTML + '</div>');
									
									// Stop cache
									var url = $(this).attr('rel'), patt = /&/g;
									if(patt.test(url)){
										url += '&screw_rand=' + rand;
									} else {
										url += '?screw_rand=' + rand;
									}

									// Preload image
									objImage = new Image();
									objImage.src = url;
									
									var o = $(this);
									
									objImage.onload = function(){
										o.append('<img style="display:none" id="screw-content-' + rand + '" class="screw-content" src="' + url + '" />');                            
										$('#screw-loading-' + rand).fadeOut('slow', function(){
											$('#screw-content-' + rand).fadeIn('slow');
											o.removeClass('screw-loading').addClass('screw-loaded');
										});
									};
								}                        
							}
						});	
	                
	                $(".screw").each(function(){
	                	rel = $(this).attr('rel')
	                	if(rel != '' ){ 
	                	
		                    var pos = $(this).offset(), o = $(this), rand = Math.round(Math.random()*1000), data_type = 'html';
		                    
		                    
		                    if(t >= pos.top && pos.left <= w){
		                        if($(this).hasClass('screw-xml')){
		                          data_type = 'xml';  
		                        } else if($(this).hasClass('screw-json')){
		                          data_type = 'json';  
		                        } else if($(this).hasClass('screw-script')){
		                          data_type = 'script';  
		                        }
		                        
		                    if((!$(this).hasClass('screw-loaded') || $(this).hasClass('screw-repeat') && !$(this).hasClass('screw-loading'))){
		                        o.addClass('screw-loading');
		                        if(option.loadingHTML){
		                            o.html('<div id="screw-loading-' + rand + '">' + option.loadingHTML + '</div>');
		                        }
		                        
		                        if(o.hasClass('screw-replace')){
			                        if($(this).attr('rel')){
			                          $.get($(this).attr('rel'), function(data) {
			                             o.replaceWith(data);
			                             callback.call()
			                       	 	}, data_type);
			                        } else if($(this).attr('rev')){
			                            o.replaceWith($(this).attr('rev'));
			                        }
		                        } else if(o.hasClass('screw-append')){
		                        if($(this).attr('rel')){
		                          $.get($(this).attr('rel'), function(data) {
		                             o.append('<div style="display:none" id="screw-content-' + rand + '" class="screw-content">' + data + '</div>');
		                             showContent(rand);
		                             callback.call()
		                        }, data_type);  
		                        } else if($(this).attr('rev')){
		                            o.append('<div style="display:none" id="screw-content-' + rand + '" class="screw-content">' + $(this).attr('rev') + '</div>');
		                            showContent(rand);
		                            callback.call()
		                        } 
		                        } else if(o.hasClass('screw-prepend')){
		                        if($(this).attr('rel')){
		                          $.get($(this).attr('rel'), function(data) {
		                             o.prepend('<div style="display:none" id="screw-content-' + rand + '" class="screw-content">' + data + '</div>');
		                             showContent(rand);
		                             callback.call()
		                        }, data_type);  
		                        } else if($(this).attr('rev')){
		                            o.prepend('<div style="display:none" id="screw-content-' + rand + '" class="screw-content">' + $(this).attr('rev') + '</div>');
		                            showContent(rand);
		                            callback.call()
		                        } 
		                        } else if(o.hasClass('screw-before')){
		                        if($(this).attr('rel')){
		                          $.get($(this).attr('rel'), function(data) {
		                             o.before('<div style="display:none" id="screw-content-' + rand + '" class="screw-content">' + data + '</div>');
		                             showContent(rand);
		                             callback.call()
		                        }, data_type);  
		                        } else if($(this).attr('rev')){
		                            o.before('<div style="display:none" id="screw-content-' + rand + '" class="screw-content">' + $(this).attr('rev') + '</div>');
		                            showContent(rand);
		                            callback.call()
		                        }
		                        
		                        if(o.hasClass('screw-repeat') && pos.top < $(window).height() && pos.left < $(window).width()){
		                            if($(this).attr('rel')){
		                            $.get($(this).attr('rel'), function(data) {
		                                    o.before('<div style="display:none" id="screw-content-' + rand + '" class="screw-content">' + data + '</div>');
		                                    showContent(rand);
		                                    callback.call()
		                            }, data_type);
		                            } else if($(this).attr('rev')){
		                                o.before('<div style="display:none" id="screw-content-' + rand + '" class="screw-content">' + $(this).attr('rev') + '</div>');
		                                showContent(rand);
		                                callback.call()
		                            }
		                        }
		                         
		                        } else if(o.hasClass('screw-after')){
		                        if($(this).attr('rel')){
		                          $.get($(this).attr('rel'), function(data) {
		                             o.after('<div style="display:none" id="screw-content-' + rand + '" class="screw-content">' + data + '</div>');
		                             showContent(rand);
		                             callback.call()
		                        }, data_type);  
		                        } else if($(this).attr('rev')){
		                            o.after('<div style="display:none" id="screw-content-' + rand + '" class="screw-content">' + $(this).attr('rev') + '</div>');
		                            showContent(rand);
		                            callback.call()
		                        } 
		                        } else {
		                        if($(this).attr('rel')){
		                          $.get($(this).attr('rel'), function(data) {
		                             o.append('<div style="display:none" id="screw-content-' + rand + '" class="screw-content">' + data + '</div>');
		                             showContent(rand);
		                             callback.call()
		                        }, data_type);  
		                        } else if($(this).attr('rev')){
		                            o.append('<div style="display:none" id="screw-content-' + rand + '" class="screw-content">' + $(this).attr('rev') + '</div>');
		                            showContent(rand);
		                            callback.call()
		                        } 
		                        }
		                        o.removeClass('screw-loading').addClass('screw-loaded');
		                    }  
		                   }                      
	                    }
	                });
	                
	                $(".screw-remove").each(function(){
	                    if($(this).hasClass('screw-loaded')){
	                        var p = $(this).position();
	                        if(p.top < st || p.left > w){
	                            if($(this).is(':visible')){
	                                $(this).fadeOut('slow');
	                            }
	                        }
	                    }
	                });
	                
	              };
	              
	              var showContent = function(rand){
	                if(option.loadingHTML){
	                    $('#screw-loading-' + rand).fadeOut('slow', function(){
	                        $('#screw-content-' + rand).fadeIn('slow');
	                    });
	                } else {
	                    $('#screw-content-' + rand).fadeIn('slow');
	                }               
	              };
	              
	              screwIt($(window));
	    		});
	    	

	    	}
		});
		
	})();
});