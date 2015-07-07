/**
 * Created by tangtang on 15/4/25.
 */
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost','info');
module.exports = db;
db.on('error',console.error.bind(console,'链接错误'));
