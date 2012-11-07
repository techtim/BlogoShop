
define(['jquery'], function($){

	$(function(){

		(function stiky_strip(){
			var $gray_strip = $('.top__gray__strip');
			var _header_height = $('.header__section').height();
			var _nav__height = $('.navigation__section').height();
			var _total = _header_height + _nav__height;

			$(window).on('scroll', function(){
				var _scrolled = $(window).scrollTop();

				if(_scrolled >= _total){
					$gray_strip.addClass('active');
				}else{
					$gray_strip.removeClass('active');
				}
			});	
		})();

		(function bind_sidebar_menu(){
			var $section = $('.sidebar__section .menu__section');

			$section.on('click.expand__items', '.expand__items', function(e){
				e.preventDefault();
				var $this = $(this);
				var _type = $this.data('role');

				$this.toggleClass('opened');
				if( _type === 'brands'){
					var $parent = $this.closest('.menu__section');
					$parent.toggleClass('hidden');
				}else{
					$('.item', $section).toggleClass('toggled');
				}
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