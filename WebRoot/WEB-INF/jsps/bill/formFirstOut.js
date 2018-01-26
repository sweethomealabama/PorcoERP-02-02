/**
 * called in formFirst.js
 * @returns
 */
function messageFun(){
	document.writeln("<script type='text/javascript' src='formFirst.js'></script>");

	$nowTr = $(this).parent().parent();
	
	$(".ajaxMsg").remove();
	
	//将当前货物的uuid配置公共查询条件，发送ajax请求，获取对应货物的所有明细数据
	var jsonParma = jsonFill();
	$.post("bill_ajaxBillDetailByGoods.action",jsonParma, dataBill(data));
	
	$(".ajaxMsg").live("click",removeFun());
}