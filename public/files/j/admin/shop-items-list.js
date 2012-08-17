(function($){
	$('.list__section .controls').click(function(e){
		$this = $(this);
		_url = $this.attr('href');
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
	
	var set_equal_height = function(){
		var _height = 150;
		
		$('.blogs__section li, .list__section li').each(function(){
			_h = $(this).height();
			_height = _h > _height ? _h : _height;
		});
		$('.blogs__section li, .list__section li').css({
			height: _height
		})
	};
	set_equal_height()
})(jQuery);
