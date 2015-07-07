/**
 * Created by tangtang on 15/4/25.
 */
var db = require('../allMethods/allMethods.js');
exports.findPerson = function(req,res){
  var models = db.model('personInfo');
  var query = models.findOne();
  query.where('name').equals('小臂给')
    .select('name money')
    .exec(function(err,result){
      if(err){

      }else{
        console.log('result--->>>',result);
      }
    })
}
