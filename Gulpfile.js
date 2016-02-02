var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

gulp.task('server', function () {
  connect.server({
    root: '.',
    host: 'localhost',
    port: 8000,
    livereload: {
      port: 35929
    }
  });
});

gulp.task('default', ['sass', 'server'], function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
