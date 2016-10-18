// grab our gulp packages
const colors = require('colors')
const gulp = require('gulp')
const gutil = require('gulp-util')
const standard = require('gulp-standard')
const sass = require('gulp-sass')

// define the default task with log message
gulp.task('default', ['standard', 'build-sass', 'watch'], function () {
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

// sass to css
gulp.task('build-sass', function () {
	gutil.log('[info]'.yellow, 'Build Sass to CSS...')
	return gulp.src('src/styles/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('public/assets/styles'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
	gutil.log('[info]'.green, 'Watching some files...')
	gulp.watch('src/scripts/*.js', ['standard'])
	gulp.watch('src/styles/*.scss', ['build-sass']);
})
