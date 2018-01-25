/**
 * This file is a jquery file written in javascript
 * @returns
 */
$(function() {
	document.writeln("<script type='text/javascript' src='lib/setterFun.js'></script>");	
	document.writeln("<script type='text/javascript' src='lib/queryMsgFun.js'></script>");	



	$("#query").click(queryFun());
	$(".ajaxMsg").live("click",msgFun());
	$(".info").click(setFun());
	function intToFloat(val){
		return new Number(val).toFixed(2);
	}

});