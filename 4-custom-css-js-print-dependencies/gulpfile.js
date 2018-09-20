// Required dependencies
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
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
	js: [
		'./wp-content/themes/i72/assets/js/*.js'
	],
	css: [
		'./wp-content/themes/i72/assets/css/*.css'
	],
	scss: [
		'./wp-content/themes/i72/assets/scss/basic.scss'
	],
	printScss: [
		'./wp-content/themes/i72/assets/scss/print.scss'
	],
	editorScss: [
		'./wp-content/themes/i72/assets/scss/editor.scss'
	],
	watchScss: [
		'./wp-content/themes/i72/assets/scss/*.scss'
	]
};

// Compile JS
gulp.task('js',function(){
	gulp.src(paths.js)
		.pipe(uglify())
		.pipe(concat('scripts'))
		.pipe(gzip(jgzconfig))
		.pipe(gulp.dest('./wp-content/themes/i72/assets/js'))
		.pipe(notify({
			message: "JS processed"
		}));
});

// Compile SCSS
gulp.task('scss',function(){
	gulp.src(paths.scss)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('screen.css'))
		.pipe(cssbeautify())
		.pipe(gulp.dest('./wp-content/themes/i72/assets/css'))
		//Minify
		//.pipe(cleanCss())
		//.pipe(gulp.dest('./wp-content/themes/i72/assets/css'))
		.pipe(concat('screen'))
		.pipe(gzip(csgzconfig))
		.pipe(gulp.dest('./wp-content/themes/i72/assets/css'))
		.pipe(notify({
			message: "SCSS processed"
		}));
	
});

// Compile Print SCSS
gulp.task('printScss',function(){
	gulp.src(paths.printScss)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('print.css'))
		.pipe(cssbeautify())
		.pipe(gulp.dest('./wp-content/themes/i72/assets/css'))
		.pipe(concat('print'))
		.pipe(gzip(csgzconfig))
		.pipe(gulp.dest('./wp-content/themes/i72/assets/css'))
		.pipe(notify({
			message: "Print SCSS processed"
		}));
});

// Compile Editor SCSS
gulp.task('editorScss',function(){
	gulp.src(paths.editorScss)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('editor-style.css'))
		.pipe(cssbeautify())
		.pipe(gulp.dest('./wp-content/themes/i72/assets/css'))
		.pipe(concat('editor-style'))
		.pipe(gzip(csgzconfig))
		.pipe(gulp.dest('./wp-content/themes/i72/assets/css'))
		.pipe(notify({
			message: "Editor SCSS processed"
		}));
});

// This runs on 'gulp' in terminal/command line
gulp.task('default', function(){
	gulp.run('js');
	gulp.run('scss');
	gulp.run('printScss');
	gulp.run('editorScss');
});

// this runs when files change in the JS path
gulp.watch(paths.js, function () {
     gulp.run('js');
});

// this runs when fules change in the SCSS path
gulp.watch(paths.watchScss, function () {
    gulp.run('scss');
});

// this runs when fules change in the Print SCSS path
gulp.watch(paths.printScss, function () {
    gulp.run('printScss');
});

// this runs when fules change in the Editor SCSS path
gulp.watch(paths.editorScss, function () {
    gulp.run('editorScss');
});