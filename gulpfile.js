var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var webpack = require("gulp-webpack");
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');

var libs = [

]

var paths = {
    npm: './node_modules/',
    lib: './lib/'
};

gulp.task('libs', function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task('template-cache', function () {
    return gulp.src('wwwroot/**/*.html')
        .pipe(templateCache({
            root: 'wwwroot/',
            module: "app"
        }))
        .pipe(concat('app.templates.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('concat-css', function () {
    return gulp.src(["wwwroot/**/*.css"])
      .pipe(concat('app.css'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task("webpack", function () {
    return gulp.src('wwwroot/main.ts')
    .pipe(webpack({
        resolve: {
            extensions: ["", ".js", ".ts"]
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/, loader: "ts", exclude: [/node_modules/]
                },
                {
                    test: /\.css$/, exclude: [/node_modules/], loader: "style-loader!css-loader"
                },
                {
                    test: /\.html$/,loader: "raw-loader"
                }
            ]
        }
    }))
    .pipe(rename("app.js"))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch([
        './wwwroot/**/*.ts', './wwwroot/**/*.html', './wwwroot/**/*.css'
    ], ['concat-css', 'template-cache', 'webpack']);
});

gulp.task('default', ['concat-css', 'template-cache', 'webpack', 'watch']);