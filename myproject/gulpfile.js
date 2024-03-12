const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const cleanCSS = require('gulp-clean-css')

gulp.task('sass', function () {
  return gulp
    .src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
})

gulp.task('minify-css', function () {
  return gulp
    .src('public/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css'))
})

gulp.task('default', gulp.series('sass', 'minify-css'))
