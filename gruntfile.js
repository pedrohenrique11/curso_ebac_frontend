module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          files: {
            'dist/styles.css': 'src/styles.less'
          }
        }
      },
      uglify: {
        options: {
          mangle: true,
          compress: true
        },
        meu_projeto: {
          files: {
            'dist/js/main.js': ['src/js/main.js']
          }
        }
      }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['less', 'uglify']);
  };