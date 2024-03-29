define(['jquery'], function($){
	$('.active__button').on('click', function(e){
		e.preventDefault();
		var $this = $(this),
			$parent = $this.closest('li'),
			_id = $parent.data('id'),
			_active = $parent.hasClass('not__active') ? 1 : 0,
			_url = '/admin/article/'+_id+'/active/'+_active;
		
		$.post(_url, function(data){
			if(data.ok) $parent.toggleClass('not__active');
		})
	});
})