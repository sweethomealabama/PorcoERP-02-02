/**
 * called in formFirstOut.js
 * @returns
 */
function jsonFill(){
var jsonParma = {};
	jsonParma["bqm.goodsUuid"] = $(this).attr("val");
	jsonParma["bqm.begin"] = $("[name='bqm.begin']").val();
	jsonParma["bqm.end"] = $("[name='bqm.end']").val();
	jsonParma["bqm.type"] = $("[name='bqm.type']").val();
	jsonParma["bqm.supplierUuid"] = $("[name='bqm.supplierUuid']").val();
	return jsonParma;
}