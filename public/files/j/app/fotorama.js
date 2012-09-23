define(['jquery', 'fotorama'], function($){
	if($('.fotorama').length > 0 ) {
		$(".fotorama").fotorama({
	        resize: true,
	        thumbsPreview: true,
	        arrows: false,
	        backgroundColor: "#dddddd",
	        thumbsBackgroundColor: "#dddddd",
	        caption: true,
	        thumbBorderColor: '#1F6B23'
	    });
	 }
});