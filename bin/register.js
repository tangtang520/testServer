/**
 * Created by tangtang on 14/11/22.
 */
var ProcessDBProvider = require('../modules/DataProvider').PasspoadDBProvider;
var userProvider = new ProcessDBProvider('user');
var md5 = require('MD5');
exports.register = function(req,res){
    console.log("1111");
    var txt = req.param('txt');
    var password = req.param('password');
    console.log("md5--",md5(txt));
    console.log("txt--->>>",txt);
    console.log("password--->>>",password);
    userProvider.insert({txt:txt,password:password},{},function(err,result){
        if(err){
            
        }else{
            if(result==""||result==undefined||result==null){
                res.send({code:1});
            }else{

            }
        }
    })
}