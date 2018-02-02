/**
 * this file is called in ajaxIn.js
 * @returns
 */

function jsonInitializer (){
	jsonParam ={};
	//主单编号
	jsonParam["odm.order.uuid"] = omUuid;
	//获取当前链接所在行的上一行中隐藏的第一个子节点和第二个子节点的值
	//子单编号
	jsonParam["odm.uuid"] = $(this).parent().parent().prev().children("input:eq(0)").val();
	//货物编号
	jsonParam["odm.goods.uuid"] = $(this).parent().parent().prev().children("input:eq(1)").val();
	//入库数量
	jsonParam["som.num"] = $(this).parent().prev().children("input:eq(0)").val();
	//仓库编号
	jsonParam["som.sdm.sm.uuid"] = $(this).parent().parent().children("td:eq(1)").children("select").val();
	
	return jsonParam;
}