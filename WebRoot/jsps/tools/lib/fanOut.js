/**
 * called in paging.js
 * @returns
 */
function firstFun(){
	$("[name='pageNum']").val(1);
	$("form:first").submit();
}

function preFun(){
	$("[name='pageNum']").val($("[name='pageNum']").val()-1);
	$("form:first").submit();
}

function nextFun(){
	$("[name='pageNum']").val($("[name='pageNum']").val()*1+1);
	$("form:first").submit();
}

function lastFun(){
	$("[name='pageNum']").val(pageCount);
	$("form:first").submit();
}