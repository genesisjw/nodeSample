var shared = require(__base + 'util/shared');
var typeHelper = require(__base + 'util/type_helper');

function DirtySet() {
    this.values = [];
    this.dirties = [];
    this.popDisabled = false;
}

DirtySet.prototype.set = function (key, value) {
    var self = this;
    if (value) {
        value.makeParentDirty = function () {
            self.makeDirty(key);
        };
    }

    this.values[key] = value;
    this.makeDirty(key);    
    return value;
}

DirtySet.prototype.addOrUpdate = function (key, value, update) {
    if (key in this.values) {
        if (update) {
            update(this.values[key]);
        }
        return this.values[key];
    }
    else {
        return this.set(key, value);
    }
}

DirtySet.prototype.get = function (key) {
    if (key in this.values) {
        var value = this.values[key];
        return value;
    }
    return null;
}

DirtySet.prototype.has = function (key) {
    if (key in this.values) {
        return true;
    }
    return false;
}

DirtySet.prototype.delete = function (key) {
    if (key in this.values) {
        delete this.values[key];
        this.makeDirty(key);
        return true;
    }
    return false;
}

DirtySet.prototype.clear = function () {
    var self = this;
    this.values.forEach(function (value, key) {
        self.makeDirty(key);
    });
    this.values.length = 0;
}

DirtySet.prototype.getCount = function () {
    var keys = Object.keys(this.values);
    return keys.length;
}

DirtySet.prototype.clearDirties = function () {
    this.dirties.length = 0;
}

DirtySet.prototype.forEach = function (f) {
    var self = this;
    this.values.forEach(function (value, key) {
        f(key, value);
    });
}

DirtySet.prototype.forEachValue = function (f) {
    var self = this;
    this.values.forEach(function (value, key) {
        f(value);
    });
}

DirtySet.prototype.selectOne = function (compare) {
    var keys = Object.keys(this.values);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this.values[key];
        if (compare(value)) {
            return value;
        }
    }
    return null;
}

DirtySet.prototype.selectAll = function (compare) {
    var selected = [];
    var keys = Object.keys(this.values);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = this.values[key];
        if (!compare || compare(value)) {
            selected.push(value);
        }
    }
    return selected;
}

DirtySet.prototype.getMaxKey = function (f) {
    var self = this;
    var maxKey = null;
    this.values.forEach(function (value, key) {
        if (maxKey == null || key > maxKey) {
            maxKey = key;
        }
    });
    return maxKey;
}

DirtySet.prototype.getMinKey = function (f) {
    var self = this;
    var minKey = null;
    this.values.forEach(function (value, key) {
        if (minKey == null || key < minKey) {
            minKey = key;
        }
    });
    return minKey;
}

DirtySet.prototype.makeDirty = function (key) {
    if (this.dirties.indexOf(key) == -1) {
        this.dirties.push(key);
    }
}

DirtySet.prototype.clearDirty = function (key) {
    var index = this.dirties.indexOf(key);
    if (index > -1) {
        this.dirties.splice(index, 1);
    }
}

DirtySet.prototype.disablePopDirty = function (disabled) {
    this.popDisabled = disabled;
}

DirtySet.prototype.popDirties = function () {
    var self = this;
    var popped = [];
    if (this.popDisabled) {
        return popped;
    }

    this.dirties.forEach(function (key) {
        var value = self.get(key);
        popped[key] = value;
    });
    this.dirties.length = 0;
    return popped;
}

module.exports = DirtySet;
