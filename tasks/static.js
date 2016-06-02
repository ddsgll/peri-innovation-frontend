var gulp    = require('gulp');
var notify  = require('gulp-notify');
var plumber = require('gulp-plumber');

var concat  = require('gulp-concat');
var concss  = require('gulp-concat-css');

var image   = require('gulp-image');
var uglify  = require('gulp-uglify');
var cssnano = require('gulp-cssnano');



gulp.task('makelibs', () => {

	gulp.src(['static/libs/jquery*.js', 'static/libs/TweenMax.min.js', 'static/libs/SplitText.min.js', 'static/libs/*.js'])
		.pipe( plumber() )
		.pipe( concat('libs.js') )
		.pipe( uglify() )
		.pipe( gulp.dest( 'dev/js' ) )
		.pipe( notify({
			title:   "JS LIBS",
			message: "JS libs concatenated successfully"
		}));

	gulp.src('static/libs/*.css')
		.pipe( plumber() )
		.pipe( concss('libs.css') )
		.pipe( cssnano() )
		.pipe( gulp.dest('dev/css') )
		.pipe( notify({
			title:   "CSS LIBS",
			message: "CSS libs concatenated successfully"
		}));

});



gulp.task('static:transfer', () => {

	gulp.src('static/fonts/**/*').pipe( gulp.dest('dev/fonts/') );
	gulp.src('static/fonts/*').pipe( gulp.dest('dev/fonts/') );
	gulp.src('static/img/**/*').pipe( gulp.dest('dev/img/') );

});



gulp.task('static', ['makelibs','static:transfer']);
