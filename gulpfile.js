var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function () {
    console.log('Yeah! You created first task')
});

gulp.task('html', function(){
    console.log('imagine something specific is happening with your html.')
});

gulp.task('styles', function(){
    console.log('imagine something specific is happening with your css styles.')
});

gulp.task('watch', function () {
    watch('./app/index.html', function () {
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    })
});