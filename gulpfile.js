// grab our gulp packages
const colors = require('colors')
const gulp = require('gulp')
const gutil = require('gulp-util')
const standard = require('gulp-standard')

// define the default task with log message
gulp.task('default', ['standard', 'watch'], function () {
	return gutil.log('[info]'.blue, 'Gulp is running...!')
})

// configure the standard.js task
gulp.task('standard', function () {
	gutil.log('[info]'.yellow, 'Check standard...')
	return gulp.src(['src/scripts/*.js'])
		.pipe(standard())
		.pipe(standard.reporter('default', {
			breakOnError: true,
			quiet: true
		}))
})

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
	gutil.log('[info]'.green, 'Watching some files...')
	gulp.watch('src/scripts/*.js', ['standard'])
})
