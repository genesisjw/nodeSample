var util = require('util');
var mysql = require('mysql');
var camelcaseKeys = require('camelcase-keys');
var dbPool = require('../util/dbPool');
var connection = dbPool.init();

function adminMb() {
}

/**
 * 관리자 정보 리스트
*/
adminMb.prototype.selectAdminMbList = function(callback) {
	var sql = 'SELECT ADMIN_NO, ID, PASSWORD, ADD_DATE FROM tmp.ADMIN_MEMBER_MNG;';

	connection.query(
		sql,
		function(err, rows){
			if(err) console.log(err);
			else    console.log(rows);
			callback(err, camelcaseKeys(rows));
		}
	);
};

/**
 * 관리자 정보 등록
 */
adminMb.prototype.insertAdminMb = function(query, callback) {
    var adminId = query.adminId;
    var adminPw = query.adminPw;

    var sql = ' INSERT INTO tmp.ADMIN_MEMBER_MNG(ID, PASSWORD, ADD_DATE) ' +
			' VALUES (?, ?, ?) ';

	connection.query(
		sql,
		[adminId, adminPw, NOW()],
		function(err, rows){
			if(err) console.log(err);
			else    console.log(rows);
			callback(err, camelcaseKeys(rows));
		}
	);
};

/**
 * 관리자 정보 수정
 */
adminMb.prototype.updateAdminMb = function(query, callback) {
	var adminId = query.adminId;
	var adminPw = query.adminPw;
	var adminNo = query.adminNo;

	var sql = ' UPDATE tmp.ADMIN_MEMBER_MNG ' +
			' SET ID=?, PASSWORD=? ' +
			' WHERE ADMIN_NO = ? ';

	connection.query(
		sql,
		[adminId, adminPw, adminNo],
		function(err, rows){
			if(err) console.log(err);
			else    console.log(rows);
			callback(err, camelcaseKeys(rows));
		}
	);
};

/**
 * 관리자 정보 삭제
 */
adminMb.prototype.deleteAdminMb = function(query, callback){
    var adminNo = query.adminNo;

	var sql = ' DELETE FROM tmp.ADMIN_MEMBER_MNG WHERE ADMIN_NO = ? ';
	
	connection.query(
		sql,
		[adminNo],
		function(err, rows){
			if(err) console.log(err);
			else    console.log(rows);
			callback(err, camelcaseKeys(rows));
		}
	);
};

module.exports = new adminMb();