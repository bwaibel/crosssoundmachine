var gulp = require('gulp');
var awspublish = require('gulp-awspublish');

gulp.task('deploy', ['build'], function() {

  // define custom headers
  var headers = {
   'Cache-Control': 'max-age=315360000, no-transform, public'
   // ...
  };

  return gulp.src('dist/**/*.*')
    .pipe(awspublish.gzip({ ext: '' }))
    .pipe(publisher.publish(headers))
    .pipe(publisher.sync())
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());

});
