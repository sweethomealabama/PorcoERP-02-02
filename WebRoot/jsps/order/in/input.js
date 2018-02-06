/**
 * this file is called in input.jsp
 * @param val
 * @returns
 */
function intToFloat(val){
		return new Number(val).toFixed(2);
	}
	//修改供应商
	$(document).ready(function() {
		document.writeln("<script type='text/javascript' src='libInput/supplierFun.js'></script>");	
		$("#supplier").change(supplierFun(intToFloat));
		//修改商品类别
		document.writeln("<script type='text/javascript' src='libInput/goodsType.js'></script>");	
		$(".goodsType").live("change", goodsType(intToFloat));
		//修改商品
		document.writeln("<script type='text/javascript' src='libInput/goods.js'></script>");	
		$(".goods").live("change", goods(intToFloat));
		//添加新商品
		
		document.writeln("<script type='text/javascript' src='libInput/addFun.js'></script>");
		$("#add").click(addFun());
		//修改商品数量，事件绑定为点击任意键盘数字按钮
		
		document.writeln("<script type='text/javascript' src='libInput/numFun.js'></script>");
		$(".num").live("keyup", numFun(event, intToFloat));
		//修改商品价格，事件绑定为点击任意键盘数字按钮
		
		
		document.writeln("<script type='text/javascript' src='libInput/pricesFun.js'></script>");
		$(".prices").live("keyup", pricesFun(event, intToFloat));
		
		document.writeln("<script type='text/javascript' src='libInput/deleteBtn.js'></script>");
		$(".deleteBtn").live("click", deleteBtn);
		
		//求总和的方法
		function total(){
			var nums = $(".num");
			var prices = $(".prices");
			var total = 0;
			for(var i = 0;i<nums.length;i++){
				var num = $(nums[i]).val();
				var price=  $(prices[i]).val();
				total = total + num * price ;
			}
			$(".all").text(intToFloat(total)+" 元");
		}
		
		
		document.writeln("<script type='text/javascript' src='libInput/submitOrderFun.js'></script>");
		//提交按钮（设置不可修改的
		$("#submitOrder").click(submitOrderFun());
	});