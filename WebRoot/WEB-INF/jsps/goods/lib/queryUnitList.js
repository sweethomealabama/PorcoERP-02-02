/**
 * called in list.js
 * @returns
 */
function queryUnitList(){
$(function() {
	document.writeln("<script type='text/javascript' src='listFanOut.js'></script>");

		$("#query").click(formFirst());
		
		$(".unit").click(pageNum());
		
	});
}