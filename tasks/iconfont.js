var gulp        = require('gulp');
var iconfont    = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'svgicons';

gulp.task('iconfont', function(){
	gulp.src(['static/svgicons/*.svg'])
		.pipe(iconfontCss({
			fontName  : fontName,
			cssClass  : 'sf',
			path      : 'source/helpers/_icons.css',
			targetPath: '../../libs-css/svgicons.css',
			fontPath  : '../fonts/svg/'
	}))
	.pipe(iconfont({
		fontName: fontName
	}))
	.pipe(gulp.dest('static/fonts/svg/'));
});


gulp.task('svgi', ['iconfont', 'static']);