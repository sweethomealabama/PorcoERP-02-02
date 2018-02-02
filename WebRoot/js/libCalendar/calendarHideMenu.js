/**
 * called in Calendar.js
 * @returns
 */
function calendarHideMenu()
{
	var _obj = getObjById("cdrMenu");
	this.timer = window.setTimeout(function(){_obj.style.display='none';},500);	
}