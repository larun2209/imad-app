


        var i=0;
        var list=[];
        var enter= document.getElementById('enter_btn');
        enter.onclick= function(){
                var Input= document.getElementById('comments');
                var comments = Input.value;
                list[i]='<li>'+ comments + '</li>';
                var ul = document.getElementById('commentlist');
                ul.innerHTML= list;
                i++;
                
                var request = new XMLHttpRequest();
                
                request.onreadystatechange = function()
                {
                    if(request.readyState === XMLHttpRequest.DONE)
                    {
                        if (request.status=== 200)
                        {
                            var counterrxd= request.responseText;
                            var span= document.getElementById('counter'); 
                            span.innerHTML= counterrxd.toString();
                        }
                    }
                };
                
                request.open('GET','http://larun22091974.imad.hasura-app.io/counter',true);
                request.send(null);
                
               
                
                
            };