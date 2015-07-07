/**
 * Created by tangtang on 14/11/22.
 */
var ProcessDBProvider = require('../modules/DataProvider').PasspoadDBProvider;
var userProvider = new ProcessDBProvider('user');
exports.login = function(req,res){
    console.log("222");
    var txt = req.param('txt');
    var password = req.param('password');
    userProvider.findOne({txt:txt},{},function(err,result){
        if(err){

        }else{
            if(result==undefined){
                console.log("3333333");
                res.send({code:0});
            }else{
                if(result.password==password){
                    res.send({code:1});
                }else{

                }
            }
        }
    })
}
