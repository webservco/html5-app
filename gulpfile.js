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

// Process assets
function assets() {
    return gulp.src('src/*.ico')
    .pipe(gulp.dest('app'));
}

// BrowserSync Start
function browserSyncInit(done) {
    browserSync.init({
        server: {
            baseDir: ["./", "./app"]
        },
        port: 3000
    });
    done();
};

// BrowserSync Start - dist directory
function browserSyncInitDist(done) {
    browserSync.init({
        server: {
            baseDir: ["./", "./dist"]
        },
        port: 3000
    });
    done();
};

// BrowserSync Reload
function browserSyncReload(done) {
  browserSync.reload();
  done();
};

// Cleans: "app" folder, image cache
function cleanApp(done) {
    del.sync(['app/*']);
    cache.clearAll();
    done();
}

// Cleans: "dist" folder, image cache
function cleanDist(done) {
    del.sync(['dist/*']);
    cache.clearAll();
    done();
}

// Process scss
function css() {
    return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in src/scss and children dirs
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(gulp.dest('app/css')) // Outputs it in the css folder
    .pipe(browserSync.stream());
};

// Copy misc assets
function distAssets() {
    return gulp.src('src/*.ico')
    .pipe(gulp.dest('dist'));
}

// Optimizing CSS and JavaScript, processes also HTML
function distCssJs() {
    return gulp.src('app/*.html')
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

// Process templates, generate html files in app
function html() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('src/pages/**/*.+(html|nunjucks)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['src/templates']
      }))
    // output files in src folder
    .pipe(gulp.dest('app'));
}

// Process js files
function js() {
    return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('app/js'));
}

// Watch files for changes
function watchFiles() {
    gulp.watch('src/scss/**/*.scss', css);
    gulp.watch('src/pages/**/*.html', html);
    gulp.watch('src/templates/**/*.html', html);
    gulp.watch('app/*.html', browserSyncReload);
    gulp.watch('src/js/**/*.js', js);
    gulp.watch('app/js/**/*.js', browserSyncReload);
}

// Tasks
// ------------------

// Build the project
gulp.task('build', gulp.series(
    cleanDist,
    cleanApp,
    css,
    js,
    html,
    gulp.parallel(
        distCssJs,
        distImages,
        distFonts,
        distAssets
    ),
    cleanApp
));

// Cleans both dist and src
gulp.task('clean', gulp.series(
    cleanDist,
    cleanApp,
));

// Developement - serve source directory with hot reload
gulp.task('devel', gulp.parallel(
    gulp.series(
        css,
        js,
        html,
        assets,
        browserSyncInit
    ),
    watchFiles
));

// Developement - serve dist directory
gulp.task('dist', browserSyncInitDist);
