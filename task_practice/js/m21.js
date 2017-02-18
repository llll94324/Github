var element = document.getElementById("tag");
var show = document.getElementById("tagContainer");
element.addEventListener("keyup",function(event){
	//show.innerHTML = event.keyCode;
	var key = element.value.match(/[,，]/)? true : false;
	if(event.keyCode == 13||event.keyCode ==32||key){
		if(element.value.match(/^[^,， ]+/)){
			var key2 = true;
			for(var i = 0 ; i < show.childNodes.length; i++){
				if(element.value.match(/^[^,， ]+/)==show.childNodes[i].innerHTML){
					key2 = false;
					break;
				}
			}
			if(show.children.length>9){
				show.children[0].remove();
			}
			if(key2){
				var div = document.createElement("div");
				div.innerHTML = element.value.match(/^[^,， ]+/);
				div.onmouseover = function(event){
					event.target.innerHTML = "刪除：" + event.target.innerHTML;
					var temp = event.target.innerHTML;
				};
				div.onmouseout = function(event){event.target.innerHTML = event.target.innerHTML.slice(3);};
				div.onclick = function(event){event.target.remove();};
				show.appendChild(div);
			}
		}
		element.value = "";
	}
});

var element2 = document.getElementById("hobby");
var show2 = document.getElementById("hobbyContainer");
var btn = document.getElementById("confirm");
btn.onclick = function(){
	var data = element2.value.trim().match(/[^,， ]+/g);
	for(var i = 0; i < data.length; i++){
		var key2 = true;
		for(var j = 0 ; j < show2.childNodes.length; j++){
			if(data[i]==show2.childNodes[j].innerHTML){
				key2 = false;
				break;
			}
		}
		if(show2.children.length>9){
			show2.children[0].remove();
		}
		if(key2){
			var div = document.createElement("div");
			div.innerHTML = data[i];
			div.onmouseover = function(event){
				event.target.innerHTML = "刪除：" + event.target.innerHTML;
				var temp = event.target.innerHTML;
			};
			div.onmouseout = function(event){event.target.innerHTML = event.target.innerHTML.slice(3);};
			div.onclick = function(event){event.target.remove();};
			show2.appendChild(div);
		}
		element2.value = "";
	}
};