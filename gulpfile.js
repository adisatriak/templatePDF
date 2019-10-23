'use-strict';

const gulp = require('gulp');
const browsersync = require('browser-sync').create();

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './src',
    },
    port: 3000,
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function watchFiles() {
  gulp.watch('src/*.html', browserSyncReload);
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.default = watch;