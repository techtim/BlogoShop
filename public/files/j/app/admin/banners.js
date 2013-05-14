define(['jquery', 'libs/mansory'], function( $ ){

	$(function(){


		var $section = $('.banners__section'),
			$banner_edit = $('.banner__edit'),
			$select = $('.banner__freq').find('select');

		if( banner_id !== ''){
			var $banner_section = $section.find('#b__'+banner_id),
				scroll_top = $banner_section.offset().top;

			$(document.body).scrollTop( scroll_top );
			$banner_section.html( $banner_edit );

			$banner_edit.on('dblclick', '.banner__link', function(){
				$(this).removeClass('disabled');
				$(this).removeAttr('disabled');
			});
		}

		(function build_banner_freq(){
			var banner_options = $('.banner__freq').find('option').length-1,
				html = '',
				selected = $('.banner__freq').find(':selected').val();

			for(var i=1; i<=banner_options; i++){
				var class_name = selected == i ? 'class="selected"' : '';
				html += '<li><a href="#" '+class_name+' data-freq="'+i+'">'+i+'</a></li>';
			}

			$('.banner__freq').find('ul').html( html );

			$('.banner__freq').on('click', 'a', function( e ){
				e.preventDefault();

				$('.banner__freq').find('a').removeClass('selected');
				$select.find('option').removeAttr('selected');
				$select.find('option[value="'+$(this).data('freq')+'"]').prop('selected', true);

				$(this).addClass('selected');
			});
		})();

		$section.on('click', '.active__button', function( e ){
			e.preventDefault();
			var state = $(this).hasClass('enabled') ? 'enabled' : 'disabled';

			$select.find('option').removeAttr('selected');
			$('.banner__freq').find('a').removeClass('selected');

			if( state === 'disabled' ){
				$('.banner__freq').find('a[data-freq="1"]').addClass('selected');
				$select.find('option[value="1"]').prop('selected', true);

				$(this).removeClass('disabled').addClass('enabled');
			}else{
				$(this).removeClass('enabled').addClass('disabled');
			}

		});

		$section.on('submit', 'form', function( e ){
			$('input.banner__link').removeAttr('disabled');
		});

		$(document).on('keyup', function( e ){
			if( e.keyCode === 27 ){
				document.location.href = '/admin/banners';
			}
		});

		$('.banners__cats').masonry({
            itemSelector: 'ul'
        });
	});
});