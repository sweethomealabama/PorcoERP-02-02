/**
 * called in list.js
 * @returns
 */
		document.writeln("<script type='text/javascript' src='listFirst.js'></script>");
		document.writeln("<script type='text/javascript' src='listUnit.js'></script>");


formFirst();

function pageNum(){
	//将选中的内容作为查询条件出现
	$("[name='gqm.unit']").val($(this).text());
	$("[name='pageNum']").val(1);
	$("form:first").submit();
}

unitFun();