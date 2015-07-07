/**
 * Created by tangtang on 14/11/22.
 */
var path = require('path');
exports.index=function(req,res){
    res.redirect('page?command=info');
    res.end();
}
exports.action = function(req,res){
    var command = req.param('command');
    if(command == null){

    }else{
        this[command](req,res);
    }
}

info=function(req,res){
    res.sendfile(path.join(__dirname,'../views/info.html'));
}
