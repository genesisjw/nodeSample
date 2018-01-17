var IABVerifier = require('iab_verifier');

var googleplayverifier = new IABVerifier(GetGooglePlayPublicKey());

function GetGooglePlayPublicKey() {
    return 'OUR_APP_PUBLIC_KEY';
}

function VerifyReceipt(receipt, receiptSignature) {
    return googleplayverifier.verifyReceipt(receipt, receiptSignature);
}

function GetAccessToken(callback) {
    // customizing is needed
    var param = 'grant_type=' + 'refresh_token' +
						'&client_id=' + '79497816263-q5j568ml1i9l3tskdntb8boag7eme5fr.apps.googleusercontent.com' +
						'&client_secret=' + 's80TjWnmdh_6TNjlyjwKE4Uz' +
						'&refresh_token=' + '1/WQLMTofVFOz9pCB6un6b_oLQ10rsirtc_Dp9td5FZUE';
    request.post({
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        url: 'https://accounts.google.com/o/oauth2/token',
        body: param
    }, function (error, response, body) {
        var _body = JSON.parse(body);
        callback(error, _body.access_token);
    });
}

function CheckGooglePurchaseAPI(productId, purchaseToken, access_token, callback) {
    var packageName = 'OUR_APP_PACKAGE_NAME';
    var checkURL = 'https://www.googleapis.com/androidpublisher/v1.1/applications/' + packageName + '/inapp/' + productId + '/purchases/' + purchaseToken + '?access_token=' + access_token;
    request.get({ url : checkURL }, function (error, response, body) {
        //check@@
        //body 안넘어올경우 체크
        var _body = JSON.parse(body);
        callback(error, _body);
    });
}

module.exports.VerifyReceipt = VerifyReceipt;
module.exports.GetAccessToken = GetAccessToken;
module.exports.CheckGooglePurchaseAPI = CheckGooglePurchaseAPI;