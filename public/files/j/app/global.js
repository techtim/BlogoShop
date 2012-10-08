
define(['jquery'], function($){

	$(function(){
		$(window).scroll(function(){
			var _scrolled = $(window).scrollTop(),
				$section = $('.fixed__navigation__helper'),
				_section_height = $('.navigation__section', $section).outerHeight(true);
			
			if(_scrolled > 81 ){
				$('.header__section').css({
					marginBottom: _section_height
				});
				$section.addClass('active');	
			}else{
				$('.header__section').css({
					marginBottom: 0
				});
				$section.removeClass('active');
			}
		});

		(function bind_sidebar_menu(){
			var $section = $('.sidebar__section .menu__section');

			$section.on('click.expand_items', '.expand__items', function(e){
				e.preventDefault();
				var $this = $(this);
				$this.toggleClass('opened');
				$('.item', $section).toggleClass('toggled');
			});

		})();
		
		$('.fake__checkbox').on('click', function(){
			var $this = $(this),
				_checked = $this.hasClass('checked');

			if(_checked){
				$this.removeClass('checked');
				$('input', $this).attr('checked', false);

			}else{
				$this.addClass('checked');
				$('input', $this).attr('checked', true);
			}

		});

		$(document).ajaxSend(function(e, xhr, options) {
			var token = $("meta[name='csrftoken']").attr("content");
			xhr.setRequestHeader("X-CSRF-Token", token); 
		});
	})
});