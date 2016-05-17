module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.config("watch", {
    styles: {
      files: ['**/*.css']
    },
    interface: {
      files: ['**/*.html']
    },
    scripts: {
      files: ['**/*.js']
    },
    options: {
      livereload: true
    },
  
  });
  grunt.registerTask('default', ['watch']);
}

