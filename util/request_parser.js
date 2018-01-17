var shared = require(__base + 'util/shared');

module.exports = new function () {
    this.ParseValue = function (request, key) {
        if (request.method == 'POST') {
            return this.ConvertType(request.body[key], true);
        }
        else {
            return this.ConvertType(request.query[key], true);
        }
    }
    
    this.ConvertType = function (value, decode) {
        if (!value) {
            return null;
        }
        
        if (value === true) {
            return true;
        }
        
        if (typeof value == 'string') {
            if (value.toLowerCase() == 'true') {
                return true;
            }
            if (value.toLowerCase() == 'false') {
                return false;
            }
            
            if (decode) {
                value = decodeURIComponent(value.replace(/\+/g, ' '));
            }
        }
        
        return value;
    }
    
    this.ParseValueRaw = function (request, key) {
        if (request.method == 'POST') {
            return this.ConvertType(request.body[key], false);
        }
        else {
            return this.ConvertType(request.query[key], false);
        }
    }
    
    this.ParseValueInt = function (request, key) {
        var v = this.ParseValue(request, key);
        return v ? Number(v) : 0;
    }
    
    this.ParseArray = function (request, key) {
        var value = this.ParseValue(request, key);
        if (!value) {
            return [];
        }
        
        if (Array.isArray(value)) {
            return value;
        }
        
        return [value];
    }
    
    this.ParseIntArray = function (request, key) {
        var arr = this.ParseArray(request, key);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i] ? Number(arr[i]) : 0;
        }
        return arr;
    }
}