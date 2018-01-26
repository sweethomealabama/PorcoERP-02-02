/**
 * called in pages.js
 * @returns
 */
function clickEventFirst(){
	document.writeln("<script type='text/javascript' src='clickEventLast.js'></script>");
	document.writeln("<script type='text/javascript' src='firstPreFun.js'></script>");

	$("#fir").click(firstFun());
	$("#pre").click(preFun());
	
}