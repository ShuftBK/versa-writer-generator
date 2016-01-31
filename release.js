var packager = require('electron-packager');
var config = require('./package.json');

packager({
    dir: './',
    out: './dist',
    name: config.name,
    platform: 'darwin,win32',
    arch: 'x64',
    version: '0.36.4',
    asar: true,
    prune: true,
    ignore: "node_modules/(electron-packager|electron-prebuilt|\.bin)|release\.js",
    'version-string': {
        CompanyName: 'CoilsWork',
        FileDescription: config.name,
        OriginalFilename: config.name,
        FileVersion: config.version,
        ProductVersion: config.version,
        ProductName: config.name,
        InternalName: config.name
    }
}, function done(err, appPath) {
    if (err) {
       
    }
    console.log('Done!!');
});