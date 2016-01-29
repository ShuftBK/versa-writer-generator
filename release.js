var packager = require('electron-packager');
var config = require('./package.json');

packager({
    dir: './',
    out: '../dist',
    name: config.name,
    platform: 'win32,darwin',
    arch: 'ia32',
    version: '0.36.4',
    // icon: './app.ico', 
    'app-bundle-id': 'work.coils.versawritergenerator',
    'app-version': config.version,
    'helper-bundle-id': 'work.coils.versawritergenerator',
    overwrite: true,
    asar: true,
    prune: true,
    ignore: "node_modules/(electron-packager|electron-prebuilt|\.bin)|release\.js",
    'version-string': {
        CompanyName: 'CoilsWork',
        FileDescription: 'バーサライタープログラム作成プログラム',
        OriginalFilename: config.name,
        FileVersion: config.version,
        ProductVersion: config.version,
        ProductName: config.name,
        InternalName: config.name
    }
}, function done(err, appPath) {
    if (err) {
        throw new Error(err);
    }
    console.log('Done!!');
});