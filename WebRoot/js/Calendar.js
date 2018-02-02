function Calendar(objName){		
	this.style = {
			borderColor       		: "#909eff", //边框颜色
			headerBackColor    		: "#97d645", //表头背景颜色909EFF
			headerFontColor    		: "#ffffff", //表头字体颜色
			bodyBarBackColor  		: "#f4f4f4", //日历标题背景色
			bodyBarFontColor  		: "#000000", //日历标题字体色
			bodyBackColor     		: "#ffffff", //日历背景色
			bodyFontColor           : "#000000", //日历字体色 
			bodyHolidayFontColor    : "#ff0000", //假日字体色
			watermarkColor 		    : "#888888", //背景水印色
			moreDayColor            : "#cccccc" 
	};

	this.showMoreDay = true; //是否显示上月和下月的日期
	this.Obj = objName;		
	this.date = null;
	this.mouseOffset = null;
	this.dateInput = null;
	this.timer = null;	

};

Calendar.prototype.toString = function()
{   
	var str = this.getStyle();
	str += '<div Author="alin" class="calendar" style="display:none;" onselectstart="return false" oncontextmenu="return false" id="Calendar">\n';
	str += '<div Author="alin" class="cdrWatermark" id="cdrWatermark"></div><div id="cdrBody" style="position:absolute;left:0px;top:0px;z-index:2;width:140px;">';
	str += this.getHeader();
	str += this.getBody();   
	str += '</div><div Author="alin" id="cdrMenu" style="position:absolute;left:0px;top:0px;z-index:3;display:none;"  onmouseover="' + this.Obj + '.showMenu(null);" onmouseout="' + this.Obj + '.hideMenu();"></div></div>';
	return str;
};
Calendar.prototype.getStyle = function()
{
	var str = '<style type="text/css">\n';
	str += '.calendar{position:absolute;width:140px!important;width /**/:142px;height:184px!important;height /**/:174px;background-color:'+this.style.bodyBackColor+';border:1px solid ' + this.style.borderColor + ';left:0px;top:0px;z-index:9999;}\n';
	str += '.cdrHeader{background-color:'+ this.style.headerBackColor +';width:140px;height:22px;font-size:12px;color:'+this.style.headerFontColor+';}\n';
	str += '.cdrWatermark{position:absolute;left:0px;top:55px;width:140px;font-family: 黑体;font-size:70px;color:'+this.style.watermarkColor+';z-index:1;text-align:center;}\n';
	str += '.cdrBodyBar{background-color:' + this.style.bodyBarBackColor + ';font-size:12px;color:' + this.style.bodyBarFontColor + ';width:140px;height:20px;}\n';
	str += '.cdrBody{width:140px;height:122px!important; height /**/:110px;font-size:12px;cursor:pointer;color:' + this.style.bodyFontColor + ';}\n';
	str += '.dayOver{height:16px;padding:0px;border:1px solid black;background-color:#f4f4f4;}\n';
	str += '.dayOut{padding:1px;border:none;height:16px;}\n';
	str += '.menuOver{background-color:'+this.style.headerBackColor+';color:'+this.style.headerFontColor+';font-size:12px;}\n';
	str += '.headerOver{border:1px solid black;background-color:#f4f4f4;color:black;cursor:default;}\n';
	str += '.cdrMenu{font-size:12px;border:1px solid #000000;background-color:#ffffff;cursor:default;width:100%}\n';
	str += 'html>body #Calendar{width:142px;174px;}';
	str += '</style>\n';	
	return str;
};
Calendar.prototype.getHeader = function()
{
	var str = '<table Author="alin" class="cdrHeader" cellSpacing="2" cellPadding="0"><tr Author="alin" align="center">\n';
	str += '<td Author="alin" onmouseover="this.className=\'headerOver\'" onmouseout="this.className=\'\'" id="previousYear" title="上一年份" style="cursor:pointer;width:10px;" onclick="'+this.Obj+'.onChangeYear(false);"><<</td>\n';
	str += '<td Author="alin" onmouseover="this.className=\'headerOver\'" onmouseout="this.className=\'\'" id="previousMonth" title="上一月份" style="cursor:pointer;width:10px;" onclick="'+this.Obj+'.onChangeMonth(false);"><</td>\n';
	str += '<td Author="alin" onmouseover="this.className=\'headerOver\'" id="currentYear" style="width:50px;" onclick="' + this.Obj + '.showMenu(true);" onmouseout="' + this.Obj + '.hideMenu();this.className=\'\';">0</td>\n';
	str += '<td Author="alin" onmouseover="this.className=\'headerOver\'" id="currentMonth" onclick="' + this.Obj + '.showMenu(false);" onmouseout="' + this.Obj + '.hideMenu();this.className=\'\';">0</td>\n';
	str += '<td Author="alin" onmouseover="this.className=\'headerOver\'" onmouseout="this.className=\'\'" id="nextMonth" title="下一月份" style="cursor:pointer;width:10px;" onclick="'+this.Obj+'.onChangeMonth(true);">></td>\n';
	str += '<td Author="alin" onmouseover="this.className=\'headerOver\'" onmouseout="this.className=\'\'" id="nextYear" title="下一年份" style="cursor:pointer;width:10px;" onclick="'+this.Obj+'.onChangeYear(true);">>></td></tr>\n';
	str += '</table>\n';
	return str;
};
Calendar.prototype.getBody = calendarGetBody();
Calendar.prototype.getBodyBar = calendarGetBodyBar();
Calendar.prototype.getYearMenu = calendarGetYearMenu(year);
Calendar.prototype.getMonthMenu = calendarGetMonthMenu();
Calendar.prototype.show = calendarShow();


Calendar.prototype.hide = function()
{
	var obj = getObjById("Calendar");
	obj.style.display = "none";   
};


