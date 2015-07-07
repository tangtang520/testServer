/**
 * Created by tangtang on 14/11/22.
 */
exports.action = function(req,res){
    var command=req.param('command');
  console.log('command==>>>>>',command);
    if(command!=null){
        this[command](req,res);
    }else{
//        res.redirect('page?command=index');
        res.end();
    }
};


login = require('../bin/login').login;
doRegister = require('../bin/doRegister').doRegister;
moneyInfo = require('../bin/moneyInfo').moneyInfo;
saveInfo = require('../bin/saveInfo').saveInfo;
findPerson = require('../bin/findPerson').findPerson;
getInfo = require('../bin/showInfo').getInfo;

// 测试swift语言入库操作
insertData = require('../bin/insertData').insertData
// 查找用户名 密码
findInfo = require('../bin/findInfo').findInfo
//查询所有的用户名 密码
findAllInfo = require('../bin/findAllInfo').findAllInfo
//实现删除用户
deleteInfo = require('../bin/deleteInfo').deleteInfo
//上传图片
uploadImage = require('../bin/uploadImage').uploadImage

