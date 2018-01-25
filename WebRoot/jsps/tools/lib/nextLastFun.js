/**
 * called in fanOut.js
 * @returns
 */
function nextFun(){
	$("[name='pageNum']").val($("[name='pageNum']").val()*1+1);
	$("form:first").submit();
}

function lastFun(){
	$("[name='pageNum']").val(pageCount);
	$("form:first").submit();
}