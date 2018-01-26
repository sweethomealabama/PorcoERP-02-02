/**
 * called in buyBill.js
 * @returns
 */
function formFirst() {
			$("form:first").submit();
}
document.writeln("<script type='text/javascript' src='formFirst.js'></script>");

removeFun();

document.writeln("<script type='text/javascript' src='formFirstOut.js'></script>");
messageFun();
