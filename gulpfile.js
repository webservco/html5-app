var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');

// BrowserSync Start
function browserSyncInit(done) {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    done();
};

// BrowserSync Reload
function browserSyncReload(done) {
  browserSync.reload();
  done();
};

// Cleans "dist" folder, and image cache
function clean(done) {
    del.sync(['dist/*', 'src/css/*']);
    cache.clearAll();
    done();
}

// Process scss
function css() {
    return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in src/scss and children dirs
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(gulp.dest('src/css')) // Outputs it in the css folder
    //.pipe(browserSync.reload({ // Reloading with Browser Sync
    //        stream: true
    //})
    .pipe(browserSync.stream());
};

// Optimizing CSS and JavaScript
function distCssJs() {
    return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
}

// Process fonts
function fonts() {
    return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
}

// Process images
function images() {
    return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
        interlaced: true,
    })))
    .pipe(gulp.dest('dist/img'));
}

// Watch files for changes
function watchFiles() {
    gulp.watch('src/scss/**/*.scss', css);
    gulp.watch('src/*.html', browserSyncReload);
    gulp.watch('src/js/**/*.js', browserSyncReload);
}

// Tasks
// ------------------

// Cleans "dist" folder, and image cache
gulp.task('clean', clean);

// Developement - serve source directory with hot reload
gulp.task('run', gulp.parallel(
    gulp.series(
        css, // make sure css files are created
        browserSyncInit
    ),
    watchFiles
));

// Build the project
gulp.task('build', gulp.series(
    clean,
    css,
    gulp.parallel(
        distCssJs,
        images,
        fonts
    )
));
