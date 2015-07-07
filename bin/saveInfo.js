/**
 * Created by tangtang on 15/3/16.
 */
var ProcessDBProvider = require('../modules/DataProvider').PasspoadDBProvider;
var payInfoProvider = new ProcessDBProvider('payInfo');
exports.saveInfo = function(req,res){
  var name = req.param('name');
  var money = req.param('money');
  var date = req.param('date');
  var monerAll = money + '元';
  console.log('name--->>>',name);
  console.log('money---->>>',money);
  payInfoProvider.insert({name:name,money:monerAll,date:date},{},function(err,result){
    if(err){
        console.log(err);
    }else{
      res.send({code:0});
    }
  })
}
