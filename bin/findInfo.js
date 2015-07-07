/**
 * Created by tangtang on 15/5/30.
 */
//var mongoose = require('mongoose')
//var db = mongoose.createConnection('localhost','appleData')
//var infoSchema = new mongoose.Schema({
//  name:String,
//  password:String
//})
//var infoModel = db.model("perosonInfo",infoSchema)
var commonjs = require('../model/common.js')
exports.findInfo = function(req,res){
  console.log("进来111")
  var name = req.param('name')
  var password = req.param('password')
  console.log('name--<<',name)
  console.log('password--->>',password)
  commonjs.findOne({name:name},{},function(err,result){
    if(err){
      console.log(err)
    }else{
      console.log(result)
      if(result==undefined){
        res.send({code:0,message:'没有此用户'})
      }else{
        if(result.password == password){
          res.send({code:1,message:'账号密码验证成功',result:result})
        }else{
          res.send({code:2,message:'密码错误'})
        }
      }
    }
  })

}
