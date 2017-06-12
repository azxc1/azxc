var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('browserSync', function() {

    browserSync.init({
        server: {
            baseDir: './'
        }
    })

})

gulp.task("sass", function() {

    return gulp.src("./css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css/"))

    .pipe(browserSync.reload({
        stream: true
    }))
});



gulp.task('watch', ['browserSync', 'sass'], function() {
   
    gulp.watch('./css/*.scss',['sass'])
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./*.js', browserSync.reload);

})


var babel = require('gulp-babel');

gulp.task('minify-js', () =>
	gulp.src('./*.js')
		.pipe(babel({presets: ['babili']}))
		.pipe(gulp.dest('dist'))
);