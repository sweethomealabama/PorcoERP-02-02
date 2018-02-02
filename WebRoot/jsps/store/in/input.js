/**
 * this function is called inDetail.jsp file
 * @returns
 */
$(function() {
		//初始化仓库数据
		var storeUuidArr = new Array();
		var storeNameArr = new Array();
			
			storeUuidArr[0] = 11;
			storeNameArr[0] = "1号仓库";
			storeUuidArr[1] = 22;
			storeNameArr[1] = "2号仓库";
			storeUuidArr[2] = 33;
			storeNameArr[2] = "3号仓库";
		document.writeln("<script type='text/javascript' src='lib/onClick.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/ajaxIn.js'></script>");
		
		$(".oper").click(onClick(storeUuiArr, storeNameArr));
		$(".ajaxIn").live("click", ajOnClick());
			
	});