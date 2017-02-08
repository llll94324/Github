var list = document.getElementById("list");
var btn = document.getElementsByTagName("button");

btn[0].onclick = function (){
    var inputValue = document.getElementById("input").value;
    if(inputValue.match(/^\d+$/)){
        var div = document.createElement("div");
        div.onclick = function(event){
            event.target.remove();
        };
        div.innerHTML = inputValue;
        list.insertBefore(div,list.childNodes[0]);
    }
    else alert("請輸入正整數");
}

btn[1].onclick = function (){
    var inputValue = document.getElementById("input").value;
    if(inputValue.match(/^\d+$/)){
        var div = document.createElement("div");
        div.onclick = function(event){
            event.target.remove();
        };
        div.innerHTML = inputValue;
        list.appendChild(div);
    }
    else alert("請輸入正整數");
}

btn[2].onclick = function (){
    alert(list.childNodes[0].innerText);
    list.childNodes[0].remove();

}

btn[3].onclick = function (){
    var last = list.childElementCount - 1;
    alert(list.childNodes[last].innerText);
    list.childNodes[last].remove();
}

