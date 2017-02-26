var btn = document.getElementsByTagName('input'),
	preBtn = btn[0],
	inBtn = btn[1],
	postBtn = btn[2],
	BreadthBtn = btn[3],
	treeRoot = document.getElementsByClassName('root')[0],
	divList = [],
	timer = null;
window.onload = function (){
	preBtn.onclick = function () {
		reset();
		preOrder(treeRoot);
		changeColor();
	}
	inBtn.onclick = function () {
		reset();
		inOrder(treeRoot);
		changeColor(); 	
	}
	postBtn.onclick = function () {
		reset();
		postOrder(treeRoot);
		changeColor();
	}
	BreadthBtn.onclick = function () {
		reset();
		breadth(treeRoot);
		changeColor();
	}
}

//前序遍历
function preOrder(node) {
	if (!(node == null)) {
		divList.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
	}
}

//中序遍历
function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.firstElementChild);
		divList.push(node);
		inOrder(node.lastElementChild);
	}
}

//后序遍历
function postOrder(node) {
	if (!(node == null)) {
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		divList.push(node);
	}
}
var bb = 0;
//廣度
function breadth(node) {
	if (!(node == null)) {
		divList.push(node);
		breadth(node.nextElementSibling);
		node = divList[bb++];
		breadth(node.firstElementChild);
	}
}

//颜色变化函数
function changeColor() {
	var i = 0;
	timer = setInterval(function () {
		
		if (i < divList.length) {
			divList[i].style.backgroundColor = 'blue';
			if(i>0) divList[i-1].style.backgroundColor = '#696969';
		} else {
			clearInterval(timer);
			divList[i-1].style.backgroundColor = '#696969';
		}
		i++;
	},333)
}

//初始化样式
function reset() {
	divList = [];
	bb = 0;
	clearInterval(timer);
	var divs = document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = '#696969';
	}
}