var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('default', ['sass', 'connect'], function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
