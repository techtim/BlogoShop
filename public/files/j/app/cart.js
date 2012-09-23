define(['jquery'], function($){
	var cart = (function($){

		this.config = {
			input: '.count, .deliver__type',
			summ: '.summ__section',
			submit: '.submit__form',
			types_section: '.types__list',
			deliver_section: '.deliver__section',
			deliver_class: 'deliver__type',
			pay_type: '.pay__type',
			item_block: '.item__block',
			error_block: '.message'
		};

		this.messages = {
			fill_inputs: 'Все поля должны быть заполнены.'	
		};

		this.init = function(){
		
			var that = this, 
				config = that.config,
				$input = $(config.input),
				$submit = $(config.submit),
				$deliver_section = $(config.deliver_section),
				$types_section = $('li', $(config.types_section)),
				$pay_type = $(config.pay_type),
				_total_price = 0;
			
			
			that.calculate();
			that.work_with_blocks();
			
			$input.not('[name="pay_type"]').on('propertychange keyup input paste change focus', function(){
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
				var $this = $(this)
					$parent = $this.closest('.item__block'),
					_disabled = $parent.hasClass('disabled');

				if(!_disabled){
					$parent.find($types_section).removeClass('selected');
					$('input:radio', $parent).attr('checked', false);

					$this.addClass('selected');
					$('input:radio', $this).attr('checked', true).focus();
				}
			});

			$('input:radio', $deliver_section).on('focus.payType change.payType', function(){
				var $this = $(this),
					_type = $this.attr('value') === 'courier' ? 'cash' : 'nalog_payment';

				$pay_type.find('li').hide();
				$pay_type
					.find('[data-type="'+_type+'"]').css('display','block')
					.find('input').attr('checked', true);
			});


			$('.checkout__button').click(function(e){
				e.preventDefault();
				$(this).hide();
				$('.finish__cart').addClass('hidden');
				$('.submit___section, .finish__cart').removeClass('hidden');
			});
		};


		this.calculate = function(){
			
			var config = this.config,
				$input = $(config.input),
				$summ = $(config.summ),
				$submit = $(config.submit),
				$types_section = $('li', $(config.types_section)),
				_total_price = 0,
				_price = 0,
				_type = '';
			
			$input.not('[name="pay_type"]').not(':disabled').each(function(){
				var $this = $(this),
					_val = $this.val(),
					_price = $this.data('price'),
					_type = $this.hasClass(config.deliver_class) ? 'deliver' : 'price';

				if(_type == 'price'){
					if(_val >=0) _price = _val * _price;
					_total_price += _price;
					$summ.html(_total_price);
				}else{
					var _checked = $this.is(':checked');
					if(_checked){
						var _deliver_price = $this.data('price');
						$('.total '+config.summ).html(_total_price+_deliver_price)	
					}
				}
			});
		};

		this.work_with_blocks = function(){
			var config = this.config,
				$block = $(config.item_block),
				_messages = this.messages;
			
			$block.on('disabled.set', function(){
				var $this = $(this);
				$this.addClass('disabled');
				$('input, select', $this).attr('disabled', true);
			});
			
			$block.on('disabled.remove', function(){
				var $this = $(this)
				$this.removeClass('disabled');
				$('input, select', $this).attr('disabled', false);
				$('.finish__cart').removeClass('hidden disabled').attr('disabled', false);
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
				var _val = $(this).val().length;
				if(_val > 0) $(this).removeClass('error');
			})
			
			$('.pickup__checkbox').on('click', function(){
				var $this = $(this);
					$block = $this.closest(config.item_block),
					$next_block = $block.nextUntil('.not(.item__block)'),
					$next_block_inputs = $next_block.find('input'),
					_map_exist = $block.find('.map').children().length,
					$prev_block_input = $block.prev().find('input');
				
				if($prev_block_input.is(':disabled')){
					$prev_block_input.attr('disabled', false);
				}else{
					$prev_block_input.attr('disabled', true);
				}

				if($next_block_inputs.is(':disabled')){
					$next_block_inputs.attr('disabled', false);
				}else{
					$next_block_inputs.attr('disabled', true);
				}

				$('.address').toggleClass('hidden');
				$this.toggleClass('checked');
				$block.toggleClass('active');
				$next_block.toggleClass('hidden');
			}).one('click', function(){

				var map = new ymaps.Map("ymaps-map-id_134607452184377852671", {center: [37.64300400000002, 55.75657763506392], zoom: 16, type: "yandex#map"});
				map.controls.add("zoomControl").add("mapTools").add(new ymaps.control.TypeSelector(["yandex#map", "yandex#satellite", "yandex#hybrid", "yandex#publicMap"]));
				map.geoObjects.add(new ymaps.Placemark([37.643004, 55.7559], {balloonContent: ""}, {preset: "twirl#lightblueDotIcon"}));
			})
		};

		this.init();
	})(jQuery);

});