// Requires 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

// Tasks
gulp.task('sass', function(){
  return gulp.src('sass/style.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Gulp watch
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('sass/**/*.scss', ['sass']); 
  // Other watchers
});

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: "https://freelancing-kimberlykeller.c9users.io/kkeller/"
  })
});

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('main.min.js'))
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('main.min.js', uglify()))
    .pipe(gulp.dest('./js/'));
});