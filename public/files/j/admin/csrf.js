(function($){
	$(document).ajaxSend(function(e, xhr, options) {
		var token = $("meta[name='csrftoken']").attr("content"); xhr.setRequestHeader("X-CSRF-Token", token); 
	});
})(jQuery);
