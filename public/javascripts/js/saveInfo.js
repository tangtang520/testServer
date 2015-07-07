///**
// * Created by tangtang on 15/3/16.

//d

function isPlugin(name){
  var name = name.toLowerCase();
  for(var i=0;i<window.navigator.plugins.length;i++){
    if(name == window.navigator.plugins[i]){
      return true;
    }else{
      return false;
    }
  }
}
var a = isPlugin('quicktime');
console.log('a--->>>',a);
function saveInfo(){
  var a = window.navigator;
  console.log('a---->>>',a);
  //window.location.replace('http://www.baidu.com');
  //var file = document.getElementById('file').files[0];
  //var name = $('#name').val();
  //var money = $('#money').val();
  //console.log('file--->>>',file);
  //var fileUrl = '/interface?command=saveInfo';
  //var form = new FormData();
  //form.append('file',file);
  //form.append('name',name);
  //form.append('money',money);
  //var xhr = new XMLHttpRequest();
  //xhr.open('post',fileUrl,true);
  //xhr.onreadystatechange = function(){
  //  if(xhr.readyState == 4){
  //    if(xhr.status == 200){
  //      var resData = xhr.responseText;
  //      var jsons = JSON.parse(resData);
  //      console.log('jsons---->>',jsons);
  //    }
  //
  //  }
  //}
  //xhr.send(form);
}





