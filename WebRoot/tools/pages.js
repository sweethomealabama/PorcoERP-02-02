/**
 * this file is called in pages.jsp
 * @returns
 */
$(function(){
		var maxPageNum = $maxPageNum;
		var pageNum = $pageNum;
		
		if(maxPageNum == 1){
			callFun();
			maxPage1();
		}else if(pageNum == 1){
			callFun();
			pageNum1();
		}else if(pageNum == maxPageNum){
			callFun();
			pageNumMax();
		}else{
			callFun();
			finalElse();
		}
		callFun();
		clickEvent();
	});
function callFun(){
	document.writeln("<script type='text/javascript' src='lib/maxPage1.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/pageNum1.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/pageNumMax.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/finalElse.js'></script>");
}