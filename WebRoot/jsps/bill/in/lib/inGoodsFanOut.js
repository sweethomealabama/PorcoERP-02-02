/**
 * called in inGoods.js
 * @param tr
 * @param tt
 * @returns
 */
function setTr(tr, tt){
var sum = 0;
				for(i = 0;i<3;i++){
					var $tr = $("<tr align='center' class='ajaxMsg'></tr>");
					//共计5列
					var $td1 = $("<td height='30'>1238987412</td>");
					$tr.append($td1);
					var $td2 = $("<td>2014-01-01</td>");
					$tr.append($td2);
					var $td3 = $("<td>"+i+"</td>");
					$tr.append($td3);
					var $td4 = $("<td align='right'>100.00&nbsp;元</td>");
					$tr.append($td4);
					var $td5 = $("<td align='right'>100.00&nbsp;元</td>");
					$tr.append($td5);
					
					$tt.after($tr);
					$tt=$tr;
					sum = sum + 100;
				}
				return [tr, tt];
}