/**
 * Created by tangtang on 15/3/16.
 */
var name = window.location.search.substr(1).split('=')[1].split('&&')[0];
var type = window.location.search.substring(1).split('=')[2];
console.log('type-->>>',type);
console.log('name-->>>>',name);
$(document).ready(function(){
  comment('');
})

function findTxt(){
  var txt = $('#txt').val();
  comment(txt);
}
function comment(txt){
  $.ajax({
    type:"POST",
    data:{txt:txt},
    url:"/interface?command=moneyInfo",
    success:function(res){
      console.log('res--->>>',res);
      if(res.code==1){
        alert('没有查到相关信息');
      }else{
        console.log("result-=-=-=>",res.result);
        $('#table').empty();
        var tableHead = "<tr>"+
          "<th>捐款人</th>"+
          "<th>捐款金额</th>"+
          "</tr>"
        $('#table').append(tableHead);
        for(var i=0;i<res.result.length;i++){
          var allMenu = "<tr>"+
            "<td>"+res.result[i].name+"</td>"+
            "<td>"+res.result[i].money+"</td>"+
            "</tr>"
          $('#table').append(allMenu);
        }
      }
    }
  })
}
