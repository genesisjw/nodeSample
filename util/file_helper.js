var fs = require('fs');
var path = require('path');

function GetFileRecursively(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(GetFileRecursively(file));
        }
        else {
            results.push(file);
        }
    })
    return results
}

function CreateDirectoryRecursive(fullPath) {
    var tokens = fullPath.split("/");
    var current = '';
    for (var i = 0; i < tokens.length; i++) {
        current = path.join(current, tokens[i]);
        if (!fs.existsSync(current)) {
            fs.mkdirSync(current);
        }
    }
}

module.exports.GetFileRecursively = GetFileRecursively;
module.exports.CreateDirectoryRecursive = CreateDirectoryRecursive;
