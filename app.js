process.env.NODE_ENV = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' ) ? 'production' : 'development';

//console.log(process.env);

var express = require('express');
var fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//API DOC Root
app.use('/docs', express.static(path.join(__dirname, 'docs'), {index: 'index.html'}));

//Admin Page Root
app.use('/admin', express.static(path.join(__dirname, '_admin'), {index: 'login.html'}));

//Image Upload Test page
app.get('/fileTest', function (req, res) {
  res.sendFile(__dirname + '/views/test.html');
});

console.log('---------------------------------------------------------------');
console.log('Initializing routes.');

fs.readdirSync(__dirname + '/routes/').forEach(function (fileName) {
	var routeName = fileName.substr(0, fileName.lastIndexOf('.'));
	var fileFullPath = __dirname + '/routes/' + fileName;

	console.log(routeName);

	if (fs.statSync(fileFullPath).isFile()) {
		app.use('/' + routeName, require(fileFullPath));
	}
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log('res.locals.message = ' + res.locals.message);
  console.log('res.locals.error = ' + res.locals.error);

  res.status(err.status || 500);
  res.render('error'); 
});

module.exports = app;