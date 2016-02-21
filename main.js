var isDevelopment = process.env.NODE_ENV === 'development';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;
var connect;

if (isDevelopment) {
  connect = require('electron-connect').client;
}

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var webApp = express();
var port = 3000;

var routes = require('./routes/index');

// view engine setup
webApp.set('views', path.join(__dirname, 'views'));
webApp.set('view engine', 'ejs');

webApp.use(logger('dev'));
webApp.use(bodyParser.json());
webApp.use(bodyParser.urlencoded({ extended: false }));
webApp.use(cookieParser());
webApp.use(express.static(path.join(__dirname, 'public')));

webApp.use('/', routes);

var server = webApp.listen(port, function () {
  console.log('app listening at http://%s:%s', server.address().host, server.address().port);
});


app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {

    mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    'node-integration': false
  });
    
  mainWindow.loadURL('http://localhost:'+ port);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});