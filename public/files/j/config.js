requirejs.config({
	enforceDefine: true,
	paths: {
		jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min',
		carousel: '/j/libs/carousel',
		tmpl: '/j/libs/tmpl',
		fotorama: '/j/libs/fotorama',
		customSelect: '/j/libs/customSelect',
		mouseWheel: '/j/libs/mousewheel',
		ui: '/j/libs/ui',
		datePickerRu: '/j/libs/datepicker-ru',
		scroll: '/j/libs/scroll'
	}
});

requirejs(['jquery'], function($){ }, function(err){
	var failedId = err.requireModules && err.requireModules[0];
 
	if(failedId === 'jquery'){
		requirejs.undef(failedId);

		requirejs.config({
            paths: {
                jquery: '/j/libs/jquery'
            }
        });

		require(['jquery'], function () {});
	}
})