var gulp = require('gulp');

gulp.task('watch', () => {

	gulp.watch('source/**/*.styl', ['stylus']);
	gulp.watch('source/**/*.jade', ['jade'  ]);
	gulp.watch('source/**/*.js'  , ['babel' ]);
	gulp.watch('static/**/*'     , ['static']);

});