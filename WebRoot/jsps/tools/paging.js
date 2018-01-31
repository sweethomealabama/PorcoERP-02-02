/**
 * this function is called in paging.jsp file
 * @returns
 */
$(function() {
	document.writeln("<script type='text/javascript' src='lib/fanOut.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/cssFun.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/pageLib.js'></script>");


	var pageCount = $pageCount;
	var pageNum = $pageNum;
		if(pageCount == 1){
			pageCount1();
		}
		if(pageNum == 1){
			pageNum1();
		}
		if(pageNum == pageCount){
			pageCountNum();
		}else{
			finalElse();
		}
		cssFun();

});