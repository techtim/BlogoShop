define([
		'jquery',
		'l/tmpl',
		'l/ui',
		'l/customSelect',
		'l/mousewheel'
], function($){

	$('.dates__section input[type="text"]').datepicker({
		dateFormat: 'dd.mm.y'
	});

	(function bind__sale__dropdown(){
		$section = $('.currency');
		$dropdown = $('.dropdown', $section);

		$('.current__text', $section).click(function(e){
			e.stopPropagation();
			var _rub = $(this).hasClass('rub');
			if(_rub){
				$dropdown.find('.perc').show();
				$dropdown.find('.rub').hide();
			}else{
				$dropdown.find('.rub').show();
				$dropdown.find('.perc').hide();
			}
			$(this).parent().toggleClass('active');
		});

		$('li', $dropdown).click(function(){
			$this = $(this);
			_type = $this.data('type');
			$('.current__text', $section).attr('class','').attr('class','current__text '+_type);
		});

	})();

	(function bind__params(){

		var ele;
		$('.button').on('click',function(e){
			$this = $(this);
			_role = $this.data('role');
			ele = $this.closest('.row');

			if(_role == 'add__params'){
				var $helper = ele.find('.params__helper');
				var _empty_helper = !!$helper.parents('.params__strip__section');
				if(_empty_helper) {
					$('#params__strip').tmpl(null).appendTo($helper).each(function(){
						bind__params__select(ele);
					});
				}
				return false;
			}else if(_role == 'submit'){
				_perc = $('.currency .current__text').hasClass('perc');
				if(_perc) {
					_val = $('input[name="sale_value"]').val();
					$('input[name="sale_value"]').val(_val+'%');
				}
				$this.closest('form').submit();
				return false;
			}else if(_role == 'add__subitem'){
				draw__sub__item(ele.data('i'));
				return false;
			}else if(_role == 'create__copy'){
				return true
			}
		});

		var bind__params__select = function(ele){
			$select = $('.params__select', ele);

			$select.change(function(){
				var $selected = $('option:selected', this),
					_selected_value = $selected.val(),
					_empty_selected = $selected.is(':disabled'),
					_sub_item = ele.hasClass('sub__item'),
					_ele_param = ele.find('[data-type="'+_selected_value+'"]').length; // check if parameter is already displayed

				if(!_empty_selected && _ele_param === 0){
					data = {};
					data.id = ele.data('id');
					data.type = $selected.val();
					data.title = $selected.text();
					data.subitem = _sub_item ? true : false;
					if(_sub_item) data.i = ele.data('i');

					$block_to_append = $('.params__helper', ele);
					$('#row').tmpl(data).insertBefore($block_to_append).each(function(){
						$(this).closest('.row').data({
							'type': data.type,
							'i': data.i
						});
					});
					$('option:selected', this).attr('disabled', true)
				}else{

					/*
					 * если кликнутый параметр был уже выбран
					 * то ищем его в списке параметров и подсвечиваем
					 */

					_type = $selected.data('value');
					$('dl[data-type="'+_selected_value+'"]').addClass('added');
					setInterval(function(){
						$('dl[data-type="'+_selected_value+'"]').removeClass('added');
					}, 2000);
				}
			});

		};

		(function bind__color__pallete(){
			$('.add__color', ele).on('click', function(e){
				e.preventDefault();
				e.stopPropagation();
				$row = $(this).closest('.params__item');
				$dropdown = $('.dropdown__section', $row);
				$dropdown.closest('.dropdown__section').toggleClass('active');
			});

			$('.colors__select li', ele).on('click',function(e){
				e.stopPropagation();
				$this = $(this);
				_color = $this.data('color');
				_current_colors = [];
				$row = $this.closest('.params__item');
				$selected_colors_block = $('.selected__colors', $row);
				$input = $('input', $row);
				if($input.val().length > 0) _current_colors = $input.val().split(',');
				_item = '<li style="background-color: #'+_color+';" data-color="'+_color+'"><a class="delete" href="#" title="Удалить цвет"></a>';
				$(_item).appendTo($selected_colors_block);
				_current_colors.push(_color);
				$input.val(_current_colors.join(','));
				$this.hide();
			});

			$('.selected__colors .delete', ele).on('click', function(e){
				e.preventDefault();
				e.stopPropagation();

				var $this = $(this),
					$parent = $this.parent(),
					$row = $this.closest('.params__item'),
					$colors_block = $('.colors__select', $row),
					_color = $parent.data('color');

				$('li[data-color="'+_color+'"]', $colors_block).show();
				$parent.remove();
			});

			$('.delete__button').on('click', function(e){
				e.preventDefault();
				var $this = $(this),
					_type = $this.data('type');

				if(_type == 'row'){
					var $row = $this.closest('.row'),
						_type = $row.data('type');

					$this.closest('.params__item').remove();
					$('option[value="'+_type+'"]', $row).attr('disabled', false);

				}else if(_type == 'item'){
					decrement_sub_item($this);
					$this.closest('.sub__item').remove();
				}
			});

			$('.sex__section a').on('click', function(e){
				e.preventDefault();
				var $this = $(this),
					$input_group = $('.sex__section input');

				$input_group.attr('checked',false);
				$('.sex__section a').removeClass('current');
				$this.addClass('current');
				$('input', $this).attr('checked', true);
			});

		})();

		var draw__sub__item = function(params){
			$last__sub__item = $('.sub__item').last();
			if($last__sub__item.length != 0){
				data = {}
				data.i = ~~$last__sub__item.data('i')+1;
				$('#subitem').tmpl(data).insertAfter($last__sub__item).each(function(){
					$last = $('.sub__item').last();
				});
			}else{
				data = {}
				data.i = 1;
				$('#subitem').tmpl(data).insertAfter('.main__item');
			};
			$new_last_item = $('.sub__item').last();
			_pos_top = $new_last_item.offset().top;
			$('html, body').animate({
				scrollTop: _pos_top-40
			}, 800)
		};

		var decrement_sub_item = function($ele){
			var $parent = $ele.closest('.sub__item'),
				$next_blocks = $parent.nextUntil('.sub__items')

			$next_blocks.each(function(){
				var $this = $(this),
					_id = $this.data('i')-1;
				$this.data('i', _id);

				$('input',$this).each(function(){
					var $this = $(this),
						_name = $this.attr('name'),
						_decremented_name = '';
					_decremented_name = _name.replace(/\d/, _id);
					$this.attr('name', _decremented_name);
				})
			});
		};

	})();

	$(document).click(function(){
		$('.dropdown').each(function(){
			$this = $(this);
			_visible = $this.is(':visible');
			if(_visible) $this.closest('.dropdown__section').removeClass('active');
		})
	});

	(function bind__visibility(){
		$('.acive__item__checkbox').each(function(){
			var $this = $(this),
				$parent = $this.closest('.row');

			if($this.is(':checked')) {
				$('.row .visible').addClass('checked');
			}else{
				$('.row .visible').addClass('checked');
			}
		});

		$('.fake__checkbox').on('click', function(e){
			e.preventDefault();
			var $this = $(this),
				$input = $this.find('input'),
				$parent = $this.closest('li'),
				_type = $this.data('type');

			$parent.toggleClass('checked');

			if(_type === 'del') {
				$this.parent().toggleClass('deleted');
			}else if(_type === 'preview'){
				$('.images__list li').removeClass('checked').find('input').attr('checked', false);
				$input.attr('checked', true);
				$parent.addClass('checked');
			};
		});

	})();

	(function bind__photo__upload(){
		$loading__section = $('.loading__section');
		_row_count = 5;

		$('.add', $loading__section).click(function(e){
			e.preventDefault();
			$section = $('.upload__section');
			$last = $('.row', $section).last();
			if(_row_count > 0){
				$last.removeClass('new');
				$('#upload__field').tmpl(null).insertAfter($last);
				--_row_count;
			};
		});

	})();

    $( "#add-image-upload-fields" ).click( function () {

        var more_fields =
            '<tr>' +
            '<td width="100"></td>' +
            '<td>' +
            '<input type="text" name="image_descr" size=40/>' +
            '</td>' +
            '<td>' +
            '<input type="file" name="image"/>' +
            '</td>' +
            '</tr>';

        var $tbody = $("#new_upload_fields tbody");

        function jack_in( to, what ) {
            var $what = $(what);
            to.append( what );
        }

        for ( var z = 0; z < 8; z++ ) {
            jack_in( $tbody, more_fields );
            console.log(z);
            // $tbody.append( $more_fields );
        }

    });
});
