const gulp = require('gulp'); // Подключаем Gulp
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const del = require('del');

// Таск для сборки Gulp файлов
gulp.task('pug', function (callback) {
    return gulp.src('./src/pug/pages/**/*.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Pug',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./docs/'))
        .pipe(browserSync.stream())
    callback();
});

// Таск для компиляции SCSS в CSS
gulp.task('scss', function (callback) {
    return gulp.src('./src/scss/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Styles',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 4 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./docs/css/'))
        .pipe(browserSync.stream())
    callback();
});

gulp.task('copy:css', function (callback) {
    return gulp.src('./src/css/**/*.*')
        .pipe(gulp.dest('./docs/css/'))
    callback();
});

// Копирование Изображений
gulp.task('copy:img', function (callback) {
    return gulp.src('./src/img/**/*.*')
        .pipe(gulp.dest('./docs/img/'))
    callback();
});

// Копирование Скриптов
gulp.task('copy:js', function (callback) {
    return gulp.src('./src/js/**/*.*')
        .pipe(gulp.dest('./docs/js/'))
    callback();
});

// Слежение за HTML и CSS и обновление браузера
gulp.task('watch', function () {

    // Следим за картинками и скриптами и обновляем браузер
    watch(['./docs/js/**/*.*', './docs/img/**/*.*'], gulp.parallel(browserSync.reload));

    // Запуск слежения и компиляции SCSS с задержкой
    watch('./src/scss/**/*.scss', function () {
        setTimeout(gulp.parallel('scss', browserSync.reload), 500)
    })

    // Слежение за PUG и сборка
    watch('./src/pug/**/*.pug', gulp.parallel('pug', browserSync.reload))

    // Следим за картинками и скриптами, и копируем их в docs
    watch('./src/img/**/*.*', gulp.parallel('copy:img', browserSync.reload))
    watch('./src/js/**/*.*', gulp.parallel('copy:js', browserSync.reload))

});

// Задача для старта сервера из папки app
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./docs/"
        }
    })
});

gulp.task('clean:docs', function () {
    return del('./docs')
});

// Дефолтный таск (задача по умолчанию)
// Запускаем одновременно задачи server и watch
gulp.task(
    'default',
    gulp.series(
        gulp.parallel('clean:docs'),
        gulp.parallel('scss', 'pug', 'copy:img', 'copy:js', 'copy:css'),
        gulp.parallel('server', 'watch'),
    )
);
