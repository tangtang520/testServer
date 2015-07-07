function register(){
  var name = document.getElementById('name').value;
  var pass = document.getElementById('pass').value;
  var againPass = document.getElementById('againPass').value;
  console.log('name--->>>',name);
  console.log('pass--->>>',pass);
  console.log('againPass--->>>',againPass);
  if((name || pass || againPass) == ''){
    alert('请完善内容');
  }else{
    if(pass == againPass){
      $.ajax({
        type:'post',
        data:{name:name,pass:pass,againPass:againPass},
        url:'/interface?command=doRegister',
        success:function(res){
            console.log('res--->>>',res);
          if(res.code == 0){
            alert('注册成功');
            window.location.href = '/page?command=showInfo'
          }else{
            alert('用户名已存在');
          }
        }
      })
    }else{
      alert('两次密码不相同');
    }
  }
}
