var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postcss_simple_vars = require('postcss-simple-vars'),
    postcss_nested = require('postcss-nested'),
    postcss_import = require('postcss-import'),
    postcss_mixins = require('postcss-mixins');


gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/**/*.css')
        .pipe(postcss([postcss_import, postcss_mixins, postcss_simple_vars, postcss_nested, autoprefixer]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});