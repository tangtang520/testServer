/**
 * Created by tangtang on 15/5/30.
 */
var mongoose = require('mongoose')
var db = mongoose.createConnection('localhost','appleData')
var infoSchema = new mongoose.Schema({
  name:String,
  password:String,
  againPassword:String,
  sex:String,
  date:String
})
var infoModel = db.model("perosonInfo",infoSchema)
module.exports = exports = infoModel
