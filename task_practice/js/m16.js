/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
 /*
function addAqiData() {

    
    
}
*/
/**
 * 渲染aqi-table表格
 */
/* 
function renderAqiList() {
    
}
*/
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */

/*
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}
*/

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
 /*
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city];
  renderAqiList();
}
*/
function init() {
    var aqiData = {};
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var btn = document.getElementById("add-btn");
    btn.onclick = function(){
    //  addAqiData();
    //  renderAqiList();
    var city = document.getElementById("aqi-city-input").value.trim();
    var value = document.getElementById("aqi-value-input").value.trim();


    if(!city.match(/^[A-Za-z\u4E00-\u9FA5ns*r ]+$/)){
        alert("請輸入中文或英文名稱");
        return;
    }
    if(!value.match(/^\d+$/)){
        alert("請輸入正整數");
        return;
    }

    aqiData[city] = value;
    var result = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for (var x in aqiData) {
        // statement
        result += "<tr><td>" + x +"</td><td>" + aqiData[x] + "</td><td><button id = '" + x + "'>删除</button></td></tr>";
    }
    
    document.getElementById("aqi-table").innerHTML = x ? result : "";
  }
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    /* 換種寫法而已
    document.getElementById("aqi-table").addEventListener("click",function(event){
    if(event.target.nodeName === 'BUTTON') delBtnHandle(event.target.id);
  });
  */
  var del_btn = document.getElementById("aqi-table");
  del_btn.onclick = function(event){
    if(event.target.nodeName === 'BUTTON') { //delBtnHandle(event.target.id);
        delete aqiData[event.target.id];
       // renderAqiList();
        event.target.parentElement.parentElement.remove();
    }
  };

}

init();
