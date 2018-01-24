/**
 * this file is called in inDetail.jsp
 */
	//将storeList转化为两个数组
	
	var uuids = new Array();
	var names = new Array();
	var i = 0;
	
	document.writeln("'<s:iterator value= 'storeList'>'uuids[i] = ${uuid};names[i] = '${name}';i++;'</s:iterator>'");
	
	$(function(){
		document.writeln("<script type='text/javascript' src='lib/pickerFun.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/fanOut.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/trtd2.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/operLib.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/surplusFun.js'></script>");

		$(".oper").click(operFun());
		
		//确定按钮
		$(".btn_ok").live("click", clickEvent());
	});