var dns = require('dns');
var os = require('os');
var childProcess = require('child_process');
var externalip = require('externalip');
var log = require(__base + 'util/log.js');

module.exports = new function () {
    this.GetLocalIp = function (callback) {
        var hostName = os.hostname();
        dns.lookup(hostName, function (err, add, fam) {
            callback(add);
        })
    }
    
    this.GetPublicIp = function (callback) {
        if (__config.public_ip_command) {
            this.RunCommand(__config.public_ip_command, __config.public_ip_command_args, callback);
            return;
        }
        
        externalip(function (err, ip) {
            if (err) {
                log.error('Failed to get externalip : ' + err);
                callback(null);
                return;
            }
            callback(ip);
        });
    }
    
    this.RunCommand = function (cmd, args, callback) {
        var spawn = childProcess.spawn;
        var child = spawn(cmd, args);
        var resp = "";
        
        log.debug("Running command : " + cmd);
        
        child.stdout.on('data', function (buffer) { resp += buffer.toString() });
        child.stdout.on('end', function () { callback(resp) });
    }
}
