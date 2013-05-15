requirejs.config({
	enforceDefine: true,
	// urlArgs: "_=" +  (new Date()).getTime(),
	paths: {

		'jquery': [
			'//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
			'libs/jquery'
		],

		'modernizr': [
			'//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min',
			'libs/modernizr'
		],

		'a': 'app',
		'l': 'libs',

		'mouseWheel': '/j/libs/mousewheel',
		'ui': '/j/libs/ui',
		'datePickerRu': '/j/libs/datepicker-ru'
	},

	shim: {

		'jquery': {
			exports: '$'
		},

		'modernizr': {
			exports: 'Modernizr'
		},

		'l/carousel': {
			deps: ['jquery'],
			exports: '$.jcarousel'
		},

		'l/customSelect': {
			deps: ['jquery'],
			exports: '$.selectik'
		},

		'l/tmpl': {
			deps: ['jquery'],
			exports: '$.tmpl'
		},

		'l/ui': {
			deps: ['jquery'],
			exports: '$.datepicker'
		},

		'fotorama': {
			deps: ['jquery'],
			exports: '$.fotorama'
		},

		'l/customSelect': {
			deps: ['jquery'],
			exports: '$.selectik'
		}
	}
});
