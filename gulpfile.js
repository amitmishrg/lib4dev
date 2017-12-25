var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');

var config = {
    bootstrapDir: './node_modules/bootstrap-sass',
    publicDir: './public',
};

gulp.task('sass', function() {
    return gulp.src('./app/sass/main.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(csso())
    .pipe(gulp.dest(config.publicDir + '/css/'));
});

gulp.task('watch', function() {
	gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
