/**
 * called in input.js
 * @returns
 */
function goods(intToFloat){
	document.writeln("<script type='text/javascript' src='goodsVar.js'></script>");	
			var vars = goodsVar();
			var $num = vars[0];
			var $price = vars[1];
			var $total = vars[2];
			//修改商品数量
			$num.val("1");
			//修改商品单价
			$price.val(intToFloat(111));
			//修改商品合计
			$total.text(intToFloat(111)+" 元");
			//修改商品总计
			total();
		}