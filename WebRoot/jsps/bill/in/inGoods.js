/**
 * This file is a jquery file written in javascript
 * @returns
 */
$(function() {
	document.writeln("<script type='text/javascript' src='lib/setterFun.js'></script>");	
	document.writeln("<script type='text/javascript' src='lib/queryMsgFun.js'></script>");	
	document.writeln("<script type='text/javascript' src='lib/ajaxFun.js'></script>");	
	document.writeln("<script type='text/javascript' src='lib/infoFun.js'></script>");	





	$("#query").click(queryFun());
	ajaxFun();
	infoFun();
	intToFloat(val);

});