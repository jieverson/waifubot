module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      files: ['gruntfile.js', '*.js', 'tests/*.js']
    },
    nodeunit: {
      files: ['tests/*_test.js']
    }
  });

  // Load the plugin that provides the "jshint task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'nodeunit']);
};