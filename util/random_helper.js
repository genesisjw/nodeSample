var typeHelper = require(__base + 'util/type_helper.js');
var randomstring = require('randomstring');
//주어진 범위[min, max) 에서의 난수 추출.
function GetRandom(min, max) {
    if (!max) {
        return Math.floor(Math.random() * min);
    }
    else {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

//최대 max중 rate안의 확률일 경우를 폴링.
function PollRate(rate, max) {
    var r = GetRandom(max);
    return r < rate;
}

//해당 확률을 통과하면 주어진 범위안의 임의의 개수를 리턴.
function PollCountByRate(rate, minCount, maxCount) {
    if (!rate) {
        return 0;
    }
    
    var pass = PollRate(rate, 1000);
    if (pass) {
        var count = GetRandom(minCount, maxCount + 1);
        return count;
    }
    return 0;
}

function GetRandomString(length) {
    return randomstring.generate(length);
}

module.exports.GetRandom = GetRandom;
module.exports.PollRate = PollRate;
module.exports.PollCountByRate = PollCountByRate;
module.exports.GetRandomString = GetRandomString;
