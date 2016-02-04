//Import dependencies
var fs = require('fs');
var gulp = require('gulp');
var ejs = require("gulp-ejs");
var gulpFilter = require('gulp-filter');
var sass = require('gulp-sass');

//Include config
var Config = require('../siimple/package.json');

//Output dir
var output = '../siimple-website/';

//Files list
var paths = { 'src': ['src/*.ejs'], 'styles': ['scss/**/*'] };

//Build the source website
gulp.task('src', function(){

  //Set the filter
  //var filter = gulpFilter(['**/*', '!layouts/**/*', '!ref/**/*']);

  //Set the source folder
  gulp.src(paths.src)

  //Ignore layouts files
  //.pipe(filter)

  //Call the ejs builder
  .pipe(ejs(Config))

  //Save to
  .pipe(gulp.dest(output));

});

//Build css files
gulp.task('styles', function(){

	//Get all the scss files
  gulp.src(paths.styles)

	//Build the css files
  .pipe(sass().on('error', sass.logError))

	//Save to the output dir
  .pipe(gulp.dest(output + 'css/'))

});

//Build task
gulp.task('build', ['src', 'styles']);

//Default
gulp.task('default', ['build']);
