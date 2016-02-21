var gulp = require('gulp');
var electron = require('gulp-electron');
var packageJson = require('./package.json');

gulp.task('electron', function() {
 
    gulp.src("")
    .pipe(electron({
        src: './',
        packageJson: packageJson,
        release: './dist',
        cache: './cache',
        version: 'v0.36.7',
        asar : true,
        packaging: true,
        platforms: ['win32-ia32','win32-x64'],
        platformResources: {
            darwin: {
                CFBundleDisplayName: packageJson.name,
                CFBundleIdentifier: packageJson.name,
                CFBundleName: packageJson.name,
                CFBundleVersion: packageJson.version,
                icon: 'gulp-electron.icns'
            },
            win: {
                "version-string": packageJson.version,
                "file-version": packageJson.version,
                "product-version": packageJson.version,
                //"icon": 'gulp-electron.ico'
            }
        }
    }))
    .pipe(gulp.dest("./dist"));
});