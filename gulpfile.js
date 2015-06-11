var gulp = require('gulp'),
    gutil = require('gulp-util'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    uncss = require('gulp-uncss'),
    minifyCss = require('gulp-minify-css'),
    htmlmin = require('gulp-htmlmin');


gulp.task('copy', function() {
    gulp.src(['favicon.ico', 'data-generator.js', 'package.json'])
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-server-lib', function() {
    gulp.src('lib/*.js')
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('html', function () {
    var assets = useref.assets();

    return gulp.src('index.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulpif('*.html', htmlmin({collapseWhitespace: true})))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', ['html'], function () {
    return gulp.src('dist/vendor/styles.css')
        .pipe(uncss({
            html: ['dist/index.html']
        }))
        .pipe(autoprefixer({ 
            browsers: ['last 2 versions', 'ie 8', 'ie 9'] 
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/vendor/'));
});

gulp.task('default', ['css', 'copy-server-lib', 'copy']);