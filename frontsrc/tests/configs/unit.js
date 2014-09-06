module.exports = function(config) {
    var paths = {
        'vendors': './public/vendors/'
    };

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../../..',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            paths.vendors + 'angular/angular.js',
            paths.vendors + 'angular-mocks/angular-mocks.js',
            paths.vendors + 'jquery/dist/jquery.js',
            paths.vendors + 'underscore/underscore.js',
            paths.vendors + 'jasmine-jquery/lib/*.js',
            {
                pattern: 'frontsrc/test/unit/mocks/*',
                watched: true,
                served: true,
                included: false
            },
            'frontsrc/js/*.js',
            'frontsrc/tests/unit/unit.spec.js'
        ],

        // list of files to exclude
        exclude: [
            'frontsrc/js/*.js.map'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: [
            'progress',
            'coverage',
            'osx'
        ],

        preprocessors: {
            'frontsrc/js/*.js': 'coverage',
            'frontsrc/js/*/*.js': 'coverage'
        },

        coverageReporter: {
            type : 'html',
            dir : 'frontsrc/tests/unit/coverage/'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        autoWatchBatchDelay: 500,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
