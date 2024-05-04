const { src, dest, series, watch } = require('gulp');
const less = require('gulp-less');
const cssnano = require('gulp-cssnano');


function styles() {
    return src('./src/*.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(dest('public/dist/styles'))
}

function watchTask() {
    watch(['./src/*.less'], series(styles))
}

exports.default = series(styles, watchTask);

