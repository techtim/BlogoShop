(function($){
	
	$('.checkbox').toggle(function(e){
		e.preventDefault();
		$(this).addClass('checked');
		$('input[type="checkbox"]',this).attr('checked', false);
	},function(){
		$(this).removeClass('checked');
		$('input[type="checkbox"]',this).attr('checked', true);
	});
	
	$('.dates__section input[type="text"]').datepicker({
		dateFormat: 'dd.mm.y'
	});
	
	(function bind__sale__dropdown(){
		$section = $('.currency');
		$dropdown = $('.dropdown', $section);
		
		$('.current__text', $section).click(function(e){
			e.stopPropagation();
			_rub = $(this).hasClass('rub');
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
		$('.button').live('click',function(e){
			$this = $(this);
			_role = $this.data('role');
			ele = $this.closest('.row');
			
			if(_role == 'add__params'){
				$helper = ele.find('.params__helper');
				_empty_helper = !!$helper.parents('.params__strip__section');
				if(_empty_helper) {
					$('#params__strip').tmpl(null).appendTo($helper).each(function(){
						$('select', $helper).selectik({
							width: 100
						});
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
			$select_api = $('select', ele).data('selectik');
			
			$select.change(function(){
				$selected = $('option:selected', this);
				_empty_selected = $selected.is(':disabled');
				_sub_item = ele.hasClass('sub__item');
				
				if(!_empty_selected){
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
					$select_api.hideCS();
				}else{
					
					/*
					 * если кликнутый параметр был уже выбран
					 * то ищем в списке параметров его и подсвечиваем
					 */
					
					_type = $selected.data('value');
					$('dl[data-type="'+_type+'"] dd').addClass('added');
					setInterval(function(){
						$('dl[data-type="'+_type+'"] dd').removeClass('added');
					}, 1000);
				}
			});
		
		};
		
		(function bind__color__pallete(){
			$('.add__color', ele).live('click', function(e){
				e.preventDefault();
				e.stopPropagation();
				$row = $(this).closest('.params__item');
				$dropdown = $('.dropdown__section', $row);
				$dropdown.closest('.dropdown__section').toggleClass('active');
			});
			
			$('.colors__select li', ele).live('click',function(e){
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
			
			$('.selected__colors .delete', ele).live('click', function(e){
				e.preventDefault();
				e.stopPropagation();
				$this = $(this);
				$parent = $this.parent();
				$row = $(this).closest('.params__item');
				$colors_block = $('.colors__select', $row);
				_color = $parent.data('color');
				$('li[data-color="'+_color+'"]', $colors_block).show();
				$parent.remove();
			});
			
			$('.delete__button').live('click', function(e){
				e.preventDefault();
				$this = $(this);
				_type = $this.hasClass('item__delete') ? 'item' : 'row';
				
				if(_type == 'row'){
					$row = $this.closest('.row');
					_type = $row.data('type');
					$this.closest('.params__item').remove();
					$('option[value="'+_type+'"]', $row).attr('disabled', false);
				}else{
					$this.closest('.sub__item').remove();
				}
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
				scrollTop: _pos_top
			}, 800)
		};
	
		$('.sex__section a').click(function(e){
			e.preventDefault();
			$this = $(this);
			$input_group = $('.sex__section input');
			$input_group.attr('checked',false);
			$('.sex__section a').removeClass('current');
			$this.addClass('current');
			$('input', $this).attr('checked', true);
		});
		
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
			$this = $(this);
			$parent = $this.closest('.row');
			if($this.is(':checked')) {
				$('.row .visible').addClass('checked');
			}else{
				$('.row .visible').addClass('checked');
			}
		});
		
		$('.fake__checkbox').live('click', function(e){
			e.preventDefault();
			$this = $(this);
			_with_checkbox = $(this).data('checkbox');
			$input = $('input', $this);
			$this.toggleClass('checked');
			_type = $this.data('type');
			if($input.is(':checked')){
				$input.attr('checked', false)
			}else{
				$input.attr('checked', true)
			}
			if(_type == 'del') {
				$this.parent().toggleClass('deleted');
			}else if(_type == 'preview'){
				$('.images__list li').removeClass('checked');
				$this.closest('li').addClass('checked');
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
	
	
	$('select').selectik();	
})(jQuery);
