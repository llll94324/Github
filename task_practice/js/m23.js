var timer = null;
var oBtns = document.getElementsByTagName("button");
var rootNode = document.getElementById("root");
var lock = false;
var BFindex = 0;//广度优先遍历自增标识符


// 深度优先遍历
function traverseDF(node,nodeList){
	if(node){
		nodeList.push(node);
		for(var i=0;i<node.children.length;i++){
			traverseDF(node.children[i],nodeList);
		}	
	}
}

//广度优先遍历
function traverseBF(node, nodeList) {;
	if (node) {
		nodeList.push(node);
		traverseBF(node.nextElementSibling, nodeList);
		node = nodeList[BFindex++];
		traverseBF(node.firstElementChild, nodeList);
	}
}

//渲染动画，有文本传入则可执行搜索
function traverseRender(nodeList,foundText){
	var i = 0;
	var len = nodeList.length;
	lock = true;
	timer = setInterval(function(){
		if(i<len){
			if(i>0)nodeList[i-1].className = "";
			if(nodeList[i].firstChild.nodeValue.trim() == foundText){
				nodeList[i].className = "found";
				lock = false;
				clearInterval(timer);
			}
			else{
				nodeList[i++].className = "active";
			}	
		}
		else{
			nodeList[i-1].className = "";
			lock = false;
			clearInterval(timer);
		}

	},100);
}


function traverse(traverseIndex){
	var Nodelist = [];
	switch(traverseIndex){
		case 0:traverseDF(rootNode,Nodelist);
			break;
		case 1:BFindex = 0;
			   traverseBF(rootNode,Nodelist);
			break;
		case 2:var foundText = document.getElementsByTagName("input")[0].value;
			   traverseDF(rootNode,Nodelist);
			break;
		case 3:BFindex = 0;
			   var foundText = document.getElementsByTagName("input")[0].value;
			   traverseBF(rootNode,Nodelist);
			break;
	}
	resetBG();
	traverseRender(Nodelist,foundText);
}

//绑定按钮事件
function init(){
	for(var i=0;i<oBtns.length;i++){
		(function(i){
			oBtns[i].onclick = function(){
				if(lock === true){
					alert("正在遍历中!");
				}
				else{
					traverse(i);
				}	
			};
		}(i));
	}
}

// 重置所谓节点样式
function resetBG(){
	var nodeList = [];
	traverseDF(rootNode,nodeList);
	for(var i=0;i<nodeList.length;i++){
		nodeList[i].className = "default";
	}
}

init();