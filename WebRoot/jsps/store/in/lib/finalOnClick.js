/**
 * this file is called in onClick.js
 * @param $newTr
 * @param totalNum
 * @returns
 */
function finalOnClick($newTr, totalNum){
	
	var $td4 = $("<td><input id='inNum' type='text' value='"+totalNum+"'/></td>");
	$newTr.append($td4);	
	var $td5 = $("<td align='center'><a href='javascript:void(0)' class='ajaxIn xiu'><img src='../../../images/icon_3.gif' />确定</a></td>");
	$newTr.append($td5);
	//3.将新的行对象添加到当前按钮所在的行对象后面
	$myTr.after($newTr);
}