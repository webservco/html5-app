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
var nunjucksRender = require('gulp-nunjucks-render');

// BrowserSync Start
function browserSyncInit(done) {
    browserSync.init({
        server: {
            baseDir: ["./", "./src"]
        }
    });
    done();
};

// BrowserSync Reload
function browserSyncReload(done) {
  browserSync.reload();
  done();
};

// Cleans: "dist" folder, image cache
function cleanDist(done) {
    del.sync(['dist/*']);
    cache.clearAll();
    done();
}

// Cleans: src/css, src/*.html
function cleanSrc(done) {
    del.sync(['src/css/*', 'src/*.html']);
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

// Copy misc assets
function distAssets() {
    return gulp.src('src/*.ico')
    .pipe(gulp.dest('dist'));
}

// Optimizing CSS and JavaScript, processes also HTML
function distCssJs() {
    return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
}

// Process fonts
function distFonts() {
    return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
}

// Process images
function distImages() {
    return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
        interlaced: true,
    })))
    .pipe(gulp.dest('dist/img'));
}

// Process templates, generate html files in src
function html() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('src/pages/**/*.+(html|nunjucks)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['src/templates']
      }))
    // output files in src folder
    .pipe(gulp.dest('src'));
}

// Watch files for changes
function watchFiles() {
    gulp.watch('src/scss/**/*.scss', css);
    gulp.watch('src/templates/**/*.html', html);
    gulp.watch('src/pages/**/*.html', html);
    gulp.watch('src/*.html', browserSyncReload);
    gulp.watch('src/js/**/*.js', browserSyncReload);
}

// Tasks
// ------------------

// Build the project
gulp.task('build', gulp.series(
    cleanDist,
    cleanSrc,
    css,
    html,
    gulp.parallel(
        distCssJs,
        distImages,
        distFonts,
        distAssets
    ),
    cleanSrc
));

// Cleans both dist and src
gulp.task('clean', gulp.series(
    cleanDist,
    cleanSrc,
));

// Developement - serve source directory with hot reload
gulp.task('run', gulp.parallel(
    gulp.series(
        css,
        html,
        browserSyncInit
    ),
    watchFiles
));
