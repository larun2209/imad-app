//console.log('Loaded!');
//var element = document.getElementById('main-text');
//element.innerHTML='New value';
//var img = document.getElementById('madi');
//var marginLeft=0;
//function moveRight(){
  //  marginLeft=marginLeft+1;
    //img.style.marginLeft=marginLeft+'px';
//}
//img.onclick=function(){
  //  var interval= setInterval(moveRight,50);
    //img.style.marginLeft ='100px';
//};

var button = document.getElementById('counter');

button.onclick =function(){
    var request=new XMLhttpRequest();
    request.onreadystatechange-function(){
        if(request.readystate=== XMLHttpRequest.DONE){
            if (request.status ===200){
                var counter = request.responseText;
                var span= document.getElementById('count');
                span.innerHTML= counter.toString();
                                        }
                                          }
                            };
   
    
};