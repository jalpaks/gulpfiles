// Required dependencies
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	
	concat = require('gulp-concat'),
	gzip = require('gulp-gzip'),
	sass = require('gulp-sass'),
	notify = require('gulp-notify'),
	cssbeautify = require('gulp-cssbeautify'),
	cleanCss = require('gulp-clean-css');

// JS gzip extension
var jgzconfig = {
	extension: 'jgz'
};

// CSS gzip extension
var csgzconfig = {
	extension: 'csgz'
};

// Where files are located
var paths = {
	// js: [
	// 	'./wp-content/themes/i72/assets/js/*.js'
	// ],
	css: [
		'src/assets/css/*.css'
	],
	scss: [
		'src/assets/scss/main.scss'
	],
	colorskinsScss: [
		'src/assets/scss/color_skins.scss'
	],
	blogScss: [
		'src/assets/scss/pages/blog.scss'
	],
	chatappScss: [
		'src/assets/scss/pages/chatapp.scss'
	],
	ecommerceScss: [
		'src/assets/scss/pages/ecommerce.scss'
	],
	inboxScss: [
		'src/assets/scss/pages/inbox.scss'
	],
	timelineScss: [
		'src/assets/scss/pages/timeline.scss'
	],	
	watchScss: [
		'src/assets/scss/*.scss'
	]
};

// Compile JS
// gulp.task('js',function(){
// 	gulp.src(paths.js)
// 		.pipe(uglify())
// 		.pipe(concat('scripts'))
// 		.pipe(gzip(jgzconfig))
// 		.pipe(gulp.dest('./wp-content/themes/i72/assets/js'))
// 		.pipe(notify({
// 			message: "JS processed"
// 		}));
// });

// Compile Main SCSS
gulp.task('scss',function(){
	gulp.src(paths.scss)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('main.css'))
		.pipe(cssbeautify())
		.pipe(gulp.dest('src/assets/css'))		
		.pipe(concat('main'))
		.pipe(gzip(csgzconfig))
		.pipe(gulp.dest('src/assets/css'))
		.pipe(notify({
			message: "main SCSS processed"
		}));
	
});

// Compile Color SCSS
gulp.task('colorskinsScss',function(){
	gulp.src(paths.colorskinsScss)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('color_skins.css'))
		.pipe(cssbeautify())
		.pipe(gulp.dest('src/assets/css'))
		.pipe(concat('color_skins'))
		.pipe(gzip(csgzconfig))
		.pipe(gulp.dest('src/assets/css'))
		.pipe(notify({
			message: "Colorskins SCSS processed"
		}));
});

// Compile Blog SCSS
gulp.task('blogScss',function(){
	gulp.src(paths.blogScss)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('blog.css'))
		.pipe(cssbeautify())
		.pipe(gulp.dest('src/assets/css'))
		.pipe(concat('blog'))
		.pipe(gzip(csgzconfig))
		.pipe(gulp.dest('src/assets/css'))
		.pipe(notify({
			message: "Blog SCSS processed"
		}));
});

// Compile chatapp SCSS
gulp.task('chatappScss',function(){
	gulp.src(paths.chatappScss)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('chatapp.css'))
		.pipe(cssbeautify())
		.pipe(gulp.dest('src/assets/css'))
		.pipe(concat('chatapp'))
		.pipe(gzip(csgzconfig))
		.pipe(gulp.dest('src/assets/css'))
		.pipe(notify({
			message: "Chatapp SCSS processed"
		}));
});

// Compile ecommerce SCSS
gulp.task('ecommerceScss',function(){
	gulp.src(paths.ecommerceScss)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('ecommerce.css'))
		.pipe(cssbeautify())
		.pipe(gulp.dest('src/assets/css'))
		.pipe(concat('ecommerce'))
		.pipe(gzip(csgzconfig))
		.pipe(gulp.dest('src/assets/css'))
		.pipe(notify({
			message: "Ecommerce SCSS processed"
		}));
});

// Compile inbox SCSS
gulp.task('inboxScss',function(){
	gulp.src(paths.inboxScss)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('inbox.css'))
		.pipe(cssbeautify())
		.pipe(gulp.dest('src/assets/css'))
		.pipe(concat('inbox'))
		.pipe(gzip(csgzconfig))
		.pipe(gulp.dest('src/assets/css'))
		.pipe(notify({
			message: "Inbox SCSS processed"
		}));
});

// Compile timeline SCSS
gulp.task('timelineScss',function(){
	gulp.src(paths.timelineScss)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('timeline.css'))
		.pipe(cssbeautify())
		.pipe(gulp.dest('src/assets/css'))
		.pipe(concat('timeline'))
		.pipe(gzip(csgzconfig))
		.pipe(gulp.dest('src/assets/css'))
		.pipe(notify({
			message: "Timeline SCSS processed"
		}));
});


// This runs on 'gulp' in terminal/command line
gulp.task('default', function(){
	// gulp.run('js');
	gulp.run('scss');
	gulp.run('colorskinsScss');
	gulp.run('blogScss');
	gulp.run('chatappScss');
	gulp.run('ecommerceScss');
	gulp.run('inboxScss');	
	gulp.run('timelineScss');	
});

// this runs when files change in the JS path
// gulp.watch(paths.js, function () {
//      gulp.run('js');
// });

// this runs when fules change in the SCSS path
gulp.watch(paths.watchScss, function () {
    gulp.run('scss');
});

// this runs when fules change in the color SCSS path
gulp.watch(paths.colorskinsScss, function () {
    gulp.run('colorskinsScss');
});

// this runs when fules change in the blog SCSS path
gulp.watch(paths.blogScss, function () {
    gulp.run('blogScss');
});

// this runs when fules change in the Chatapp SCSS path
gulp.watch(paths.chatappScss, function () {
    gulp.run('chatappScss');
});

// this runs when fules change in the Ecommerce SCSS path
gulp.watch(paths.ecommerceScss, function () {
    gulp.run('ecommerceScss');
});

// this runs when fules change in the Inbox SCSS path
gulp.watch(paths.inboxScss, function () {
    gulp.run('inboxScss');
});

// this runs when fules change in the Inbox SCSS path
gulp.watch(paths.timelineScss, function () {
    gulp.run('timelineScss');
});

