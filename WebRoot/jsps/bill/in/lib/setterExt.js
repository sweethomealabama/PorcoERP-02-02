/**
 * called in setterFun.js
 * @returns
 */
function setterExt(){	
var jsonParam = {"bqm.goodsUuid":$(this).attr("value")};
		jsonParam["bqm.time"]= $("[name='bqm.time']").val();
		jsonParam["bqm.time2"]= $("[name='bqm.time2']").val();
		jsonParam["bqm.type"]= $("[name='bqm.type']").val();
		$tt = $(this).parent().parent();

		$('.ajaxMsg').empty();

	

		var tCodes = setHead(tt);
		trHead = tCodes[0];
		tt = tCodes[1];
		
		tCodes = setTr(tr, tt);
		tr = tCodes[0];
		tt = tCodes[1];
}