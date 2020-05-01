let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let browserSync = require('browser-sync').create();
let autoprefixer = require('gulp-autoprefixer');
let watch = require('gulp-watch');


gulp.task('sassToCSS', function() {
  return gulp.src('app/styles/styles.scss')
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
    browsers: ['last 3 versions'],
    cascade: false
  }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/styles/'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'public'
  });
  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('watchFiles', function() {
  gulp.watch('app/styles/*.scss', gulp.series('sassToCSS'));
});

gulp.task('GetStarted', gulp.parallel('watchFiles', 'serve'));
