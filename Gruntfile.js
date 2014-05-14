module.exports = function (grunt) {

    var paths = {
        public: './public/files/',
        src: './frontsrc/',
        vendors: './public/vendors/'
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

        sass: {
            development: getSassConfig('development'),
            production: getSassConfig('production')
        },

        watch: {
            gruntFile: {
                files: 'Gruntfile.js',
                tasks: ['default', 'sass:development']
            },
            sass: {
                files: [paths.src + 'sass/*.sass', paths.src + 'sass/*/*.sass'],
                tasks: ['sass', 'autoprefixer']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['sass:production']);
};