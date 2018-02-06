/**
 * Calendar.js
 */
document.writeln("<script type='text/javascript' src='callFun.js'></script>");
document.writeln("<script type='text/javascript' src='callFun2.js'></script>");
document.writeln("<script type='text/javascript' src='callFun3.js'></script>");

callFun();
callFun2();
callFun3();

Calendar(objName);

Calendar.prototype.toString = calendarToString();
Calendar.prototype.getStyle = calendarGetStyle();
Calendar.prototype.getHeader = calendarGetHeader();
getBodyFun();

CalendarSecond();




