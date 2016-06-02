var gulp = require('gulp');

gulp.task('dev', ['stylus','jade','babel', 'static']);

gulp.task('default', ['dev']);
gulp.task('serve', ['watch', 'server']);