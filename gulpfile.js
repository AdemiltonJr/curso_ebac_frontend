const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavascript() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

function compilaSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
}

exports.default = function() {
    gulp.watch('./src/styles/*scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavascript));
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}