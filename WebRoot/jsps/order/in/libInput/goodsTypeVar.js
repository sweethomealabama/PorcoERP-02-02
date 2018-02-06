/**
 * called in goodsType.js
 * @returns
 */

function goodsTypeVar(){
	var $goodsSelectObj = $($(this).parent().next().children()[0]);
	var $num = $($(this).parent().next().next().children()[0]);
	return [$goodsSelectObj, $num];
}