calendarCheckHoliday();

function PreviDay(){

	_previDate = new Date(_year,_month - 1,_previDay);
	_dayElement.innerHTML = _previDay;
	_dayElement.title = _previDate.toFormatString("yyyy年mm月dd日");
	_dayElement.value = _previDate.toFormatString("-");	
	_dayElement.style.color = this.style.moreDayColor;	
	_previDay++;
}

function NextDay(){

	_nextDate = new Date(_year,_month + 1,_nextDay);
	_dayElement.innerHTML = _nextDay;
	_dayElement.title = _nextDate.toFormatString("yyyy年mm月dd日");
	_dayElement.value = _nextDate.toFormatString("-");
	_dayElement.style.color = this.style.moreDayColor;	
	_nextDay++;		
}

Calendar.prototype.bindDate = calendarBindDate(date);
Calendar.prototype.bindHeader = function()
{
	var _curYear = getObjById("currentYear");
	var _curMonth = getObjById("currentMonth");
	var _watermark = getObjById("cdrWatermark");
	_curYear.innerHTML = this.date.toFormatString("yyyy年");
	_curMonth.innerHTML =  this.date.toFormatString("mm月");
	_watermark.innerHTML = this.date.getFullYear();     
};	
Calendar.prototype.getToday = function()
{
	var _date = new Date();
	this.bindDate(_date.toFormatString("-"));
};	
Calendar.prototype.isHoliday = function(year,month,date)
{
	var _date = new Date(year,month,date);
	return (_date.getDay() == 6 || _date.getDay() == 0);
};
Calendar.prototype.onMouseOver = function(obj)
{
	obj.className = "dayOver";
};
Calendar.prototype.onMouseOut = function(obj)
{
	obj.className = "dayOut";
};	
Calendar.prototype.onClick = function(obj)
{  
	if(obj.innerHTML != "")  this.dateInput.value = obj.value;
	this.hide();
	//自定义真值隐藏元素组件赋值
	//当前组件为targetObj
	//获取真值隐藏元素组件
	var realValueObject = targetObj.nextSibling.nextSibling;
	//将显示结果obj.value格式化为long值
	var dates = obj.value.split("-");
	var tempDate = new Date(dates[0],dates[1]-1,dates[2]);
	//将值放入隐藏组件
	realValueObject.value = tempDate.getTime();

};
Calendar.prototype.onChangeYear = function(isnext)
{
	var _year = this.date.getFullYear();
	var _month = this.date.getMonth() + 1;
	var _date = this.date.getDate();
	if(_year > 999 && _year <10000)
	{
		if(isnext){_year= _year + 1;}else{ _year = _year - 1;}
	}
	else
	{
		alert("年份超出范围（1000-9999）!");
	}
	this.bindDate(_year + '-' + _month + '-' + _date);
};
Calendar.prototype.onChangeMonth = function(isnext)
{
	var _year = this.date.getFullYear();
	var _month = this.date.getMonth() + 1;
	var _date = this.date.getDate();
	if(isnext){ _month= _month + 1;} else {_month= _month - 1;}
	if(_year > 999 && _year <10000)
	{ 
		if(_month < 1) {_month = 12; _year= _year -1;}
		if(_month > 12) {_month = 1; _year= year + 1;}
	}
	else
	{
		alert("年份超出范围（1000-9999）!");
	}  
	this.bindDate(_year + '-' + _month + '-' + _date);
};
Calendar.prototype.showMenu = calendarShowMenu(isYear);

Calendar.prototype.hideMenu = calendarHideMenu();

Nan0Mod = function()
{

	//	return isNaN(this) ? 0 : this;
	if(isNaN(this)){
		return 0;
	}else{
		return this;
	}

}
ToFormatStringMod = calendarToFormatString(fs);
/************公用方法及变量**************/
var inputObj = null; 
var targetObj = null;	
var dragObj = null; 
var mouseOffset = null; 
function getObjById(obj)
{
	if(document.getElementById)
	{
		return document.getElementById(obj);
	}
	else
	{
		alert("浏览器不支持!");
	}
}
function mouseCoords(ev)
{
	if(ev.pageX || ev.pageY){
		return {x:ev.pageX, y:ev.pageY};
	}
	return {
		x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
		y:ev.clientY + document.body.scrollTop  - document.body.clientTop
	};
}

calendarGetPos(e);

function getMouseOffset(target, ev)
{
	ev = ev || window.event;
	var docPos    = calendarGetPos(target);
	var mousePos  = mouseCoords(ev);
	return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
}
function closeCalendar(evt){
	evt = evt || window.event; 
	var _target= evt.target || evt.srcElement; 
	if(!_target.getAttribute("Author") &&  _target != inputObj && _target != targetObj)
	{
		getObjById("Calendar").style.display = "none"; 	  
	}  
}
function dragStart(evt){
	evt = evt || window.event;	
	var _target= evt.target || evt.srcElement;
	if(_target.getAttribute("Author") == "alin_bar") 
	{	   
		dragObj = getObjById("Calendar");	   
		mouseOffset = getMouseOffset(dragObj, evt);	 
	}   
}
function drag(evt)
{
	evt =  evt || window.event;	
	if(dragObj)
	{		  
		var mousePos = mouseCoords(evt); 
		dragObj.style.left = (mousePos.x - mouseOffset.x) + 'px';
		dragObj.style.top  = (mousePos.y - mouseOffset.y) + 'px';	  
	}
}
//拖动结束
function dragEnd(evt)
{
	dragObj = null;    
}
/***********End 公用方法*********/
document.onclick = closeCalendar;
document.onmousedown = dragStart;
document.onmousemove = drag;
document.onmouseup = dragEnd;
/*********结束**********/
var c = new Calendar("c");
document.write(c);