/**
 * this file is called in pages.jsp
 * @returns
 */
$(function(){
	document.writeln("<script type='text/javascript' src='lib/pageLib.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/firstPreFun.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/nextLastFun.js'></script>");



		var maxPageNum = $maxPageNum;
		var pageNum = $pageNum;

		if(maxPageNum == 1){
			maxPage1();
		}else if(pageNum == 1){
			pageNum1();
		}else if(pageNum == maxPageNum){
			pageNumMax();
		}else{
			finalElse();
		}
		
		$("#fir").click(firstFun());
		$("#pre").click(preFun());
		$("#next").click(nextFun());
		$("#last").click(lastFun());
	});