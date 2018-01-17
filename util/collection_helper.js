module.exports = new function () {
    //테이블의 해당 슬롯에 값을 지정한다.
    this.SetTableSlotValue = function (table, slots, value) {
        for (var i = 0; i < slots.length; i++) {
            var slot = slots[i];
            
            if (i == slots.length - 1) {
                table[slot] = value;
                return;
            }
            if (!(slot in table)) {
                table[slot] = {};
            }
            table = table[slot];
        }
    }
    
    //테이블의 해당 슬롯에 값을 추가한다.
    this.AddTableSlotValue = function (table, slots, value) {
        for (var i = 0; i < slots.length; i++) {
            var slot = slots[i];
            
            if (i == slots.length - 1) {
                if (!table[slot]) {
                    table[slot] = [];
                }
                table[slot].push(value);
                return;
            }
            if (!(slot in table)) {
                table[slot] = {};
            }
            table = table[slot];
        }
    }
    
    //테이블의 해당 슬롯에 저장된 값을 얻는다.
    //슬롯이 없다면 null.
    this.GetTableSlotValue = function (table, slots) {
        for (var i = 0; i < slots.length; i++) {
            var slot = slots[i];
            
            if (i == slots.length - 1) {
                return (slot in table) ? table[slot] : null;
            }
            if (!(slot in table)) {
                return null;
            }
            table = table[slot];
        }
    }
    
    //두 객체의 필드를 병합한다.
    this.Extend = function (obj1, obj2) {
        var obj3 = {};
        if (obj1) {
            for (var n in obj1) { obj3[n] = obj1[n]; }
        }
        
        if (obj2) {
            for (var n in obj2) { obj3[n] = obj2[n]; }
        }
        return obj3;
    }
    
    //두 배열을 합친다.
    this.Merge = function (array1, array2) {
        if (!array1) {
            array1 = [];
        }
        
        if (!array2) {
            array2 = [];
        }
        
        var merged = array1.concat(array2);
        return merged;
    }
    
    // 두 배열의 교집합을 구한다.
    this.Intersect = function (array1, array2) {
        var result = [];
        array1.forEach(function (v) {
            if (array2.indexOf(v) != -1) {
                result.push(v);
            }
        });
        return result;
    }
    
    // 배열안에 값이 존재하는지 확인.
    this.IsInArray = function (array, value) {
        if (!array) {
            return false;
        }

        if (!Array.isArray(array)) {
            return false;
        }

        return array.indexOf(value) > -1;
    }
    
    // 주어진 배열을 셔플한다.
    // limit 이 주어진다면 해당 개수만큼만 셔플한다.
    // (결과는 인덱스 0부터 (limit-1)까지)
    this.ShuffleArray = function (array, limit) {
        if (!limit) {
            limit = array.length;
        }

        for (var i = 0; i < limit; i++) {
            var selectedIndex = i + Math.floor(Math.random() * (array.length - i));
            var temp = array[selectedIndex];
            array[selectedIndex] = array[i];
            array[i] = temp;
        }
    }
}
