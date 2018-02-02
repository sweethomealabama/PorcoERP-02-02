/**
 * this file is called in ajaxIn.js
 * @returns
 */

function jsonInitializer (){
	jsonParam ={};
	//主单编号
	var omUuid = 123;
	jsonParam["odm.order.uuid"] = omUuid;
	//获取当前链接所在行的上一行中隐藏的第一个子节点和第二个子节点的值
	//子单编号
	jsonParam["odm.uuid"] = $(this).parent().parent().prev().children("input:eq(0)").val();
	//货物编号
	jsonParam["odm.goods.uuid"] = $(this).parent().parent().prev().children("input:eq(1)").val();
	
	return jsonParam;
}