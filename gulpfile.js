var gulp = require('gulp'),
    gutil = require('gulp-util'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    uncss = require('gulp-uncss'),
    pump = require('pump'),
    minifyCss = require('gulp-minify-css'),
    htmlmin = require('gulp-htmlmin');

gulp.task('favicon', function () {
    gulp.src(['favicon.ico'])
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {

    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulpif('*.html', htmlmin({collapseWhitespace: true})))
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function (cb) {
  pump([
        gulp.src(['vendor/js/angular.min.js', 'vendor/js/angular-media-player.min.js', 'vendor/js/app.js']),
        uglify(),
        concat('scripts.js'),
        gulp.dest('dist/vendor/js')
    ],
    cb
  );
});

gulp.task('css', function () {
    return gulp.src('vendor/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/vendor/css'));
});

gulp.task('default', ['css', 'favicon', 'html', 'js']);
