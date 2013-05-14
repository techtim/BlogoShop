define(['jquery'], function($){

	$('.list__section .controls').click(function(e){
		var $this = $(this),
			_url = $this.attr('href'),
			_type = $this.hasClass('delete') ? 'del' : 'act';

		$.ajax({
			type: 'post',
			success: function(data){
				if(_type == 'del'){
					$this.closest('li').remove();
				}else{
					$this.closest('li').toggleClass('not__active');
				}
			}
		});
	});

	var $list = $('.shop__items__list .list__section'),
		$items = $list.find('li');

	$('.price__filter').on('click', 'a', function( e ){
		e.preventDefault();
		var type = $(this).data('type'),
			counter = 1;

		$('.price__filter').find('a').removeClass('current');
		$(this).addClass('current');

		$items.removeClass('hidden');

		if( type === 'enabled'){
			$list.find('.disabled').addClass('hidden');
			$items.not('.hidden').css({
				marginRight: 22
			});

		}else if( type === 'disabled'){
			$list.find(':not(.disabled)').addClass('hidden');
			$items.not('.hidden').css({
				marginRight: 22
			});
		}

		$items.each( function( i, ele ){
			var $ele = $(ele);

			if( $ele.hasClass('hidden') ) return;

			if( counter % 4 === 0 ){
				$ele.css({
					marginRight: 0
				});
			}

			counter++;

		});
	});

});