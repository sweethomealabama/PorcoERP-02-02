/**
 * called in fanOut.js
 * @returns
 */
function preFun(){
	$("[name='pageNum']").val($("[name='pageNum']").val()-1);
	$("form:first").submit();
}