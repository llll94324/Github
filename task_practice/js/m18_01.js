var list = document.getElementById("list");
var btn = document.getElementsByTagName("button");
function add(jj){
    var inputValue = document.getElementById("input").value;
    if(inputValue.match(/^\d+$/)){
        var div = document.createElement("div");
        div.onclick = function(event){
            event.target.remove();
        };
        div.innerHTML = inputValue;
        if(jj=="l") list.insertBefore(div,list.childNodes[0]);
        if(jj=="r") list.appendChild(div);
    }
    else alert("請輸入正整數");
}

//向左添加
btn[0].onclick = function(){add ("l") ;}
//向右添加
btn[1].onclick = function(){add ("r") ;}
//左邊移除
btn[2].onclick = function (){
    alert(list.childNodes[0].innerText);
    list.childNodes[0].remove();
}
//右邊移除
btn[3].onclick = function (){
    var last = list.childElementCount - 1;
    alert(list.childNodes[last].innerText);
    list.childNodes[last].remove();
}