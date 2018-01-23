/**
 * called in inGoods.js
 * @param tt
 * @returns
 */
function setHead(tt){

var $trHead = $("<tr align='center' class='ajaxMsg' style='background:url(images/table_bg.gif) repeat-x;'></tr>");
				var $td1 = $("<td height='30'>订单号</td>");
				$trHead.append($td1);
				var $td2 = $("<td>订单时间</td>");
				$trHead.append($td2);
				var $td3 = $("<td>数量</td>");
				$trHead.append($td3);
				var $td4 = $("<td>单价</td>");
				$trHead.append($td4);
				var $td5 = $("<td>合计</td>");
				$trHead.append($td5);
				$tt.after($trHead);
				$tt=$trHead;
				
				return [trHead, tt];
}