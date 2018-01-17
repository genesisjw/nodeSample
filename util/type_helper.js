
function IsUndefined(value) {
    return typeof value === 'undefined';
}

function IsDefined(value) {
    return !IsUndefined(value);
}

function IsArray(value) {
    return Array.isArray(value);
}

function ToLowerCaseConvention(value) {
    var finalName = '';
    for (var i = 0; value && i < value.length; i++) {
        var char = value.charAt(i);
        var lowerChar = char.toLowerCase();
        if (i > 0 && lowerChar != char) {
            finalName += '_';
        }
        finalName += lowerChar;
    }
    return finalName;
}

module.exports.IsUndefined = IsUndefined;
module.exports.IsDefined = IsDefined;
module.exports.IsArray = IsArray;
module.exports.ToLowerCaseConvention = ToLowerCaseConvention;
