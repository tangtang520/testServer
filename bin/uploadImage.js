/**
 * Created by tangtang on 15/6/3.
 */
var formidable = require('formidable')
var fs= require('fs-extra')
exports.uploadImage = function(req,res){
  console.log("上传图片进来")
  var form = new formidable.IncomingForm()
  form.parse(req,function(err,field,files){
    console.log("files--->>>",files)
    console.log("field--->>>",field)
    //文件路径
    var filePath = files.file.path
    //存放路径
    var loadPath = __dirname + "/../images/"+field.userName+".png"
    fs.rename(filePath,loadPath,function(err){
      if(err){
        console.log(err)
      }else{
        res.send({code:0,message:"存放成功"})
        console.log("存放成功")
      }
    })
  })

}
