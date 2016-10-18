// grab our gulp packages
const gulp  = require('gulp'),
    gutil = require('gulp-util')
    colors = require('colors')

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('[info]'.blue, 'Gulp is running...!')
})

gulp.task('copy-html', function() {
  // copy any html files in source/ to public/
  gulp.src('source/*.html').pipe(gulp.dest('public'));
});
