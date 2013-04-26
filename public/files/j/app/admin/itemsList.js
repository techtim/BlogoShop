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
		var type = $(this).data('type');

		$('.price__filter').find('a').removeClass('current');
		$(this).addClass('current');

		$items.removeClass('hidden');

		if( type === 'enabled'){
			$list.find('.disabled').addClass('hidden');
			$items.not('.hidden').css({
				marginRight: 22
			});
			$list.filter(':not(.hidden)').css({
				marginRight: 0
			});
		}else if( type === 'disabled'){
			$list.find(':not(.disabled)').addClass('hidden');
		}

	});

});