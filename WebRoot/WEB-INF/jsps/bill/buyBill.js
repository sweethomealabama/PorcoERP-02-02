/**
 * this function is called in buyBill.jsp file
 * @returns
 */
$(function() {
	document.writeln("<script type='text/javascript' src='buyBillFanOut.js'></script>");
	document.writeln("<script type='text/javascript' src='formFirst.js'></script>");


		$("#query").click(formFirst());
		
		$(".info").click(messageFun());
		
		
	});
	function intToFloat(val){
		return new Number(val).toFixed(2);
	}