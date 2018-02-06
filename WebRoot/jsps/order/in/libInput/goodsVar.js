/**
 * called in goods.js
 * @returns
 */
function goodsVar(){
	var $num = $($(this).parent().next().children()[0]);
	var $price = $($(this).parent().next().next().children()[0]);
	var $total = $(this).parent().next().next().next();
	
	return [$num, $price, $total];
}