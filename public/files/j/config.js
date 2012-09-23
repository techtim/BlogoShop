requirejs.config({
	enforceDefine: true,
	paths: {
		jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min',
		carousel: './libs/carousel',
		tmpl: './libs/tmpl',
		fotorama: './libs/fotorama',
		customSelect: './libs/customSelect',
		mouseWheel: './libs/mousewheel',
		ui: './libs/ui',
		datePicker: './libs/datepicker-ru'
	}
});

requirejs(['jquery'], function($){ }, function(err){
	var failedId = err.requireModules && err.requireModules[0];
 
	console.log('failed ' + failedId)
	if(failedId === 'jquery'){
		requirejs.undef(failedId);

		requirejs.config({
            paths: {
                jquery: './libs/jquery'
            }
        });

		require(['jquery'], function () {});
	}
})