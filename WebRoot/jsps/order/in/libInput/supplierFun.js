/**
 * called in input.js
 * @returns
 */

function supplierFun(){
				//修改产品类别select
				$(".goodsType").empty();
				for(var i = 0;i<4;i++){
					var $option = $("<option value='1'>商品类别"+i+"</option>");	//创建option对象(jQuery格式)
					$(".goodsType").append($option);				//将option对象添加到select组件中
				}
				//修改商品select
				$(".goods").empty();
				for(var i = 0;i<5;i++){
					var $option = $("<option value='1'>商品名"+i+"</option>");	//创建option对象(jQuery格式)
					$(".goods").append($option);				//将option对象添加到select组件中
				}
				//修改商品数量
				$(".order_num").val("1");
				//修改商品单价
				$("[name='prices']").val(intToFloat(300));
				//修改商品合计
				$(".total").text(intToFloat(300)+" 元");
				//修改商品总计
				total();
		}