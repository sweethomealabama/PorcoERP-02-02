/**
 * called in listFanOut.js
 * @returns
 */
function unitFun(){
	//将选中的内容作为查询条件出现
	$("[name='gqm.unit']").val($(this).text());
	$("[name='pageNum']").val(1);
	$("form:first").submit();
}