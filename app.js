var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var md5 = require('MD5');
var adminRoutes = require('./routes/adminRoutes');
var interface = require('./routes/interface');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 8888);
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.session({secret: '1ebe1425ffd78fa360b1d26314670d34', cookie: { httpOnly: true,maxAge: 100 * 100 * 100000 }}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
//这句话必须加
app.use('/public',express.static(__dirname + '/public'));
app.use('/images',express.static(__dirname + '/images'));
//app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
//app.get('/', routes.index);
//app.get('/users', users.list);
app.all('/', adminRoutes.index);
app.all('/page', adminRoutes.action);
app.all('/interface',interface.action);

module.exports = app;
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
