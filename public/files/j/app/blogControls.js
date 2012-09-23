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
		})
	});

});