define(['jquery'], function(){
	var $section = $('.shop__items__list, .list__section'),
		$item = $section.find('li'),
		$overlay = $('#overlay'),
		_window_width = $(window).width();

	$item.find('.preview__ico').live('click', function(e){
		e.preventDefault();
		e.stopPropagation();

		var $this = $(this),
			$parent = $this.closest('li'),
			$desc_block = $parent.find('.shop__information__section'),
			_doc_height = $(document).height();

		clean();

		$overlay.css({
			'height': _doc_height
		});
		$parent.addClass('active');

		// по дефолту слой всегда справа, но
		// если правая часть слоя вылезает за пределы окна - меняем класс
		if( calculate_position( $desc_block ) ){ 
			$desc_block.removeClass('right');
			$desc_block.addClass('left');
		};

		$('body').addClass('overlayed');
	});

	$section.find('.shop__information__section').live('click', function( e ){
		e.stopPropagation();
	});

	$(window).on('keyup', function( e ){
		if(e.keyCode == 27){
			clean();
		}
	}).on('resize', function(){
		_window_width = $(window).width();
	}).on('click', $overlay, function(){
		clean();
	});

	var clean = function() {
		$('.shop__items__list').find('li').removeClass('active');
		$('body').removeClass('overlayed');
	};

	var calculate_position = function( $block ){
		var _block_width = $block.width(),
			_block_left_side = $block.offset().left,
			_block_right_side = _block_left_side + _block_width;

		return _block_right_side > _window_width;

	};

});