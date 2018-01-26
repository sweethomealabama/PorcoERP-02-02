/**
 * called in pages.js
 * @returns
 */
function clickEvent(){
	document.writeln("<script type='text/javascript' src='nexLastFun.js'></script>");
	document.writeln("<script type='text/javascript' src='firstPreFun.js'></script>");

	$("#fir").click(firstFun());
	$("#pre").click(preFun());
	$("#next").click(nextFun());
	$("#last").click(lastFun());
}