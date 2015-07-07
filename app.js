var express = require('express');
var http = require('http');
var path = require('path');
var wechat = require('wechat');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var adminRoutes = require('./routes/adminRoutes');
var interface = require('./routes/interface');
var app = express();
//设置配置信息
var config = {
  token: 'tangtang',
  appid: 'wx78a6a6ceff29e2e3',
  encodingAESKey: 'c7vMTp8uwJ0asRwcfi2RsDv4sV962HvaodqemIKWSJR'
};
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 12333);
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use('/comment',express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
//这句话必须加
app.use("/public", express.static(__dirname + '/public'));
//微信内容
app.use(express.query());
app.use('/wechat',wechat(config,function(req,res,next){
  var message = req.weixin
  console.log("message--->>>",message)
}))
//app.get('/', routes.index);
//app.get('/users', users.list);
app.all('/', adminRoutes.index);
app.all('/page', adminRoutes.action);
app.all('/interface',interface.action);

module.exports = app;
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
