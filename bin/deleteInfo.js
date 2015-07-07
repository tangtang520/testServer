/**
 * Created by tangtang on 15/5/31.
 */
var infoModel = require('../model/common.js')
exports.deleteInfo= function(req,res){
  console.log("删除操作")
  var name = req.param('name')
  console.log("name--->>>",name)
  infoModel.remove({name:name},function(err,result){
    console.log("数据库删除")
    if(err){
      console.log("err")
    }else{
      res.send({code:0,message:"删除成功返回code0"})
    }
  })
}
