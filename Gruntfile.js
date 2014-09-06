module.exports = function (grunt) {

    var paths = {
        assets: './frontsrc/',
        public: './public/files/',
        test: './frontsrc/tests/',
        vendors: './public/vendors/'
    };

    function getSassConfig(target) {
        var conf = {
            options: {
                loadPath: paths.vendors,
                spawn: false
            },
            files: [{
                expand: true,
                cwd: 'frontsrc/sass',
                src: ['*.sass'],
                dest: paths.public + 'css',
                ext: '.css'
            }]
        };

        if (target === 'development') {
            conf.options.style = 'expanded';
            conf.options.sourcemap = true;
        } else if (target === 'production') {
            conf.files[0].ext = '.minified.css';
            conf.options.loadPath = paths.vendors;
            conf.options.style = 'compressed';
        } else if (target === 'layouts') {
            conf.files[0].cwd = 'frontsrc/sass/other-layouts';
            conf.files[0].dest = paths.public + 'css/layouts';
        }

        return conf;
    }

    var libsDeps = [
        paths.vendors + 'jquery/dist/jquery.min.js', // jquery should be the first
        paths.vendors + 'angular/angular.min.js',
        paths.vendors + 'modernizr/modernizr.js',
        paths.vendors + 'jcarousel/dist/jquery.jcarousel.js',
        paths.vendors + 'underscore/underscore.js',
        paths.vendors + 'fotorama/fotorama.js'
    ];

    var app = [paths.assets + 'js/*.js'];
    var unitCoffee = [paths.test+'unit/specs/*.coffee', paths.test+'unit/specs/*/**.coffee'];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: {
            options: {
                cascade: true
            },
            development: {
                src: paths.public + 'css/main.css',
                dest: paths.public + 'css/main.css'
            },
            production: {
                src: paths.public + 'css/main.minified.css',
                dest: paths.public + 'css/main.minified.css'
            },
            introLayout: {
                src: paths.public + 'css/layouts/intro.css',
                dest: paths.public + 'css/layouts/intro.css'
            }

        },

        coffee: {
            development: {
                expand: true,
                flatten: false,
                cwd: paths.assets + 'coffee/',
                src: ['*.coffee', '*/*.coffee'],
                dest: paths.assets + 'js/',
                ext: '.js',
                options: {
                    bare: true,
                    sourceMap: true,
                    spawn: false
                }
            },
            unit: {
                options: {
                    bare: true,
                    spawn: false
                },
                files: {
                    './frontsrc/tests/unit/unit.spec.js': unitCoffee
                }
            }
        },

        concat: {
            dist: {
                src: [].concat(libsDeps, app),
                dest: paths.public + 'j/build.js'
            }
        },

        csso: {
            compress: {
                options: {
                    report: 'gzip',
                    spawn: false
                },
                files: {
                    './public/files/css/main.minified.css': [ paths.public + 'css/main.minified.css'],
                    './public/files/css/layouts/intro.css': [ paths.public + 'css/layouts/intro.css']
                }
            }
        },

        sass: {
            development: getSassConfig('development'),
            production: getSassConfig('production'),
            production: getSassConfig('layouts')
        },

        watch: {
            coffee: {
                files: [paths.assets + 'coffee/*.coffee', paths.assets + 'coffee/*/*.coffee'],
                tasks: ['coffee:development', 'concat']
            },

            gruntFile: {
                files: 'Gruntfile.js',
                tasks: ['default', 'sass:development']
            },

            sass: {
                files: [paths.assets + 'sass/*.sass', paths.assets + 'sass/*/*.sass'],
                tasks: ['sass', 'autoprefixer', 'csso']
            },

            unitCoffe: {
                files: unitCoffee,
                tasks: ['coffee:unit']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['sass:production']);
};