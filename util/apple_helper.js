var iap_verifier = require('iap_verifier');
var async = require('async');

function VerifyReceipt(player_id, cash_item_id, transaction_id, ios_receipt, callback) {
    var itunes_shared_secret = 'our_secret_here';      // 애플에서 생성된 것을 집어넣을 것
    // IAPVerifier(password, production, debug) -> 확인 및 수정해야 한다. (출시 때에는)
    // production은 테스트할 때에는 false, 출시시에는 true
    // 콘솔 메세지를 보려면 debug = true, 아니면 false
    // decode base64-based string 
    var buffer = new Buffer(ios_receipt, 'base64');
    var encoded = buffer.toString();
    var client = new IAPVerifier(itunes_shared_secret, false, true);
    var ret = -1;       // 서버 자체 검증 값(일치, 중복 여부 확인용도)
    var status = 0;     // 애플에서 리턴된 상태값

    async.waterfall([
        function (callback) {
            client.verifyReceipt(encoded, function (valid, msg, data) {
                if (data !== null)
                    status = data.status;
                callback(null, valid, msg, data);
            });
        },
        function (valid, msg, data, callback) {
            if (valid === true) {
                ret = 0;
                // cash_item_id와 transaction_id가 파라미터의 값과 애플에서 리턴해준 값이 둘다 동일해야 한다.
                if (cash_item_id !== data.receipt.product_id || transaction_id !== data.receipt.transaction_id) {
                    ret = 1;        // 애플에서 보내준 정보와 클라이언트에서 보낸 정보 불일치 
                }
            }
            callback(null);
        },
        function (callback) {
            if (ret === 0) {
                // DB에서 동일한 transaction id가 있는지를 확인한다.
            } else callback(null);
        }],
        function (err) {
            callback(err, ret, status);
        }
    );
}

module.exports.VerifyReceipt = VerifyReceipt;