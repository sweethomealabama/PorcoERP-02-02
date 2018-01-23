/**
 * this function is called in input.jsp file
 * @returns
 */
$(function() {
	document.writeln("<script type='text/javascript' src='inputFanOut.js'></script>");
	document.writeln("<script type='text/javascript' src='inputReverse.js'></script>");

		$("#all").click(checkBox());
		$("#reverse").click(reverseFun());
		$("#supplier").change(goodsFun());
});