var gulp = require('gulp');

var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

// TypeScriptのコンパイルとwebpackの実行
gulp.task('ts', function () {
    // TypeScriptのコンパイル
    var tsResult = gulp.src(['./*.ts'])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./'));
});

// コマンドで「> gulp」と入力したときのタスク
gulp.task('default', ['ts']);