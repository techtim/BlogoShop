var cart = {};
cart.config = {
	input: '.count, .deliver__type',
	summ: '.summ__section',
	submit: '.submit__form',
	types_section: '.types__list',
	deliver_class: 'deliver__type',
	item_block: '.item__block',
	error_block: '.message'
};
cart.messages = {
	fill_inputs: 'Все поля должны быть заполнены.'	
};

cart.init = function(){
	
	var that = this, 
		config = that.config,
		$input = $(config.input),
		$submit = $(config.submit),
		$types_section = $('li', $(config.types_section)),
		_total_price = 0;
	
	
	that.calculate();
	that.work_with_blocks();
	
	$input.bind('propertychange keyup input paste change focus', function(){
		that.calculate();
	});
	
	$submit.on('click', function(){
		$this = $(this)
		_href = $this.attr('href');
		_follow_the_link = (_href != '#') ? true : false;
		if(_follow_the_link){
			return;
		}else{
			$this.closest('form').submit();
		}
	})
	
	$types_section.on('click', function(){
		var $this = $(this);
		$types_section.removeClass('selected');
		$this.addClass('selected');
		$('input:radio').attr('checked', false)
		$('input:radio', $this).attr('checked', 'checked').focus();
	})
};

cart.calculate = function(){
	
	var config = this.config,
		$input = $(config.input),
		$summ = $(config.summ),
		$submit = $(config.submit),
		$types_section = $('li', $(config.types_section)),
		_total_price = 0,
		_price = 0,
		_type = '';
		
	_total_price = 0;
	
	$input.each(function(i){
		var $this = $(this),
			_val = $this.val(),
			_price = $.data($this, 'price');
			
		_type = $this.hasClass(config.deliver_class) ? 'deliver' : 'price';
		
		if(_type == 'price'){
			if(_val >=0) _price = _val * _price;
			_total_price += _price;
			$summ.html(_total_price);
		}else{
			var _checked = $this.is(':checked');
			if(_checked){
				var _deliver_price = $.data($this, 'price');
				$('.total '+config.summ).html(_total_price+_deliver_price)	
			}
		}
	});
}

cart.work_with_blocks = function(){
	var config = this.config,
		$block = $(config.item_block),
		_messages = this.messages;
	
	$('select').data('selectik').disableCS();
	
	$block.on('disabled.set', function(){
		var $this = $(this);
		$this.addClass('disabled');
		$('input, select', $this).attr('disabled', true);
		$('select').data('selectik').disableCS();
	});
	
	$block.on('disabled.remove', function(){
		var $this = $(this)
		$this.removeClass('disabled');
		$('input, select', $this).attr('disabled', false);
		$('select').data('selectik').enableCS();
	});
				
	$block.each(function(){
		
		var $block = $(this),
			$input = $('input', $block).is(':radio') ? $('input', $block) : $('input:last', $block),
			$message_block = $(config.error_block, $block);
		
	
		var validate = function(){
			var $inputs = $('input[required]', $block),
				_valid_block = true;
				
			$inputs.each(function(){
				var _val = $(this).val();
				if(_val == 0 || _val == ''){
					$(this).addClass('error');
					_valid_block = false;
					$message_block.text(_messages.fill_inputs).addClass('active');
					return false
				}else{
					$message_block.removeClass('active');
				}
			});
			
			return _valid_block;
		};
		
		$('input', $block).on('focus change keyup', function(){
			var _valid_block = validate();
			if(_valid_block) $input.trigger('change.lastInput');
		});
		
		$input.on('focus.lastInput change.lastInput keyup.lastInput', function(){
			var $this = $(this);
				_disabled = $block.hasClass('disabled'),
				_value = $this.val().length;
			
			if(!_disabled){
				validate($block);
				var _valid = validate();
				if(_value > 0 && _valid){
					var $next_block = $block.nextUntil(':not(.item__block)'),
						_next_block_hidden = $next_block.hasClass('hidden'),
						_next_block_pickup = $next_block.hasClass('pickup');
					
					if(!_next_block_hidden && !_next_block_pickup){

					}else{
						$next_block = $next_block.next().next();
						$next_block.nextUntil(':not(.pickup)').trigger('disabled.remove');
						if(_next_block_pickup) {
							$next_block.next().trigger('disabled.remove');
						}
					}
					$next_block.trigger('disabled.remove');
				};
				
			}
		});
		
	});
	
	
	$('input', $block).on('focus.removeError change.removeError keyup.removeError', function(){
		_val = $(this).val().length;
		if(_val > 0) $(this).removeClass('error');
	})
	
	$('.pickup__checkbox').on('click', function(){
		var $this = $(this);
			$block = $this.closest(config.item_block),
			_disabled = $block.hasClass('disabled');
			
		if(!_disabled){	
			$('.address').toggleClass('hidden');
			$this.toggleClass('checked');
			$block.toggleClass('active');
			$next_block = $block.nextUntil('.not(.item__block)');
			_next_block_disabled = $next_block.hasClass('disabled');
			if(!_next_block_disabled){
				$next_block.trigger('disabled.set');
			}else{
				$next_block.trigger('disabled.remove');
			}
		}
		
	})
}
