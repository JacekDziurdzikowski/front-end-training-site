var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browser_sync = require('browser-sync').create();


gulp.task('watch', function () {
    browser_sync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function () {
        gulp.src('./app/index.html')
            .pipe(browser_sync.stream());
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('injectCss');
    })
});


gulp.task('injectCss', ['styles'], function(){
    gulp.src('./app/temp/styles/styles.css')
        .pipe(browser_sync.stream());
});