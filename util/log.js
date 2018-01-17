var path = require('path');
var fs = require('fs');
var winston = require('winston');

function init(directoryPath, name, logLevel) {
    checkDirectory(directoryPath);
    
    logLevel = logLevel ? logLevel : 'silly';
    var fileName = path.join(directoryPath, 'log_' + name);

    winston.clear();
    winston.add(winston.transports.Console, {
        level : logLevel,
        name : 'console',
        colorize : true
    });
    winston.add(winston.transports.DailyRotateFile, {
        level : logLevel,
        name : 'dailyRotateFile',
        filename : fileName,
        datePattern : '_yyyy_MM_dd.log',
        timestamp : true,
        maxsize : 128000000
    });

    return fileName;
}

function mkdir(path, root) {
    var dirs = path.split('/');
	var dir = dirs.shift();
	var  root = (root||'')+dir+'/';

    try { 
		fs.mkdirSync(root); 
	}
    catch (e) {
        //dir wasn't made, something went wrong
        if(!fs.statSync(root).isDirectory()) 
			throw new Error(e);
    }

    return !dirs.length||mkdir(dirs.join('/'), root);
}

function checkDirectory( _directoryPath )
{
	try {
		// Query the entry
		var stats = fs.lstatSync(_directoryPath);

		// Is it a directory?
		if (stats.isDirectory()) {

		}
	}
	catch (e) {
		mkdir(_directoryPath);
	}
}

module.exports = winston;
module.exports.init = init;
