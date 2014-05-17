module.exports = function (grunt) {

    var paths = {
        public: './public/files/',
        assets: './frontsrc/',
        vendors: './public/vendors/',
        test: './frontsrc/tests/'
    };

    function getSassConfig(target) {
        var conf = {
            files: [{
                expand: true,
                cwd: 'frontsrc/sass',
                src: ['*.sass'],
                dest: paths.public + 'css',
                ext: '.css'
            }]
        };
        if ( target === 'development' ) {
            conf.options = {
                loadPath: paths.vendors,
                style: 'expanded',
                sourcemap: true
            };

            return conf;
        } else {
            conf.files[0].ext = '.minified.css';
            conf.options = {
                loadPath: paths.vendors,
                style: 'compressed'
            };
            return conf;
        }
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
    var unitCoffee = [paths.test+'unit/*.coffee', paths.test+'unit/*/**.coffee'];

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
                    sourceMap: true
                }
            },
            unit: {
                options: {
                    bare: true
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

        sass: {
            development: getSassConfig('development'),
            production: getSassConfig('production')
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
                tasks: ['sass', 'autoprefixer']
            },

            unitCoffe: {
                files: unitCoffee,
                tasks: ['coffee:unit']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-ngmin');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['sass:production']);
};