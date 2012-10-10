({
	baseUrl: '.',
	mainConfigFile: 'config.js',
	name: 'config',
	out: 'j.js',
	optimize: 'none',
	paths: {
		requireLib: 'require'
	},
	modules: [{
		carousel: '/j/libs/carousel',
		tmpl: '/j/libs/tmpl',
		fotorama: '/j/libs/fotorama',
		customSelect: '/j/libs/customSelect',
		mouseWheel: '/j/libs/mousewheel',
		ui: '/j/libs/ui',
		datePickerRu: '/j/libs/datepicker-ru',
		scroll: '/j/libs/scroll'
	}],
	fileExclusionRegExp: /^fileuploader$/,
	include: 'requireLib'
})