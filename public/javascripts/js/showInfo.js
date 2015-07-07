/**
 * Created by tangtang on 15/4/28.
 */
function showInfo(){
  var name = document.getElementById("name").value;
  var pass = document.getElementById("pass").value;
  console.log("name>---",name);
  console.log("pass>---",pass);
  if(name == ''||pass == ''){
    alert("请输入用户名密码");
  }else{
    $.ajax({
      type:'post',
      data:{name:name,pass:pass},
      url:'/interface?command=getInfo',
      success:function(res){
        //console.log('res--->>>',res);
        if(res.code == 1){
          alert('用户名不存在');
        }else if(res.code == 2){
          alert('密码不正确')
        }else{
          //todo 正确
          window.location.href = 'http://www.baidu.com'
        }
      }
    })
  }
}
