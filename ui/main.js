        var submitbtn= document.getElementById('submit_btnpwd');
        submitbtn.onclick= function(){
                console.log('hello');
                var usrname = document.getElementById('username').value;
                var pwd = document.getElementById('password').value;
                console.log(usrname);
                console.log(pwd);
                
                var request = new XMLHttpRequest();
                
                request.onreadystatechange = function()
                {
                    if(request.readyState === XMLHttpRequest.DONE)
                    {
                        if (request.status=== 200)
                        {
                            alert("user logged in successfully");
                        }
                        else if (request.status=== 403) 
                        {
                            alert("user name:password is incorrect");
                        }
                         else if (request.status=== 500) 
                        {
                            
                            alert("something went wrong on the server");
                        }
                    }
                };
                
                request.open('POST','http://larun22091974.imad.hasura-app.io/login',true);
                request.setRequestHeader("Content-Type","application/json");
                request.send(JSON.stringify({username:username,password:password}));
              
             
            };    
        
        
        
        
        
        
        
        var list='';
        var enter= document.getElementById('enter_btn');
        enter.onclick= function(){
                var Input= document.getElementById('comments');
                var comments = Input.value;
                list+='<li>'+ comments + '</li>';
                var ul = document.getElementById('commentlist');
                ul.innerHTML= list;
                
                
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