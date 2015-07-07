/**
 * Created by tangtang on 15/3/16.
 */
//var formidable = require('formidable');
//var fs = require('fs-extra');
//var models = require('../model/saveInfo.js');
//exports.saveInfo = function(req,res){
//  var form = new formidable.IncomingForm();
//  form.parse(req,function(err,fields,files){
//    console.log('files--->>>',files);
//    console.log('fiel;ds----->>>',fields);
//    var imgPath = files.file.path;
//    var fileName = files.file.name;
//    var name = fields.name;
//    var money = fields.money;
//    //var loadPath = global.apkFile+name;
//    var loadPath = __dirname+'/../public/uploads/'+fileName;
//    console.log('lopayh-->>>',loadPath);
//    var infoEntity = new models({
//      name:name,
//      money:money
//    })
//    infoEntity.save();
//    fs.rename(imgPath,loadPath,function(err){
//      console.log('err',err);
//      res.send({code:0});
//    })
//  })
//}
