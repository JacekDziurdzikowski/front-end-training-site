var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
postcss_simple_vars = require('postcss-simple-vars'),
postcss_nested = require('postcss-nested'),
postcss_import = require('postcss-import');

gulp.task('default', function () {
    console.log('Yeah! You created first task')
});

gulp.task('html', function(){
    console.log('imagine something specific is happening with your html.')
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/**/*.css')
        .pipe(postcss([postcss_import, postcss_simple_vars, autoprefixer, postcss_nested]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
    watch('./app/index.html', function () {
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    })
});