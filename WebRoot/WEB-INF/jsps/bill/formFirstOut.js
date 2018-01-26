/**
 * called in formFirst.js
 * @returns
 */
function messageFun(){
	document.writeln("<script type='text/javascript' src='formFirst.js'></script>");

	$nowTr = $(this).parent().parent();
	
	$(".ajaxMsg").remove();
	
	//将当前货物的uuid配置公共查询条件，发送ajax请求，获取对应货物的所有明细数据
	var jsonParma = {};
	jsonParma["bqm.goodsUuid"] = $(this).attr("val");
	jsonParma["bqm.begin"] = $("[name='bqm.begin']").val();
	jsonParma["bqm.end"] = $("[name='bqm.end']").val();
	jsonParma["bqm.type"] = $("[name='bqm.type']").val();
	jsonParma["bqm.supplierUuid"] = $("[name='bqm.supplierUuid']").val();
	$.post("bill_ajaxBillDetailByGoods.action",jsonParma, dataBill(data));
	
	$(".ajaxMsg").live("click",removeFun());
}