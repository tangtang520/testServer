/**
 * Created by tangtang on 15/1/4.
 */
var ProcessDBProvider = require('../modules/DataProvider').PasspoadDBProvider;
var payInfoProvider = new ProcessDBProvider('payInfo');
exports.moneyInfo = function(req,res){
  var txt = req.param('txt');
  console.log('txt--->>>',txt);
  payInfoProvider.find({name:new RegExp("^.*" + txt + ".*$")},{},function(err,result){
        if(err){

        }else{
            if(result==""){
                res.send({code:1})
            }else{
              res.send({code:0,result:result});
            }
        }
    })
}
