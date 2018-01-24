/**
 * this function is called in paging.jsp file
 * @returns
 */
$(function() {
	document.writeln("<script type='text/javascript' src='lib/fanOut.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/cssFun.js'></script>");

	var pageCount = $pageCount;
	var pageNum = $pageNum;
		if(pageCount == 1){
			$("#fir").css("display","none");
			$("#pre").css("display","none");
			$("#next").css("display","none");
			$("#last").css("display","none");
		}else if(pageNum == 1){
			$("#fir").css("display","none");
			$("#pre").css("display","none");
			$("#next").css("display","inline");
			$("#last").css("display","inline");
		}else if(pageNum == pageCount){
			$("#fir").css("display","inline");
			$("#pre").css("display","inline");
			$("#next").css("display","none");
			$("#last").css("display","none");
		}else{
			$("#fir").css("display","inline");
			$("#pre").css("display","inline");
			$("#next").css("display","inline");
			$("#last").css("display","inline");
		}
		cssFun();

});