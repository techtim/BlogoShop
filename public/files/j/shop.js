var shop_item = {};
shop_item.config = {
	tmpl: '#subitem',
	li_item: '.sizes__section li',
	block_to_append: '#params__helper',
	cart_button: '.submit__form',
	select: '#size__select',
	custom_select: '.custom-select', 
	sub_item_to_draw: 0,
	pin_button: '.pin-it-button',
	desc_section: '.description__section',
	href: ''
};

shop_item.init = function(data) {

	var that = this,
		config = that.config,
		$size_select = $(config.select);
	config.href = $(config.cart_button).attr('href');	
	
	that.draw_subitem(config.sub_item_to_draw) //draw first subitem
	
	$(config.li_item).on('click', function() {
		var $this = $(this),
			_value = $this.index();
			
		$(config.li_item).removeClass('current');
		$this.addClass('current');
		that.draw_subitem(_value);
	});	
	
	/*$(config.cart_button).on('click', function(e){
		e.preventDefault();
		var $this = $(this),
			_enabled = $this.data('enabled');
			
		if(_enabled){
			_href = $this.attr('href');
			_item = $this.data('item_selected');
			$this.attr('href', _href+'/'+_item + '/buy');
			window.location = window.location.href + '/' + _item + '/buy';
		}
	});*/
	
	$(config.block_to_append).on('click', '.color__item', function(){
		var $this = $(this);
		$('.color li').removeClass('selected').find('input').attr('checked', false);
		$this.toggleClass('selected').find('input').attr('checked', true);
	});
	that.work_with_pin();

};

shop_item.work_with_pin = function(){
	var that = this,
		config = that.config,
		$pin_button = $(config.pin_button),
		_pin_url = $pin_button.attr('href'),
		_page_url = encodeURIComponent(window.location.href),
		_desc = encodeURIComponent($(config.desc_section).text()),
		_img_url = encodeURIComponent(window.location.origin + $(shop_gallery.config.preview_section).find('img').first().attr('src')),
		_result_url = _pin_url + '?url='+ _page_url + '&amp;media=' + _img_url + '&amp;description='+ _desc;

	$pin_button.attr('href', _result_url);
	
};

shop_item.draw_subitem = function(_value){
	var that = this,
		subitems = that.subitems,
		config = that.config
		_href = config.href,
		_tmp = subitems[_value],
		_tmp_array = [],
		_qty = _tmp.qty;

	if(_qty != 0){ //если 0 товаров то _value + 1
		for(key in _tmp){

			if(_tmp.hasOwnProperty(key) && _tmp[key] != ''){
				if(key == 'size' || key == 'qty' || key == 'meterial' || key == 'articol') continue;
				
				_tmp_array.push({
					name: key,
					value: _tmp[key]
				});
			}
		};
		
		$(config.cart_button).attr('href', _href + '/' + _value);
		$(config.block_to_append).html('');
		$(config.tmpl)
			.tmpl(_tmp_array)
			.appendTo(config.block_to_append);
	}else{
		shop_item.draw_subitem(_value+1);
	}
};

shop_item.get_alias = function(name) {
	return typeof this.alias[name] == 'undefined' ? '' : this.alias[name];
};

var shop_gallery = {}
shop_gallery.config = {
	section: '#shop__gallery',
	preview_section: '.previews__section' ,
	full_section: '.full__size__section',
	popup: '.popup__full__img'	
};

shop_gallery.init = function(){
	
	var that = this,
		config = that.config,
		$section = $(config.section),
		$preview_section = $(config.preview_section),
		$full_section = $(config.full_section),
		$first_item = $('a:first', $preview_section),
		_href = $first_item.attr('href'),
		$full_size = $('a', $full_section),
		$popup = $(config.popup, $section),
		w1,w2,w4,h1,h2,h4,rw,rh;
	
	$popup.find('img').attr('src', _href);
	
	$full_size
		.attr('href', _href)
		.find('img')
		.attr('src', _href)
		.load(function(){
			$(this).addClass('loaded');
		})
		.on('mouseover', function(e){
			var $this = $(this);
			w1 = $('img', $full_section).width();
			h1 = $('img', $full_section).height();
			w2 = $popup.width();
			h2 = $popup.height();
			w3 = $popup.find('img').width();
			h3 = $popup.find('img').height();	
			w4 = w3 - w2;
			h4 = h3 - h2;	
			rw = w4/w1,
			rh = h4/h1;
			
			$popup.addClass('visible');
			image_move(e);
		})
		.on('mousemove', function(e){
			image_move(e)
		})
		.on('mouseout', function(){
			$popup.removeClass('visible');
			//$big_img.attr('src','')
		})
		.on('click', function(e){
			e.preventDefault();
		});
	
	
	var image_move = function(e){
		
		var p = $full_section.offset()
			pl = e.pageX - p.left,
			pt = e.pageY - p.top,
			xl = pl*rw,
			xt = pt*rh;

		xl = (xl>w4) ? w4 : xl,
		xt = (xt>h4) ? h4 : xt;
		$popup.find('img').css({'left':xl*(-1),'top':xt*(-1)})
	}
	
	
	$('a:first', $preview_section).addClass('current');
	$preview_section.on('click', 'a', function(e) {
		e.preventDefault();
		var $this = $(this),
			_href = $this.attr('href');
			
		$('a', $preview_section).removeClass('current');
		$this.addClass('current');
		$full_size.attr('href', _href);
		$('img', $full_section).attr('src', _href);
		$popup.find('img').attr('src', _href);
	});
	
};

