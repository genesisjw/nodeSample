var request = require('request');
var async = require('async');
var moment = require('moment');
var fs = require('fs');
var log = require(__base + 'util/log.js');
var shared = require(__base + 'util/shared');

module.exports = new function () {
    this.Send = function (pushInfo, callback) {
        if (pushInfo == null) {
            if (callback) {
                callback();
            }
            return;
        }

        var requestUrl = __config.push_url;
        if (requestUrl == null || requestUrl.length == 0) {
            log.error('Push url is empty.');
            if (callback) {
                callback();
            }
            return;
        }

        log.info('Send push : url=' + requestUrl + ' content=' + JSON.stringify(pushInfo));
        request.post({ url: requestUrl, form: pushInfo }, function (err, httpResponse, body) {
            if (err) {
                log.error(err);
                if (callback) {
                    callback();
                }
                return;
            }

            if (callback) {
                callback(body);
            }
        });
    }
}