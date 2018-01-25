/**
 * called in inGoods.js
 * @returns
 */
function setFun(){
	document.writeln("<script type='text/javascript' src='inGoodsFanOut.js'></script>");
	document.writeln("<script type='text/javascript' src='headSet.js'></script>");

		var jsonParam = {"bqm.goodsUuid":$(this).attr("value")};
		jsonParam["bqm.time"]= $("[name='bqm.time']").val();
		jsonParam["bqm.time2"]= $("[name='bqm.time2']").val();
		jsonParam["bqm.type"]= $("[name='bqm.type']").val();
		$tt = $(this).parent().parent();
		//将制定标记tr删除
		$('.ajaxMsg').empty();

		//每个tr对象都带有一个class="ajaxMsg",用于后期操作删除标记

		//动态添加一个tr行,用于做标题栏
		//创建tr组件

		var tCodes = setHead(tt);
		trHead = tCodes[0];
		tt = tCodes[1];
		//--------------------------------------------------------------------------
		tCodes = setTr(tr, tt);
		tr = tCodes[0];
		tt = tCodes[1];

		//--------------------------------------------------------------------------


		var $trFoot = $("<tr align='center' class='ajaxMsg'></tr>");
		var $td1 = $("<td align='right' colspan='4' height='30'>总计：</td>");
		$trFoot.append($td1);
		var $td2 = $("<td align='right'>"+intToFloat(sum)+"&nbsp;元</td>");
		$trFoot.append($td2);
		$tt.after($trFoot);
		$tt=$trHead;

	}