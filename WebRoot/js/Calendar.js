document.writeln("<script type='text/javascript' src='libCalendar/calendarBindDate.js'></script>");	
document.writeln("<script type='text/javascript' src='libCalendar/calendarCheckHoliday.js'></script>");	
document.writeln("<script type='text/javascript' src='libCalendar/calendarGetBody.js'></script>");	
document.writeln("<script type='text/javascript' src='libCalendar/calendarGetBodyBar.js'></script>");	
document.writeln("<script type='text/javascript' src='libCalendar/calendarGetMonthMenu.js'></script>");
document.writeln("<script type='text/javascript' src='libCalendar/calendarGetPos.js'></script>");


Calendar(objName);

Calendar.prototype.toString = calendarToString();
Calendar.prototype.getStyle = calendarGetStyle();
Calendar.prototype.getHeader = calendarGetHeader();
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




PreviDay();

NextDay();

Calendar.prototype.bindDate = calendarBindDate(date);
Calendar.prototype.bindHeader = calendarBindHeader();	
Calendar.prototype.getToday = calendarGetToday();	
Calendar.prototype.onClick = calendarOnClick(obj);
Calendar.prototype.onChangeYear = calendarOnChangeYear(isnext);
Calendar.prototype.onChangeMonth = calendarOnChangeMonth(isnext);
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

mouseCoords(ev);

calendarGetPos(e);

getMouseOffset(target, ev);

function closeCalendar(evt){
	evt = evt || window.event; 
	var _target= evt.target || evt.srcElement; 
	if(!_target.getAttribute("Author") &&  _target != inputObj && _target != targetObj)
	{
		getObjById("Calendar").style.display = "none"; 	  
	}  
}

dragStart(evt);

drag(evt);
//拖动结束
dragEnd(evt);
/***********End 公用方法*********/
document.onclick = closeCalendar;
document.onmousedown = dragStart;
document.onmousemove = drag;
document.onmouseup = dragEnd;
/*********结束**********/
var c = new Calendar("c");
document.write(c);