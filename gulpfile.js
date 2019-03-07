const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel'),
  //htmlmin = require('gulp-htmlmin'),
  imagemin = require('gulp-imagemin'),
  replace = require('gulp-replace'),
  header = require('gulp-header'),
  footer = require('gulp-footer'),
  touch = require('gulp-touch-cmd'),
  svgSprite = require('gulp-svg-sprite'),
  browserSync = require('browser-sync').create(),
  //pkg = require('./package.json'),
  nunjucks = require('gulp-nunjucks')

// !!
var pkg = { name: 'bootstrap-italia'}

const Paths = {
  VENDOR_JS: [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/popper.js/dist/umd/popper.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/bootstrap-select/js/bootstrap-select.js',
    'node_modules/bootstrap-select/js/i18n/defaults-it_IT.js',
    'node_modules/owl.carousel/dist/owl.carousel.js',
    'node_modules/bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js'
  ],
  SOURCE_JS: [
    'src/js/header-resize.js',
    'src/js/index.js',
  ],

  VENDOR_SVG: 'node_modules/bootstrap-italia/dist/svg/sprite.svg',
  VENDOR_FONTS: 'node_modules/bootstrap-italia/dist/fonts/**',
  SOURCE_SCSS: 'src/scss/index.scss',
  DIST: 'dist',
  SCSS_WATCH: 'src/scss/**/**',
  JS_WATCH: 'src/js/**/**',
  HTML_WATCH: 'src/pages/**/**',
}

const bootstrapItaliaBanner = [
  '/**',
  ' * <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  '',
].join('\n')

const jqueryCheck =
  "if (typeof jQuery === 'undefined') {\n" +
  "  throw new Error('Bootstrap\\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\\'s JavaScript.')\n" +
  '}\n'
const jqueryVersionCheck =
  '+function ($) {\n' +
  "  var version = $.fn.jquery.split(' ')[0].split('.')\n" +
  '  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {\n' +
  "    throw new Error('Bootstrap\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')\n" +
  '  }\n' +
  '}(jQuery);\n\n'

// Library related tasks

gulp.task('scss-min', () => {
  return gulp
    .src(Paths.SOURCE_SCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(
      cleanCSS({
        level: 2,
        specialComments: 0,
      })
    )
    .pipe(header(bootstrapItaliaBanner, { pkg: pkg }))
    .pipe(
      rename({
        basename: "style",
        suffix: '.min'
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(Paths.DIST + '/css'))
    .pipe(touch())
    .pipe(browserSync.stream({ match: '**/*.css' }))
})

gulp.task('js-min', () => {
  return gulp
    .src(Paths.SOURCE_JS)
    .pipe(concat(pkg.name + '.js'))
    .pipe(sourcemaps.init())
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(
      babel({
        compact: true,
        presets: [
          [
            '@babel/env',
            {
              modules: false,
              loose: true,
              exclude: ['transform-typeof-symbol'],
            },
          ],
        ],
        plugins: ['@babel/plugin-proposal-object-rest-spread'],
      })
    )
    .pipe(uglify())
    .pipe(
      header(
        bootstrapItaliaBanner +
          '\n' +
          jqueryCheck +
          '\n' +
          jqueryVersionCheck +
          '\n+function () {\n',
        { pkg: pkg }
      )
    )
    .pipe(footer('\n}();\n'))
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(Paths.DIST + '/js'))
    .pipe(touch())
})

gulp.task('js-bundle-min', () => {
  return gulp
    .src(Paths.VENDOR_JS.concat(Paths.SOURCE_JS))
    .pipe(concat(pkg.name + '.bundle.js'))
    .pipe(sourcemaps.init())
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(
      babel({
        compact: true,
        presets: [['@babel/env', { modules: false, loose: true }]],
        plugins: ['@babel/plugin-proposal-object-rest-spread'],
      })
    )
    .pipe(uglify())
    .pipe(header(bootstrapItaliaBanner, { pkg: pkg }))
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(Paths.DIST + '/js'))
    .pipe(touch())
})

gulp.task('vendor-svg', function() {
  return gulp
    .src(Paths.VENDOR_SVG)
    .pipe(gulp.dest(Paths.DIST + '/svg'))
})

gulp.task('svg-sprite', function() {
  return gulp
    .src('src/svg/it-*.svg')
    .pipe(
      svgSprite({
        shape: {
          dimension: {
            // Set maximum dimensions
            maxWidth: 32,
            maxHeight: 32,
          },
        },
        mode: {
          defs: {
            dest: '.',
            sprite: 'sprite.svg',
          },
        },
      })
    )
    .pipe(gulp.dest(Paths.DIST + '/svg'))
})

// Assets related tasks
gulp.task('assets', () => {
  return gulp
    .src(['src/assets/**'])
    .pipe(imagemin())
    .pipe(gulp.dest(Paths.DIST + '/assets'))
    .pipe(touch())
})

// Fonts
gulp.task('vendor-fonts', () => {
  return gulp
    .src([Paths.VENDOR_FONTS])
    .pipe(gulp.dest(Paths.DIST + '/fonts'))
    .pipe(touch())
})

gulp.task('fonts', () => {
  return gulp
    .src(['src/fonts/**'])
    .pipe(gulp.dest(Paths.DIST + '/fonts'))
    .pipe(touch())
})

// Library

gulp.task(
  'build-library',
  gulp.series(
    'vendor-svg',
    //'svg-sprite',
    'scss-min',
    'js-min',
    'js-bundle-min',
    'vendor-fonts',
    //'fonts',
    'assets'
  )
)

// HTML

gulp.task('html', () =>
  gulp
    .src(['src/pages/*', '!src/pages/partials'])
    .pipe(nunjucks.compile())
    .pipe(gulp.dest('dist'))
)


// Sync

gulp.task('sync', () => {
  browserSync.init({
    files: 'dist/**/*',
    port: 4000,
    server: {
      baseDir: 'dist',
    },
    injectChanges: true,
  })

  // gulp.watch('dist/css/**/*.css').on('change', browserSync.reload)

  gulp.watch(Paths.HTML_WATCH, gulp.series('html'))

  gulp.watch(Paths.SCSS_WATCH, gulp.series('scss-min'))

  gulp.watch(Paths.JS_WATCH, gulp.series('js-min', 'js-bundle-min'))
})


// Main build task

gulp.task('build', gulp.series('build-library', 'html'))

// Main serve task

gulp.task('serve', gulp.series('build', 'sync'))
