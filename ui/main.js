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
    
    var request= new XMLHttpRequest();
    
    request.onreadystatechange-function(){
        if(request.readystate=== XMLHttpRequest.DONE){
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                                        }
                                          }
                            };
   
   request.open('GET','http://larun22091974.imad.hasura-app.io/counter',true);
   request.send(null);
};

var nameInput= document.getElementById('name');
var name = nameInput.value;
var submit= document.getElementById('submit_btn');
submit.onclick= function(){
    var names=['nn1','nn2','nn3'];
    var list='';
    for(var i=0; i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
   var ul= document.getElementById('namelist');
    ul.innerHTML=list
};