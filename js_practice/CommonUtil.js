
//BH命名空間
var BH = {};



// Interface Class
BH.Interface = function (name,methods){
	if(arguments.length != 2){
		throw new Error('this instance interface constructor must be 2 length');
	}

	this.name = name;
	this.methodArr = [];
	for(var i = 0, length1 = methods.length; i < length1; i++){
		if(typeof methods[i] !== 'string'){
			throw new Error('the Interface method name is error');
		}
		this.methodArr.push(methods[i]);
	}

};

//Interface static method
BH.ensureImplements = function(object){
	if(arguments.length < 2){
		throw new Error('Interface.ensureImplements method constructor arguments must be >= 2');
	}
	for(var i = 1, length1 = arguments.length; i < length1; i++){
		var instanceInterface = arguments[i];
		if(instanceInterface.constructor !== BH.Interface){
			throw new Error('the arguments constructor not be Interface Class');
		}
		for(var j = 0, length2 = instanceInterface.methodArr.length; j < length2; j++){
			
			var methodName = instanceInterface.methodArr[j];
			console.log(methodName + ' method already vaild');
			if(!object[methodName] || typeof object[methodName] !== 'function'){
				throw new Error("'" + methodName + "'" + ' method is not found');
			}
		}
	}
};

BH.extend = function(sub,sup){
	var F = function(){};
	F.prototype = sup.prototype;
	sub.prototype = new F();
	sub.prototype.constructor = sub;
	sub.superClass = sup.prototype;

	if(sup.prototype.constructor == Object.prototype.constructor){
		sup.prototype.constructor = sup;
	}
}