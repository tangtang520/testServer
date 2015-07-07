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
  console.log('command==>>>>>',command);
    if(command == null){
      res.end();
    }else{
        this[command](req,res);
      //console.log('a----->>>>',this[command](req,res));
    }
}
info = function(req,res){
    res.sendfile(path.join(__dirname,'../views/info.html'));
}
payInfo = function(req,res){
    res.sendfile(path.join(__dirname,'../views/payInfo.html'));
}
register = function(req,res){
  res.sendfile(path.join(__dirname,'../views/register.html'));
}
showInfo = function(req,res){
  res.sendfile(path.join(__dirname,'../views/showInfo.html'));
}
