var list = document.getElementById("list");
var btn = document.getElementsByTagName("button");

function add(jj){
    var inputValue = document.getElementById("input").value;
    if(inputValue.match(/^\d+$/)){
        var div = document.createElement("div");
        div.onclick = function(event){event.target.remove();};
        div.style.height = inputValue + "px";
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

btn[4].onclick = function(){
    var interval = document.getElementById("interval").value;
    var div = list.children;
    var record = div.length;
    var i = 0;
    var timer = setInterval(function(){
        if (i==record-1) {
            i=0;
            record--; 
        }
        if(parseInt(div[i].innerHTML)>parseInt(div[i+1].innerHTML)){
            var temp = parseInt(div[i+1].innerHTML);
            div[i+1].style.height = parseInt(div[i].innerHTML)+"px";
            div[i+1].innerHTML = parseInt(div[i].innerHTML);
            div[i].style.height = temp+"px";
            div[i].innerHTML = temp;
        }
        if(record==1){
           clearInterval(timer); 
        }
        i++;
    }, interval);
}


btn[5].onclick = function(){
    var dataList = [];
    while(list.hasChildNodes()) list.removeChild(list.firstChild);
    for(var i = 0; i < 32; i++) dataList.push(Math.ceil(Math.random()*480)+20);
    for(var i = 0; i < dataList.length; i++){
        var div = document.createElement("div");
        div.onclick = function(event){event.target.remove();};
        div.style.height = dataList[i] + "px";
        div.innerHTML = dataList[i];
        list.appendChild(div);
    }

}