(function($){
	$section = $('#shop__gallery');
	$full__section = $('.full__size__section', $section);
	$previews__section = $('.previews__section', $section);
	$img__tag = $('img', $full__section);
	
	(function get__first__image(){
		
		$first__img = $('a',$previews__section).first();
		_first_href = $first__img.attr('href');
		$img__tag = $('img', $full__section);
		$img__tag.attr('src', _first_href);
		$img__tag.load(function(){
			$img__tag.addClass('loaded');
			$first__img.addClass('current');
		});
		
	})();
	
	(function bind__gallery(){
		$('a', $previews__section).click(function(e){
			e.preventDefault();
			$this = $(this);
			$('a', $previews__section).removeClass('current');
			$this.addClass('current');
			_href = $this.attr('href');
			$img__tag.attr('src', _href);
		});
	})();
	
})(jQuery);
