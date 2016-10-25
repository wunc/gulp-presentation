var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-uglify');

gulp.task('copy', function() {
  gulp.src('node_modules/jquery/dist/jquery.min.js')
      .pipe(gulp.dest('js'));
});

gulp.task('concatenate', function() {
  gulp.src([
        'lib/js/head.min.js',
        'js/reveal.js',
        'js/jquery.min.js',
        'js/custom.js'
      ])
      .pipe(concat('all.js'))
      .pipe(gulp.dest('js'));
});

gulp.task('minify', function() {
  gulp.src('js/all.js')
      .pipe(minify())
      .pipe(gulp.dest('js'));
});

gulp.task('concatify', function() {
  gulp.src([
        'lib/js/head.min.js',
        'js/reveal.js',
        'js/jquery.min.js',
        'js/custom.js'
      ])
      .pipe(concat('all.js'))
      .pipe(minify())
      .pipe(gulp.dest('js'));
});

gulp.task('concatify2', ['concatenate', 'minify']);