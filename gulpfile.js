var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');

gulp.task('css', function() {
    gulp.src('./fullpage.css')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./dist'))
        .pipe(minifyCss({
            compatibility: 'ie8',
            advanced: false,
            keepSpecialComments: '1'
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
    gulp.src('./fullpage.js')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./dist'))
        .pipe(uglify({
            output: {
                comments: 'some'
            }
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('scrolloverflow', function() {
    gulp.src('./vendors/scrolloverflow.js')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./vendors'))
        .pipe(uglify({
            output: {
                comments: 'some'
            }
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./vendors'));
});

//private file
gulp.task('extensions', function() {
    gulp.src('./fullpage.extensions.js')
        .pipe(uglify({
            output: {
                comments: 'some'
            }
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['css', 'js']);