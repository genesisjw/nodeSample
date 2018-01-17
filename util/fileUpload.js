var AWS = require('aws-sdk');   
var s3 = new AWS.S3();
var fs = require('fs');
var formidable = require('formidable');
var Upload = {};
AWS.config.region = 'ap-northeast-2'; //지역 서울 설정    
const ROOT_PATH = process.cwd();


/**  
  * formidable 모듈을 이용한 이미지 업로드
  */
Upload.formidable = (req, callback) => {
    let _fields;
    
    function FormidableInstance() {
      'use strict';
      let instance;
      FormidableInstance = function () {
        return instance;
      };
      
      instance = new formidable.IncomingForm({
        encoding: 'utf-8',
        multiples: true,
        keepExtensions: false,          //확장자 제거
        uploadDir: `${ROOT_PATH}/temp`  //업로드될 파일이 있는 곳
      });
      
      return instance
    }

const form = new FormidableInstance();

  form.parse(req, function (err, fields) {
    _fields = fields;
  });
  
  form.on('error', function (err) {
    callback(err, null, null);
  });
  
  form.on('end', function () {
    callback(null, this.openedFiles, _fields);
  });
};

/**  
  * 이미지 S3 업로드
  */
Upload.s3 = function (files, callback) {    
/**  
  * S3 버킷 설정
  */
  var params = {
    Bucket: 'testhello5', 
    Key: 'logo.png',      
    ACL: 'public-read',   
    Body: null    
};
    params.Key = 'test/'+files[0].name;     
    params.Body = require('fs').createReadStream(files[0].path);
    s3.upload(params, function (err, result) {
        callback(err, result);
    });
};

module.exports = Upload;