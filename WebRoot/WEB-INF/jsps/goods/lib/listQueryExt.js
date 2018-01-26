/**
 * called in list.js
 * @returns
 */
$(function query() {
		document.writeln("<script type='text/javascript' src='listFanOut.js'></script>");

			$("#query").click(queryFun());
			
			$(".unit").click(unitFun());
			
		});