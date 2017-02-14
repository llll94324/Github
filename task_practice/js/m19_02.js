var list = document.getElementById("list");
var btn = document.getElementsByTagName("button");
var dataList = [];
var divColor = list.children;

function renderList () {
    list.innerHTML = "";
    for (var i = 0; i < dataList.length; i++) {
        var div = document.createElement('div');
        div.onclick = function(event){event.target.remove();};
        div.style.height = dataList[i] + "px";
        div.innerHTML = dataList[i];
        list.appendChild(div);
    }
}


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


function merge(left, right,i,interval) {
    var counter = left.length + right.length;
    /*mode1有層次效果印，後面會跑不出綠色效果*/
  /*  var start = setInterval(function(){
        var lock = 1;
        if(left.length && right.length && lock){
            dataList.splice(i,1, left[0] <= right[0] ? left.shift() : right.shift());
            i=i+1;
            renderList();
            lock = 0;
        }     
        if(!left.length || !right.length && lock) {
            if(left.length||right.length){
                dataList.splice(i,1, !right.length ? left.shift() : right.shift());
                i=i+1;
                renderList();    
            }
        }
        counter--;
        if(counter == 0) clearInterval(start);

    }, interval/64)*/
        

    /*mode2一次印*/
    while(counter){
        var lock = 1;
        if(left.length && right.length && lock){
            dataList.splice(i,1, left[0] <= right[0] ? left.shift() : right.shift());
            i=i+1;
            renderList();
            lock = 0;
        }     
        if(!left.length || !right.length && lock) {
            if(left.length||right.length){
                dataList.splice(i,1, !right.length ? left.shift() : right.shift());
                i=i+1;
                renderList();    
            }
        }
        counter--;
    }
    
};


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
    if(interval<64) interval = 64;
    dataList = [];
    var i = 0;
    var x = 1;
    for(var j = 0; j < list.childNodes.length; j++) dataList.push(parseInt(list.childNodes[j].innerHTML));
    
    var timer = setInterval(function(){

        var y=i+x*2;
        for(var z = i; z<y; z++){
            divColor[z].style.background = "green";
        }
        setTimeout(function(){
           merge(dataList.slice(i,i+x),dataList.slice(i+x,i+x*2),i,interval);
            i=i+x*2;
            if(i>=dataList.length){
                i=0;
                x=x*2;
            }
            if(x>=dataList.length){
                clearInterval(timer);
            } 
        
        },interval*0.75);

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
