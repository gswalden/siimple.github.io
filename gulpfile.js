//Import dependencies
var fs = require('fs');
var gulp = require('gulp');
var ejs = require("gulp-ejs");
var gulpFilter = require('gulp-filter');

//Output dir
var output = './';

//Include config
var Config = require('./config.json');

//Build the website
gulp.task('build', function(){

  //Set the filter
  var filter = gulpFilter(['**/*', '!layouts/**/*', '!ref/**/*']);

  //Set the source folder
  gulp.src('src/**/*.ejs')

  //Ignore layouts files
  .pipe(filter)

  //Call the ejs builder
  .pipe(ejs(Config))

  //Save to
  .pipe(gulp.dest(output));

});

//Default
gulp.task('default', ['build']);
