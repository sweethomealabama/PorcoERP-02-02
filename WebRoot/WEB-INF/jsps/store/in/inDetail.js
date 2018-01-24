/**
 * this file is called in inDetail.jsp
 */
	//将storeList转化为两个数组
	
	var uuids = new Array();
	var names = new Array();
	var i = 0;
	
	document.writeln("'<s:iterator value= 'storeList'>'uuids[i] = ${uuid};names[i] = '${name}';i++;'</s:iterator>'");
	
	$(function(){
		$(".oper").click(function(){
			//创建行对象，添加到当前行下方
			$nowTr = $(this).parent().parent();
			
			var odmUuid = $nowTr.attr("odm");
			
			$(".in").remove();
			
			$.post("order_ajaxGetSurplusByOdmUuid.action",{"odmUuid":odmUuid},dataSet(data));
		});
		
		//确定按钮
		$(".btn_ok").live("click", clickEvent());
	});