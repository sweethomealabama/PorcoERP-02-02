/**
 * called in input.js
 * @returns
 */
function goodsType(intToFloat){
			document.writeln("<script type='text/javascript' src='goodsTypeVar.js'></script>");	
			var vars = goodsTypeVar();
			var $goodsSelectObj = vars[0];
			var $num = vars[1];
			document.writeln("<script type='text/javascript' src='goodsTypeVar2.js'></script>");	
			var vars2 = goodsTypeVar2();
			var $price = vars2[0]
			var $total = vars2[1];
			var jsonParam = vars2[2];
			var goodsUuids = "";
			//取出所有select
			var goodsObjs = $(".goods");
			for(i = 0;i<goodsObjs.length;i++){
				goodsUuids = goodsUuids + $(goodsObjs[i]).val();
				if(i != goodsObjs.length -1){
					goodsUuids = goodsUuids + ",";
				}
			}
			jsonParam["goodsUuids"]= goodsUuids;
				
			$goodsSelectObj.empty();
			for(var i = 0;i<5;i++){
				var $option = $("<option value='222'>新商品名"+1+"</option>");	//创建option对象
				$goodsSelectObj.append($option);				//将option对象添加到select组件中
			}
			//修改商品数量
			$num.val("1");
			//修改商品单价
			$price.val(intToFloat(400));
			//修改商品合计
			$total.text(intToFloat(400)+" 元");
			//修改商品总计
			total();
		}