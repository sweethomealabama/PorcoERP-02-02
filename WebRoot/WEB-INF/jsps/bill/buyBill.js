/**
 * this function is called in buyBill.jsp file
 * @returns
 */
$(function() {
	document.writeln("<script type='text/javascript' src='buyBillFanOut.js'></script>");

		$("#query").click(function() {
			$("form:first").submit();
		});
		
		$(".info").click(function(){
			$nowTr = $(this).parent().parent();
			
			$(".ajaxMsg").remove();
			
			//将当前货物的uuid配置公共查询条件，发送ajax请求，获取对应货物的所有明细数据
			var jsonParma = {};
			jsonParma["bqm.goodsUuid"] = $(this).attr("val");
			jsonParma["bqm.begin"] = $("[name='bqm.begin']").val();
			jsonParma["bqm.end"] = $("[name='bqm.end']").val();
			jsonParma["bqm.type"] = $("[name='bqm.type']").val();
			jsonParma["bqm.supplierUuid"] = $("[name='bqm.supplierUuid']").val();
			$.post("bill_ajaxBillDetailByGoods.action",jsonParma, dataBill(data));
			
			$(".ajaxMsg").live("click",function(){
				$(".ajaxMsg").remove();
			});
		});
		
		
	});
	function intToFloat(val){
		return new Number(val).toFixed(2);
	}