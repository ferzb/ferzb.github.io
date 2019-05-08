var gulp = require('gulp');
var gcmq = require('gulp-group-css-media-queries');
var sass = require('gulp-sass');
 
gulp.task('css', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gcmq())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass', function () {
   gulp.watch(["sass/*"],  ['css']);
});

gulp.task('default', ['sass']);