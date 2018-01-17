var mysql = require('mysql');
var camelcaseKeys = require('camelcase-keys');
var dbPool = require('../util/dbPool');
var connection = dbPool.init();

function adminTp() {
}

/**
 *  관리자 토픽 리스트
 */
adminTp.prototype.selectAdminTpList = function(callback) {
	var sql = 'SELECT TITLE, ADD_ID, ADD_DATE FROM tmp.ADMIN_MNG';

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
 * 관리자 토픽 등록
 */
adminTp.prototype.insertAdminTp = function(query, callback) {
    var adminId = query.adminId;
    var addId = query.addId;
    var updateId = query.updateId;
    var updateDate = query.updateDate;
    var contents = query.contents;
    var title = query.title;
    var exposeYn = query.exposeYn;

    var sql = ' INSERT INTO tmp.ADMIN_MNG (ADMIN_NO, UPDATE_DATE, CONTENTS, ADD_DATE, UPDATE_ID, ADD_ID, TITLE, EXPOSE_YN) ' +
			' VALUES ((SELECT ADMIN_NO FROM ADMIN_MEMBER_MNG WHERE ID = ?), ?, ?, ?, ?, ?, ?, ?)';
			
	connection.query(
		sql,
		[adminId, udpateDate, contents, NOW(), updateId, addId, title, exposeYn],
		function(err, rows){
			if(err) console.log(err);
			else    console.log(rows);
			callback(err, camelcaseKeys(rows));
		}
	);
};

/**
 * 관리자 토픽 수정
 */
adminTp.prototype.updateAdminTp = function(query, callback) {
    var title = query.title;
    var contents = query.contents;
    var updateDate = query.updateDate;
    var updateId = query.updateId;
    var exposeYin = query.exposeYn;
    var adminBoareId = query.adminBoareId;

    var sql = ' UPDATE tmp.ADMIN_MNG ' +
				' SET TITLE=?, CONTENTS = ?, UPDATE_DATE = ?, UPDATE_ID = ?, EXPOSE_YN = ? ' +
				' WHERE ADMIN_BOARD_ID = ?';

	connection.query(
		sql,
		[title, contents, udpateDate, updateId, exposeYn, adminBoareId],
		function(err, rows){
			if(err) console.log(err);
			else    console.log(rows);
			callback(err, camelcaseKeys(rows));
		}
	);
};

/**
 * 관리자 토픽 삭제
 */
adminTp.prototype.deleteAdminTp = function(query, callback){
    var adminBoardId = query.adminBoardId;

	var sql = 'DELETE FROM tmp.ADMIN_MNG WHERE ADMIN_BOARD_ID = ?';
	
	connection.query(
		sql,
		[adminBoardId],
		function(err, rows){
			if(err) console.log(err);
			else    console.log(rows);
			callback(err, camelcaseKeys(rows));
		}
	);
};

module.exports = new adminTp();