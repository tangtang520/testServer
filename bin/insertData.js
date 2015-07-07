/**
 * Created by tangtang on 15/5/30.
 */
var commonjs = require('../model/common.js')
exports.insertData = function(req,res){
  console.log("进来了")
  var name = req.param('name')
  var password = req.param('password')
  var againPassword = req.param('againPassword')
  var sex = req.param('sex')
  var date = req.param('date')
  console.log("name---->>",name)
  console.log("password--->>>",password)
  commonjs.findOne({name:name},'',function(err,result){
      if(err){
        console.log(err)
      }else{
        if(result==undefined){
          var personEntity = new commonjs({
            name:name,
            password:password,
            againPassword:againPassword,
            sex:sex,
            date:date
          })
          personEntity.save(function(err,result){
            if(err){
              console.log(err)
            }else{
              res.send({code:1,message:'注册成功'})
            }
          })
        }else{
          res.send({code:2,message:'用户已存在，不可以注册'})
        }
      }
  })
}
