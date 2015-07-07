/**
 * Created by tangtang on 15/4/28.
 */
var models = require('../model/saveInfo.js');
exports.getInfo = function(req,res){
  console.log('1121222');
  var name = req.param('name');
  var pass = req.param('pass');
  //第一种查询
  //models.findOne({name:name},'name pass',function(err,result){
  //  //console.log('数据库操作进来了');
  //    if(err){
  //
  //    }else if(result==null){
  //      console.log('111');
  //      res.send({code:1})
  //    }else{
  //      console.log('result--->>>',result);
  //      if(result.pass == pass){
  //        res.send({code:0,result:result})
  //      }else{
  //       res.send({code:2});
  //      }
  //    }
  //})
  //第二中查询
  var query = models.findOne({});
  query.where('name').equals(name)
  .select('name pass')
    .exec(function(err,result){
      if(err){

      }else if(result == null){

      }else{
        console.log('result--->>>',result);
      }
    })
}
