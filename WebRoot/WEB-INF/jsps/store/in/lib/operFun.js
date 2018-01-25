/**
 * called in inDetail.js
 * @returns
 */
function operFun(){
	document.writeln("<script type='text/javascript' src='dataSet.js'></script>");
			//创建行对象，添加到当前行下方
			$nowTr = $(this).parent();
			
			var odmUuid = $nowTr.attr("odm");
			
			$(".in").remove();
			
			$.post("order_ajaxGetSurplusByOdmUuid.action",{"odmUuid":odmUuid},dataSet(data));
}