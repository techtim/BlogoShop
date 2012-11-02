({
	baseUrl: '../j',
	mainConfigFile: '../j/config.js',
	name: '../j/config',
	out: '../j/j.js',
	optimize: 'none',
	paths: {
		requireLib: 'require'
	},
	fileExclusionRegExp: /^fileuploader$/,
	include: 'requireLib'
})