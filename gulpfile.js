// grab our gulp packages
const gulp = require('gulp')
const gutil = require('gulp-util')
const jshint = require('gulp-jshint')
const colors = require('colors')

// define the default task with log message
gulp.task('default', ['watch'], function() {
  return gutil.log('[info]'.blue, 'Gulp is running...!')
})

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('src/scripts/**/*.js', ['jshint']);
});
