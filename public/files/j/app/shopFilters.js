define(['jquery', 'l/tmpl', 'l/ui'], function(){

	var config = {
		section: '.fiters__section',
		price_filter: '.price__filter',
		new_filter: '.new__filter',
		min_price: '.min__price span',
		max_price: '.max__price span',
		scroll_helper: '.scroll__helper',
		loading: false
	};

	var eles = {
		section:  $(config.section),
		min_price: $(config.min_price),
		max_price: $(config.max_price)
	};

	var slider_config = {
		min: ~~eles.min_price.text(),
		max: ~~eles.max_price.text()
	};

	var templates = {
		items: '<li {{if typeof sale != "undefined" && sale.sale_active}}class="sale"{{/if}}>'+
				'<a href="${link}"><span class="img__section">'+
						'<img src="${preview_image}" alt="${brand_name} ${name}" title="${brand_name} ${name}" />'+
						'{{if typeof sale != "undefined" && $item.sale_active( sale.sale_active, sale.sale_start_stamp, sale.sale_end_stamp) }}'+
							'<span class="ico__sale"></span>'+
						'{{/if}}'+
						'<span class="controls active preview__ico"></span>'+
						'</span>'+
					'<span class="brand">${brand_name}</span>'+
					'<span class="item__caption">${name}</span>'+
					'<span class="price">'+
						'{{if typeof sale != "undefined"  && $item.sale_active( sale.sale_active, sale.sale_start_stamp, sale.sale_end_stamp) }}'+
							'<s>${price}</s> ${$item.dicount(price, sale.sale_value )}'+
						'{{else}}'+
							'${price}'+
						'{{/if}}'+
					'</span>'+
				'</a>'+
				'<div class="shop__information__section right">'+
					'<div class="helper">'+
						'<div class="description__section row">${descr}</div>'+
						'<dl class="clearfloat row">'+
							'<dt>Бренд:</dt>'+
							'<dd>${brand_name}</dd>'+
						'</dl>'+
						'{{if size}}'+
							'<dl class="clearfloat row">'+
								'<dt>Размер:</dt>'+
								'<dd>'+
									'${size}'+
								'</dd>'+
							'</dl>'+
						'{{/if}}'+
						'{{if consist}}'+
							'<dl class="clearfloat row">'+
								'<dt>Размер:</dt>'+
								'<dd>'+
									'${consist}'+
								'</dd>'+
							'</dl>'+
						'{{/if}}'+
						'<dl class="clearfloat row">'+
							'<dt>Цена:</dt>'+
							'<dd>'+
								'<span class="price">'+
									'{{if typeof sale != "undefined" && sale.sale_active}}'+
										'<s>${price}</s>'+
									'{{else}}'+
										'${price}'+
									'{{/if}}'+
								'</span>'+
							'</dd>'+
						'</dl>'+
						'{{if tags}}'+
							'<dl class="clearfloat row tags">'+
								'<dt>Таги:</dt>'+
								'<dd>'+
									'{{each tags}}'+
										'<a href="/tag/${$value}" >${$value}</a>&nbsp;'+
									'{{/each}}'+
								'</dd>'+
							'</dl>'+
						'{{/if}}'+
				'</div>'+
			'</div>'+
		'</li>',
		scroll_helper: '<li class="'+config.scroll_helper.replace('.','')+'" data-href="${href}" data-next="${next}"></li>'
	};


	var filter = function(args){
		var _type = args.type,
			_url = '';

		if(typeof args.params === 'string'){ // если пришел урл, то все хорошо и _url = args.params
			_url = args.params;
		}else if(typeof args.params === 'object') {  // если значение от слайдера - билдим урл
			var _values = args.params;
			_url = '?price_from='+_values[0]+'&amp;price_to='+_values[1];
		}

		$.ajax({
			url: _url,
			type: 'GET',
			dataType: 'html',
			success: function(data) {
				args.data = $.parseJSON(data);
				draw_list(args);
			}
		});
	};

	var draw_list = function(args){

		var $section = $('.list__section'),
			$items_tpl = $.tmpl(templates.items, args.data.items, {
				sale_active: function(active, start, end){
					var d = Math.floor( new Date().getTime() / 1000 );
					if( active && start <= d && end >= d ) return true;
					return false;
				},
				dicount: function( price, sale ){
					var price;
					if(sale.indexOf('%') !== -1){
						price -= (price * parseInt(sale))/100;
					}else{
						price = sale;
					}
					return price;
				}
			}),
			$helper_tpl = $.tmpl(templates.scroll_helper, {
				'href': args.params,
				'next': 16
			});

		if(args.ele){ // если был передан эелемент по которомы кликнули - чистим секцию

			eles.section.find('a').removeClass('current');
			args.ele.addClass('current');
			$section.empty();
			$items_tpl.appendTo($section);
			$helper_tpl.appendTo($section);

		}else{

			$items_tpl.insertBefore($section.find(config.scroll_helper));

		}


		set_equal_height();


	};

	$(config.section).on('click', 'a', function(e){

		e.preventDefault();
		var $this = $(this),
			_url = $this.attr('href'),
			_current = $this.hasClass('current'),
			$scroll = $(config.scroll_helper);

		if(!_current){ // если сортировка еще не выбрана
			filter({
				ele: $this,
				params: _url
			});
		}

	});

	$('.price__slider').find('.slider').slider({
		range: true,
		min: slider_config.min,
		max: slider_config.max,
		values: [slider_config.min, slider_config.max],
		slide: function(e, ui){
			eles.min_price.html(ui.values[0]);
			eles.max_price.html(ui.values[1]);
		},
		stop: function(e, ui){
			filter({
				params: ui.values
			});
		}
	});

	return draw_list;
});