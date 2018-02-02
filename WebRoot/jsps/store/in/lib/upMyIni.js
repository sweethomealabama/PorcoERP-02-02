/**
 * this file is called in ajaxIn.js
 * @returns
 */

function upMy (){
	var $upTr = $(this).parent().parent().prev();
	var $upCenter =  $upTr.children("td:eq(2)");
	var $upRight = $upTr.children("td:eq(3)");
	var $myTr = $(this).parent().parent();
	return $upTr, $upCenter, $upRight, $myTr;
}