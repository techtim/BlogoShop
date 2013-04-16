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

	var $list = $('.list__section'),
		$items = $list.find('li');

	$('.price__filter').on('click', 'a', function( e ){
		e.preventDefault();
		var type = $(this).data('type');

		$('.price__filter').find('a').removeClass('current');
		$(this).addClass('current');

		$items.css('display', 'block');

		if( type === 'enabled'){
			$items.filter(function( key, ele ){
				if( $(ele).hasClass('disabled') ){
					$(ele).css('display', 'none');
				}
			});
		}else if( type === 'disabled'){
			$items.filter(function( key, ele ){
				if( !$(ele).hasClass('disabled') ){
					$(ele).css('display', 'none');
				}
			});
		}
	});

});