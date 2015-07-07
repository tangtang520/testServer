/**
 * Created by tangtang on 15/4/28.
 */
var models = require('../model/saveInfo.js');
exports.doRegister = function(req,res){
  console.log('进来了');
  var name = req.param('name');
  var pass = req.param('pass');
  var againPass = req.param('againPass');
  console.log(name,pass,againPass);
  models.findOne({name:name},'name pass',function(err,result){
    //console.log('数据库操作进来了');
    if(err){

    }else if(result==null){
      console.log('111');
      var infoEntity = new models({
        name:name,
        pass:pass
      })
      infoEntity.save(function(err){
        if(err){
          console.log(err);
        }else{
          res.send({code:0});
        }
      });
    }else{
      console.log('result--->>>',result);
      res.send({code:1})
    }
  })
}
