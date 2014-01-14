module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');//afaics, this loads a component which uglifies, iow combines a bunch of js files into one, whilst minifying
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
				'_/js/_bootstrap.js':['_/components/js/jquery.js','_/components/js/affix.js','_/components/js/transition.js','_/components/js/tooltip.js','_components/js/alert.js','_/components/js/button.js','_/components/js/carousel.js','_/components/js/collapse.js','_/components/js/dropdown.js','_/components/js/modal.js','_/components/js/popover.js','_/components/js/scrollspy.js','_/components/js/tab.js']
				}//files
			}//my_target
		}//uglify
	})//initConfig
}//exports