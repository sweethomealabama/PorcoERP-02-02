/**
 * called in input.js
 * @returns
 */
function addVar(){
	//设置不能修改供应商
			$("#supplier").attr("disabled","disabled");
			//设置已存在的所有select全部不可点击
			$(".goodsType").attr("disabled","disabled");
			$(".goods").attr("disabled","disabled");
			
			//发送ajax提交，将供应商id与当前已经使用的类别对应商品2个id传递到后台，并将其过滤，过滤完毕的数据传递回页面
			var goodsTypeObjs = $(".goodsType");
			var goodsObjs = $(".goods");
			var jsonParam = {"gm.goodsType.supplier.uuid":$("#supplier").val()};
			var hasUuids = "";
			
			return [goodsTypeObjs, goodsObjs, jsonParam, hasUuids];
}