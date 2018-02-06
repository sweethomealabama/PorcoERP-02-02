/**
 * called in Calendar.js
 * @returns
 */	
function calendarShowHide(){	
	document.writeln("<script type='text/javascript' src='libCalendar/calendarShow.js'></script>");
	document.writeln("<script type='text/javascript' src='libCalendar/calendarShowMenu.js'></script>");
	document.writeln("<script type='text/javascript' src='libCalendar/calendarHide.js'></script>");
	document.writeln("<script type='text/javascript' src='libCalendar/calendarHideMenu.js'></script>");
	Calendar.prototype.show = calendarShow();
	Calendar.prototype.hide = calendarHide();
	Calendar.prototype.showMenu = calendarShowMenu(isyear);
	Calendar.prototype.hideMenu = calendarHideMenu();
}