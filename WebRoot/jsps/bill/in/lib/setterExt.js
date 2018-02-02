/**
 * called in setterFun.js
 * @returns
 */
function setterExt(){	
	document.writeln("<script type='text/javascript' src='ttFun.js'></script>");

var jsonParam = {"bqm.goodsUuid":$(this).attr("value")};
		jsonParam["bqm.time"]= $("[name='bqm.time']").val();
		jsonParam["bqm.time2"]= $("[name='bqm.time2']").val();
		jsonParam["bqm.type"]= $("[name='bqm.type']").val();
		
		var tCodes =ttFun();
		
		var $tt = tCodes[0];

		var trHead = tCodes[1];
		
		
		var tCodes2 = setTr(tr, tt);
		var tr = tCodes2[0];
		tt = tCodes2[1];
}