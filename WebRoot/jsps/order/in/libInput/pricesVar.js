/**
 * called in pricesFun.js
 * @param intToFloat
 * @returns
 */

function pricesVar(intToFloat){
	//获取当前输入价格
	var price = $(this).val();
	//获取当前数量
	var num = $($(this).parent().prev().children()[0]).val();
	//求合计
	$(this).parent().next().text(intToFloat(num*price)+" 元");
	
	return [price, num];
}