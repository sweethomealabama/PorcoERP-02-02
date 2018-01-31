/**
 * this file is called in pages.jsp
 * @returns
 */
$(function(){
	document.writeln("<script type='text/javascript' src='lib/maxPage1.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/pageNum1.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/check34.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/clickEventFirst.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/clickEventLast.js'></script>");
		var maxPageNum = $maxPageNum;
		var pageNum = $pageNum;
		
		checkPageNumMaxPage(pageNum, maxPageNum);
		
		
		var check = checkPageNumMaxPage(pageNum, maxPageNum);
		
		if(check == 1){
			maxPage1();
		}
		if(check == 2){
			pageNum1();
		}
		check34();
		clickEvent();
	});
