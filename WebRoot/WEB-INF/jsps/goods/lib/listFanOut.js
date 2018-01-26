/**
 * called in list.js
 * @returns
 */
function formFirst() {
			$("[name='pageNum']").val(1);
			$("form:first").submit();
		}

function pageNum(){
	//将选中的内容作为查询条件出现
	$("[name='gqm.unit']").val($(this).text());
	$("[name='pageNum']").val(1);
	$("form:first").submit();
}

function unitFun(){
	//将选中的内容作为查询条件出现
	$("[name='gqm.unit']").val($(this).text());
	$("[name='pageNum']").val(1);
	$("form:first").submit();
}