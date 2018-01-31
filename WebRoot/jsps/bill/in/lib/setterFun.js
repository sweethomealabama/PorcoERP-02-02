/**
 * called in inGoods.js
 * @returns
 */
function setFun(){
	document.writeln("<script type='text/javascript' src='inGoodsFanOut.js'></script>");
	document.writeln("<script type='text/javascript' src='headSet.js'></script>");
	document.writeln("<script type='text/javascript' src='setterExt.js'></script>");
	document.writeln("<script type='text/javascript' src='setterFunExt.js'></script>");


		setterExt();
		var $trFoot = $("<tr align='center' class='ajaxMsg'></tr>");
		var $td1 = $("<td align='right' colspan='4' height='30'>总计：</td>");
		$trFoot.append($td1);
		
		setterFunExt($trFoot);

	}