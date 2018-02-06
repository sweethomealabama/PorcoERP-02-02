/**
 * called in goodsType.js
 * @returns
 */
function goodsTypeVar2(){
	var $price = $($(this).parent().next().next().next().children()[0]);
	var $total = $(this).parent().next().next().next().next();
	//发送的请求要将当前已经使用的过滤掉，否则每次出现的集合会重复
	var jsonParam = {"gm.goodsType.uuid":$(this).val()};
	
	return [$price, $total, jsonParam];
}