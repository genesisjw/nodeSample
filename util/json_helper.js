var fs = require('fs');

// 1 json 파일 처리 : 가공 전 json file reading해서 js object로 parsing 처리
function LoadJSONTable(filename, callback) {
    fs.readFile(filename, 'utf8', function (err, data) {
        if (!err) {
            var result = ParseJsonString(data);
        }
        callback(err, result);
    });
}

function LoadJSONTableSync(filename) {
    var data = fs.readFileSync(filename, 'utf8');
    var parsed = ParseJsonString(data);
    for (var i in parsed) {
        var value = parsed[i];
        if (!value) {
            continue;
        }

        for (var attrKey in value) {
            var attrValue = value[attrKey];
            if (attrValue && typeof attrValue === 'string') {
                if (attrValue.toLowerCase() == 'true') {
                    value[attrKey] = true;
                }
                else if (attrValue.toLowerCase() == 'false') {
                    value[attrKey] = false;
                }
            }
        }
    }

    return parsed;
}

function ParseJsonString(data) {
    var myEscapedJSONString = data.replace(/[\r\n]/g, '').replace(/[\t]/g, '');
    myEscapedJSONString = myEscapedJSONString.slice(1);
    var result = JSON.parse(myEscapedJSONString);
    return result;
}

module.exports.LoadJSONTable = LoadJSONTable;
module.exports.LoadJSONTableSync = LoadJSONTableSync;
