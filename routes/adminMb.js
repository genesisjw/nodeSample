var express = require('express');
var router = express.Router();
var adminMbDb = require('../model/adminMb');

/**  
  * 관리자 정보 리스트
  * @route {POST} /adminMb/adminMbList
  */
router.all('/adminMbList', function(req, res) {
    adminMbDb.selectAdminMbList(function (err, rows) {
        res.send(rows);
    });
});

/**  
  * 관리자 정보 등록
  * @route {POST} /adminMb/adminMbAdd
  */
router.all('/adminMbAdd', function(req, res) {
    adminMbDb.insertAdminMb(req.query  , function(err, rows){
        res.send(rows);
    });
});

/**  
  * 관리자 정보 수정
  * @route {POST} /adminMb/adminMbUpdate
  */
router.all('/adminMbUpdate', function(req, res){
    adminMbDb.updateAdminMb(req.query, function (err, rows) {
        res.send(rows);
    })
})

/**  
  * 관리자 정보 삭제
  * @route {POST} /adminMb/adminMbDelete
  */
  router.all('/adminMbDelete', function(req, res){
    adminMbDb.deleteAdminMb(req.query, function (err, rows) {
        res.send(rows);
    })
})

module.exports = router;