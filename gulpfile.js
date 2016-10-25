var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-uglify');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();

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
      .pipe(gulp.dest('js'))
      .pipe(notify('JS Concatified!'));
});

gulp.task('concatify2', ['concatenate', 'minify']);

gulp.task('watch', function() {
   gulp.watch(['js/**/*.js', '!js/all.js'], ['concatify']); 
});

gulp.task('browsersync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('serve', ['browsersync'], function () {
  gulp.watch(['js/**/*.js', '!js/all.js'], ['concatify']); 
  gulp.watch([
    'js/**/*.js',
    '!js/all.js',
    '**/*.html',
    'css/**/*.css',
    ]).on('change', browserSync.reload);
});