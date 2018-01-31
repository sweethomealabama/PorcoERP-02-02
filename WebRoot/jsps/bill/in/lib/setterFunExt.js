/**
 * called in setterFun.js
 * @param $trFoot
 * @returns
 */
function setterFunExt($trFoot){    
	var $td2 = $("<td align='right'>"+intToFloat(sum)+"&nbsp;元</td>");
	$trFoot.append($td2);
	$tt.after($trFoot);
	$tt=$trHead;
}