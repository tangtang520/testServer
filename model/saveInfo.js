/**
 * Created by tangtang on 15/3/16.
 */
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost','register');
var infoSchema = new mongoose.Schema({
  name:String,
  pass:String
})
var models = db.model('registerInfo',infoSchema);
exports = module.exports = models;
