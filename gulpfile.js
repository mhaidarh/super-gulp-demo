// grab our gulp packages
const colors = require('colors')
const gulp = require('gulp')
const gutil = require('gulp-util')
const standard = require('gulp-standard')
const concat = require('gulp-concat')
const uglify = require('gulp-uglifyjs')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()

/*
  ------------------------------------------------------------------------------
  Default Area
  ------------------------------------------------------------------------------
*/

// define the default task with log message
gulp.task('default', ['copy-html', 'standard-js', 'build-js', 'build-sass', 'watch'], function () {
  return gutil.log('[info]'.blue, 'Gulp is running...!')
})

// copy any html files in  to _dist/
gulp.task('copy-html', function () {
  gutil.log('[process]'.yellow, 'Copy HTML to _dist/...')
  gulp.src(['*.html', '!*.test.html']).pipe(gulp.dest('_dist'))
})

// configure the standard.js task
gulp.task('standard-js', function () {
  gutil.log('[process]'.yellow, 'Check standard...')

  // include program files, exclude test files
  return gulp.src(["scripts/*.js", "!scripts/*.test.js"])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
})

// concatenate javascript files
gulp.task('build-js', function () {
  gutil.log('[process]'.yellow, 'Concatenate scripts...')

  // include program files, exclude test files
  return gulp.src(["scripts/*.js", "!scripts/*.test.js"])
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    // only uglify if gulp is ran with '--type production'
    // .pipe(uglify())
    // .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('_dist/scripts'))
})

// sass to css
gulp.task('build-sass', function () {
  gutil.log('[info]'.yellow, 'Compile Sass to CSS...')
  return gulp.src('styles/*.sass')
    .pipe(sourcemaps.init()) // Process the original sources
    .pipe(concat('bundle.sass'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('_dist/styles'))
    .pipe(browserSync.stream())
})

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('watch-js', ['standard-js', 'build-js'], function (done) {
  browserSync.reload()
  done()
})

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
  gutil.log('[info]'.blue, 'Serving and watching some files...')
  browserSync.init({
    server: {
      baseDir: "_dist"
    }
  })
  gulp.watch('*.html', ['copy-html']).on('change', browserSync.reload)
  gulp.watch('scripts/*.js', ['watch-js'])
  gulp.watch('styles/*.sass', ['build-sass'])
})

/*
  ------------------------------------------------------------------------------
  Test Area
  ------------------------------------------------------------------------------
*/

// define the test task with log message
gulp.task('test', ['standard-js', 'watch-test'], function () {
  return gutil.log('[info]'.blue, 'Gulp is testing...!')
})

// configure which files to watch and what tasks to use on file changes
gulp.task('watch-test', function () {
  gutil.log('[info]'.blue, 'Serving and watching some test files...')
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.test.html"
    }
  })
  gulp.watch('*.test.html').on('change', browserSync.reload)
  gulp.watch('scripts/*.test.js').on('change', browserSync.reload)
})

/*
  ------------------------------------------------------------------------------
  Build Area
  ------------------------------------------------------------------------------
*/

// define the build task with log message
gulp.task('build', ['copy-html', 'build-sass'], function () {
  return gutil.log('[info]'.blue, 'Gulp is building...!')
})
