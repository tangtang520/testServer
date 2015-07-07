/**
 * Created by tangtang on 15/5/31.
 */
var infoModel = require('../model/common.js')
exports.findAllInfo = function(req,res){
  infoModel.find({},'name password',function(err,result){
    if(err){
      console.log(err)
    }else{
      if(result==""){
        res.send({code:0,message:"数据库为空"})
      }else{
        res.send({code:1,message:"返回所有数据",result:result})
      }
    }

  })
}
