/**
 * this file is called in ajaxIn.js
 * @param jsonParam
 * @returns
 */

function jsonFinalizer(jsonParam){
	//入库数量
	jsonParam["som.num"] = $(this).parent().prev().children("input:eq(0)").val();
	//仓库编号
	jsonParam["som.sdm.sm.uuid"] = $(this).parent().parent().children("td:eq(1)").children("select").val();
	
	return jsonParam;
}