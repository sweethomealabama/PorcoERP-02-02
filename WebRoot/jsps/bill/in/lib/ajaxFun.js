/**
 * called in inGoods.js
 * @returns
 */
function ajaxFun(){
	document.writeln("<script type='text/javascript' src='setterFun.js'></script>");	

	$(".ajaxMsg").live("click",msgFun());
}