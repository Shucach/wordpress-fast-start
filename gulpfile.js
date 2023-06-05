//Modules
const gulp = require('gulp');
const webpack = require('webpack-stream');

const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const browserSync = require("browser-sync").create();

const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const ttf2woff2p = require('gulp-ttf2woff2');
const ttf2woffp = require('gulp-ttf2woff');

const webp = require('gulp-webp');

const sass = require('gulp-sass')(require('sass'));

const autoprefixer = require('gulp-autoprefixer');

const builderFolder = 'public';

/**
 * Style
 */
function style() {
    return gulp.src([
        'app/sass/*.sass',
        '!app/sass/style.sass',
    ])
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(autoprefixer({overrideBrowserslist:  ['last 2 versions']}))
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(gulp.dest(builderFolder + '/css'));
}

/**
 * Scripts
 */
function scripts() {
    return gulp.src([
        'app/js/*.js'
    ])
        .pipe(webpack({
            // 'development' or 'production'
            mode: 'production',
            //devtool: 'source-map',
            output: {
                filename: '[name].js',
            },
            module: {
                // rules: [
                //     {
                //         test: /\.(js)$/,
                //         loader: 'babel-loader',
                //         query: {
                //             presets: ['@babel/preset-env']
                //         }
                //     }
                // ]
            }
        }))
        .pipe(gulp.dest(builderFolder + '/js'));
}

/**
 * JS|jQuery plugins
 * @returns {*}
 */
function jsPlugins() {
    return gulp.src([
        //
    ])
    .pipe(concat('main.plugin.js'))
    .pipe(rename('plugins.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(builderFolder + '/js'));
}

/**
 * Optimize Images
 * https://www.npmjs.com/package/gulp-imagemin
 */
function imagesMin() {
    return gulp
        .src('app/images/to_min/*')
        .pipe(
            imagemin([
                imagemin.mozjpeg({quality: 75}),
            ])
        )
        .pipe(gulp.dest(builderFolder + '/images'));
}

/**
 * Convert image to WebP
 */
function imageToWebP() {
    return gulp.src('app/images/to_webp/*')
        .pipe(webp({quality: 85}))
        .pipe(gulp.dest(builderFolder + '/images/webp'))
}

/**
 * Watch
 */
function watchFiles() {
    gulp.watch([
        "app/sass/*.sass",
        "app/sass/*.scss",
        "app/sass/modules/*.sass",
    ], style);
    gulp.watch(["app/js/*.js", "app/js/classes/*.js", "app/js/modules/*.js"], scripts);
}

/**
 * Browser sync
 */
function browserSyncWatch() {
    browserSync.init({
        server: {
            baseDir: builderFolder + "/"
        }
    });

    let st = gulp.watch(["app/sass/*.sass", "app/sass/*.scss"], style),
        js = gulp.watch(["app/js/*.js", "app/js/classes/*.js", "app/js/modules/*.js"], scripts);

    st.on('change', function(){
        browserSync.reload();
    });
    js.on('change', function(){
        browserSync.reload();
    });

    gulp.watch(builderFolder + "/*.html").on('change', browserSync.reload);
}

/**
 * Convert svg icons to fonts
 * https://www.npmjs.com/package/gulp-iconfont-css
 * https://www.npmjs.com/package/gulp-iconfont
 */
function svg2Fonts() {
    return gulp.src(['app/svg2Fonts/*.svg'])
        .pipe(iconfontCss({
            fontName: 'svgFonts',
            targetPath: '_icons.scss',
            fontPath: 'fonts/svg-fonts/'
        }))
        .pipe(iconfont({
            fontName: 'svgFonts',
            //prependUnicode: true,
            formats: ['woff', 'woff2'],
            normalize: true
        }))
        .pipe(gulp.dest(builderFolder + '/fonts/svg-fonts'));
}

/**
 * Convert TTF to web formats woff2, woff
 * https://www.npmjs.com/package/gulp-ttf2woff2
 * https://www.npmjs.com/package/gulp-ttf2woff
 */
function ttf2woffAll() {
    return gulp.series(
        ttf2woff2Fn,
        ttf2woffFn
    )();
}
function ttf2woff2Fn() {
    return gulp.src(['app/fontsTTF/*.ttf'])
        .pipe(ttf2woff2p())
        .pipe(gulp.dest(builderFolder + '/fonts/convert-fonts'));
}
function ttf2woffFn() {
    return gulp.src(['app/fontsTTF/*.ttf'])
        .pipe(ttf2woffp())
        .pipe(gulp.dest(builderFolder + '/fonts/convert-fonts'));
}


/**
 * Define complex tasks
 */
const js = gulp.series(scripts);
const css = gulp.series(style);
const plugins = gulp.series(jsPlugins);
const images = gulp.series(imagesMin);
const webP = gulp.series(imageToWebP);
const watch = gulp.parallel(watchFiles);
const serve = gulp.parallel(browserSyncWatch);
const svgFonts = gulp.parallel(svg2Fonts);
const ttf2woff = gulp.parallel(ttf2woffAll);


/**
 * Export tasks
 */
exports.js = js;
exports.css = css;
exports.plugins = plugins;
exports.images = images;
exports.watch = watch;
exports.serve = serve;
exports.webp = webP;
exports.svg2Fonts = svgFonts;
exports.ttf2woff = ttf2woff;
