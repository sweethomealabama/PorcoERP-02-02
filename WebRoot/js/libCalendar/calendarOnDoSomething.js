/**
 * called in Calendar.js
 * @returns
 */
function calendarOnDoSomething(){	
	document.writeln("<script type='text/javascript' src='libCalendar/calendarOnClick.js'></script>");
	document.writeln("<script type='text/javascript' src='libCalendar/calendarOnChangeMonth.js'></script>");
	document.writeln("<script type='text/javascript' src='libCalendar/calendarOnChangeYear.js'></script>");
	Calendar.prototype.onClick = calendarOnClick(obj);
	Calendar.prototype.onChangeYear = calendarOnChangeYear(isnext);
	Calendar.prototype.onChangeMonth = calendarOnChangeMonth(isnext);
}