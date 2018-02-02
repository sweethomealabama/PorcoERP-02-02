/**
 * called in setterExt.js
 * @returns
 */
function ttFun(){
	document.writeln("<script type='text/javascript' src='headSet.js'></script>");

	var tt = $(this).parent().parent();
	$('.ajaxMsg').empty();
	var tCodes = setHead(tt);
	trHead = tCodes[0];
	tt = tCodes[1];
	return tt, trHead;
}