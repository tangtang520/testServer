/**
 * Created by tangtang on 14/11/22.
 */

//function doLogin(){
//    //var txt = $('#txt').val();
//    //var password = $('#pass').val();
//    //$.ajax({
//    //    type:"POST",
//    //    data:{txt:txt,password:password},
//    //    url:"/interface?command=login",
//    //    success:function(res){
//    //        if(res.code==0){
//    //            alert("没有注册")
//    //        }else{
//    //            window.location.href = 'http://localhost:8888/page?command=info'
//    //        }
//    //    }
//    //})
//}
function timeSet(){
    $('#test').text('');
}
//function close(){
//    $('#test').text('');
//}

function doMusic(){
    var mus = document.getElementById('music');
    var test = document.getElementById('text');
    console.log('tett--->>>',test);
    console.log('mus--->>>',mus);
    if(mus.paused){
        mus.play();
        //$('#test').attr('value','音乐开');

        $('#test').text('音乐开');
        var a = setTimeout(open,1*1000);
    }else{
        mus.pause();
        //$('#test').attr('value','音乐关')
        $('#test').text('音乐关');
        var a = setTimeout(open,1*1000);
    }

}