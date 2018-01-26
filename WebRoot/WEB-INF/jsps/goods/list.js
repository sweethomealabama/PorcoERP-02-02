/**
 * this file is called in list.jsp
 * @returns
 */
$(function() {
	document.writeln("<script type='text/javascript' src='lib/listFanOut.js'></script>");

		$("#query").click(formFirst());
		
		$(".unit").click(pageNum());
		
	});
document.writeln("<script type='text/javascript' src='lib/showMsg.js'></script>");
showMsg(msg, uuid);
document.writeln("<script type='text/javascript' src='lib/listQueryExt.js'></script>");
query();
	
	
	showMsg(msg, uuid);
