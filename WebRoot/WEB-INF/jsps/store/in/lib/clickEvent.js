/**
 * called in inDetail.js
 * @returns
 */
function clickEvent(){
	document.writeln("<script type='text/javascript' src='assignJson.js'></script>");


			//真实的入库操作
			//传递到后台：哪个商品？入到哪个仓库？入多少个？
			$nowTr = $(this).parent();
			
			var jsonParam = {};
			jsonParam["goodsUuid"] = $nowTr.prev().attr("gm");
			jsonParam["storeUuid"] = $nowTr.children("td:eq(1)").children("select").val();
			assignJson(jsonParam);
}