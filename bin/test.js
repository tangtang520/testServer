///**
// * Created by tangtang on 15/4/26.
// */

//var mongoose = require("mongoose");//引用模块
//var db = mongoose.createConnection('localhost','test'); //创建一个数据库
//db.on('error',console.error.bind(console,'连接错误'));
//db.once('open',function() {
//    //一次打开记录
//    var PersonSchema = new mongoose.Schema({
//      name: String,
//      age: Number,
//      type:String
//    });
//  var PersonModel = db.model('person',PersonSchema);
//
//    PersonSchema.methods.speak = function () {
//      //console.log('我的名字叫' + this.name + ' 我的年龄是：' + this.age);
//    }
//    var PersonModel = db.model('person', PersonSchema);
//    var personEntity1 = new PersonModel({name: 'jj', age: 23,type:'haha'});
//    var personEntity2 = new PersonModel({name:'tt',age:22,type:'haha'});
//    personEntity.speak();
//    personEntity.save();
//
//    //PersonSchema.methods.findSimilarType = function(cb){
//    //  return this.model('Person').find({name:'jj',type:'haha'});
//    //  jj.findSimilarType(function(err,persons){
//
//
//
//  });


