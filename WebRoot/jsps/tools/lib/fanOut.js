/**
 * called in paging.js
 * @returns
 */
function firstFun(){
	$("[name='pageNum']").val(1);
	$("form:first").submit();
}

document.writeln("<script type='text/javascript' src='preFun.js'></script>");
preFun();

document.writeln("<script type='text/javascript' src='nextLastFun.js'></script>");

nextFun();
lastFun();