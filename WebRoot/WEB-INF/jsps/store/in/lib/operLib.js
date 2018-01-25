/**
 * called in inDetail.js
 * @returns
 */
function operFun(){
	document.writeln("<script type='text/javascript' src='lib/pickerFun.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/fanOut.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/trtd2.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/operLib.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/surplusFun.js'></script>");
			//创建行对象，添加到当前行下方
			$nowTr = $(this).parent();
			
			var odmUuid = $nowTr.attr("odm");
			
			$(".in").remove();
			
			$.post("order_ajaxGetSurplusByOdmUuid.action",{"odmUuid":odmUuid},dataSet(data));
}