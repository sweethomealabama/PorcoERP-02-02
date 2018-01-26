/**
 * called in pages.js
 * @returns
 */
function maxPage1(){
	$("#fir").css("display","none");
	$("#pre").css("display","none");
	$("#next").css("display","none");
	$("#last").css("display","none");
}

function pageNum1(){
	$("#fir").css("display","none");
	$("#pre").css("display","none");
	$("#next").css("display","inline");
	$("#last").css("display","inline");
}

function pageNumMax(){
	$("#fir").css("display","inline");
	$("#pre").css("display","inline");
	$("#next").css("display","none");
	$("#last").css("display","none");
}

function finalElse(){
	$("#fir").css("display","inline");
	$("#pre").css("display","inline");
	$("#next").css("display","inline");
	$("#last").css("display","inline");
}