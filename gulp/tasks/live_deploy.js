var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('live_deploy', ['deploy'], function() {
  console.log(config)
  gulp.watch(config.src, ['deploy']);
});
