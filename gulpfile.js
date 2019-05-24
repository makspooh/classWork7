var gulp        = require('gulp'),
    scss        = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('scss', () => {
    return gulp.src('app/sass/style.scss')
        .pipe(scss())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', () => {
    gulp.watch('app/sass/style.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('scss', 'browser-sync', 'watch'));