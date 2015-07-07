/**
 * Created by tangtang on 14/11/22.
 */
exports.action = function(req,res){
    var command=req.param('command');
    if(command!=null){
        this[command](req,res);
    }else{
//        res.redirect('page?command=index');
        res.end();
    }
};

//login = require('../bin/login').login;
//register = require('../bin/register').register;
//moneyInfo = require('../bin/moneyInfo').moneyInfo;
//saveInfo = require('../bin/saveInfo').saveInfo;
