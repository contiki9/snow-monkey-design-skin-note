var path = require('path');
var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('./package.json'));
var assetsPath = path.resolve(pkg.path.assetsDir);
var distPath = path.resolve(pkg.path.distDir);

var gulp = require('gulp');

// sass compiler
var sass = require('gulp-sass');

// add vender prifix
var autoprefixer = require('gulp-autoprefixer');

// error handling
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
    gulp.src(path.join(assetsPath, 'css/*.scss'))
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.join(distPath, '')));
});

gulp.task('default', function() {
    gulp.watch(path.join(assetsPath, 'css/**/*.scss'),['sass']);
});