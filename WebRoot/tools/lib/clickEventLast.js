/**
 * called in clickEventFirst.js
 * @returns
 */
function EventLast(){
	document.writeln("<script type='text/javascript' src='nextLastFun.js'></script>");
	$("#next").click(nextFun());
	$("#last").click(lastFun());
}