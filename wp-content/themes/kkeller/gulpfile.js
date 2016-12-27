// Requires 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var neat = require("bourbon-neat").includePaths;

// Tasks
gulp.task('sass', function(){
  return gulp.src('sass/**/*.scss')
    .pipe(sass({
        includePaths: neat
      })) // Using gulp-sass
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Gulp watch
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('sass/**/*.scss', ['sass']);
  //gulp.watch('js/**/*.js', ['scripts']);
  // Other watchers
});

gulp.task('browserSync', function() {
  browserSync.init({
    files: '/*.js, /*.css, /*.php',
    port: 8082
  })
});

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('main.min.js'))
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('main.min.js', uglify()))
    .pipe(gulp.dest('./js/'));
});

gulp.task('nano', function() {
    return gulp.src('css/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('css'));
});

gulp.task('images', function(){
  return gulp.src('../../uploads/**/*.+(png|jpg|gif)')
  .pipe(imagemin())
  .pipe(gulp.dest('../../uploads/**/*'))
});