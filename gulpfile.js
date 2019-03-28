var gulp 				= require('gulp'); // Connect Gulp
var browserSync = require('browser-sync'); // Connect browser ynchronization
var del					= require('del'); // Connect to delete dist
var less 				= require('gulp-less'); // Connect less compilation
var concat			= require('gulp-concat'); // Connect for concatenation .js
var uglify			= require('gulp-uglifyjs'); // Connect minification .js
var cssnano			= require('gulp-cssnano'); // Connect minification css
var rename			= require('gulp-rename'); // Connect rename css (.min)
var prefixer		= require('gulp-autoprefixer'); // Connect prefixes to .css

// For synchronization browser with code
gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

// For recompile dist folder
gulp.task('clean', function () {
	return del.sync('dist/');
});

// For add frameworks and plugins to project
gulp.task('add-libs', function () {
	var jQuery = gulp.src('node_modules/jquery/dist/jquery.min.js')
							 .pipe(gulp.dest('src/libs/jQuery-3.3.1/'));

	var bootstrap = gulp.src('node_modules/bootstrap/dist/css/bootstrap-grid.min.css')
									.pipe(gulp.dest('src/libs/bootstrap-4.1.3/'))

	var normalizyCss = gulp.src('node_modules/normalize.css/normalize.css')
										 .pipe(gulp.dest('src/libs/normalizeCss/'))

	var slickSlide = gulp.src([
										 'node_modules/slick-carousel/slick/slick-theme.css',
										 'node_modules/slick-carousel/slick/slick.css',
										 'node_modules/slick-carousel/slick/slick.min.js'
									 ])
									 .pipe(gulp.dest('src/libs/slickSlide/'))
});

// For compilation less-file to css-file
gulp.task('less', function () {
	return gulp.src(['src/less/main.less',
									'src/less/header.less',
									'src/less/sections/main-info.less',
									'src/less/sections/about-teacher.less',
									'src/less/sections/certificates.less',
									'src/less/sections/teacher-clients.less',
									'src/less/sections/video-review.less',
									'src/less/sections/learn-profession.less',
									'src/less/sections/course-program.less',
									'src/less/sections/course-payment.less',
									'src/less/sections/reviews.less',
									'src/less/sections/life-changes.less',
									'src/less/sections/try-for-free.less',
									'src/less/sections/support.less',
									'src/less/sections/questions.less',
									'src/less/footer.less',
									'src/less/animation.less',
									'src/less/media.less'])
				.pipe(concat('style.less'))
				.pipe(less())
				.pipe(prefixer({
					browsers: [
						'last 10 versions',
						'> 1%',
						'ie 8',
						'iOS 10'
					],
					cascade: true
				}))
				.pipe(gulp.dest('src/css/'))
				.pipe(browserSync.reload({
					stream: true
				}))
});

// For minimizing styles
gulp.task('css-min', function () {
	return gulp.src('src/css/style.css')
				.pipe(cssnano())
				.pipe(rename({
					suffix: '.min'
				}))
				.pipe(gulp.dest('dist/css/'))
});

// For minimizing plagins and frameworks
gulp.task('libs-min', function () {
	return gulp.src('libs/**/*.js')
				 .pipe(concat('libs.min.js'))
				 .pipe(uglify())
				 .pipe(gulp.dest('dist/libs/'))
});

// For minimizing own scripts
gulp.task('scripts-min', function () {
	return gulp.src('src/js/**/*.js')
				 .pipe(concat('main.min.js'))
				 .pipe(uglify())
				 .pipe(gulp.dest('dist/js/'))
});

gulp.task('watch', ['browser-sync', 'add-libs', 'less'], function () {
	gulp.watch('src/less/**/*.less', ['less']);
	gulp.watch('src/**/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['add-libs', 'less', 'css-min', 'scripts-min'],
	function () {

	var buildFonts = gulp.src('src/fonts/**/*')
									.pipe(gulp.dest('dist/fonts/'));

	var buildImg = gulp.src('src/img/**/*')
									.pipe(gulp.dest('dist/img/'));

	var buildLibs = gulp.src('src/libs/**/*')
								 .pipe(gulp.dest('dist/libs'))

	var buildCss = gulp.src('src/css/**/*.css')
								.pipe(gulp.dest('dist/css/'));

	var buildJs = gulp.src('src/js/**/*')
							.pipe(gulp.dest('dist/js/'));

	var buildHtml = gulp.src('src/**/*.html')
								.pipe(gulp.dest('dist/'))

});
