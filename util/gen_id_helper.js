var FlakeIdGen = require('flake-idgen')
    , intformat = require('biguint-format')
    , generator = new FlakeIdGen;
/*
var id1 = generator.next();
var id2 = generator.next();
var id3 = intformat(id1, 'dec');
var id4 = intformat(id2, 'hex', { prefix: '0x' })
 */

function GetUniqueID() {
    var id = generator.next();
    return intformat(id, 'dec');
}

module.exports.GetUniqueID = GetUniqueID;
