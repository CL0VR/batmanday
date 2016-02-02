var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('sass', function () {
<<<<<<< HEAD
  gulp.src('./scss/**/*.scss')
=======
  gulp.src('./sass/**/*.scss')
>>>>>>> b5a630ec6db845d473c380fd7c9eefd76fa1e422
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

<<<<<<< HEAD
gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('default', ['sass', 'connect'], function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
=======
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
>>>>>>> b5a630ec6db845d473c380fd7c9eefd76fa1e422
});
