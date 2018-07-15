var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var connect = require('gulp-connect')
var imagemin = require('gulp-imagemin')

var scssFiles = './src/scss/style.scss'; //sass src
var cssDest = './css'; //css dest
var cssMinDest = './dist/css' ///css.min dest
 

var sassDevOptions = {
  outputStyle: 'expanded'
}
var sassProdOptions = {
  outputStyle: 'compressed'
}

// tasks for sass
gulp.task('sassDev', function(){
 return gulp.src(scssFiles)
  .pipe(sass(sassDevOptions)).on('error', sass.logError)
  .pipe(gulp.dest(cssDest))
});

gulp.task('sassProd', function(){
 return gulp.src(scssFiles)
  .pipe(sass(sassProdOptions)).on('error', sass.logError)
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest(cssMinDest))
});

//task html min
gulp.task('htmlmin', function(){
  return gulp.src('src/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('dist/'))
});

// task watch 
gulp.task('watch', function(){
 gulp.watch(scssFiles, ['sassDev', 'sassProd'])
 gulp.watch('src/*.html', ['htmlmin'])
})

// task local server
gulp.task('connect', function(){
  connect.server({
    root: 'dist/',
    livereload: true
  })
})

//task image min
gulp.task('imagemin', function(){
 return gulp.src('./assets/images/*')
 .pipe(imagemin())
 .pipe(gulp.dest('dist/images'))
})


gulp.task('default', ['htmlmin', 'sassDev', 'sassProd', 'imagemin', 'connect', 'watch'])