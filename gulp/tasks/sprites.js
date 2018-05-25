var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    gulpRename = require('gulp-rename'),
    sequence = require('run-sequence'),
    del = require('del');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('beginClean', function(){
   return del(['./app/assets/images/sprites', './app/temp/sprite']);
});

gulp.task('createSprite', function () {
    return gulp.src('./app/assets/images/icons/**/*svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySvg', function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
})

gulp.task('copyCss', function(){
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(gulpRename({
            prefix: '_'
        }))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', function(){
    return del(['./app/temp/sprite']);
});

gulp.task('icons', function () {
    sequence('beginClean', 'createSprite', 'copySvg','copyCss', 'endClean');
})