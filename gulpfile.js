var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('css_concat', function() {
  return gulp.src('./css/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css/'));
});


gulp.task('default', ['sass'])
