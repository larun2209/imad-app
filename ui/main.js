


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
            };