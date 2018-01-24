/**
 * called in inDetail.js
 * @param data
 * @returns
 */
function dataSet(data){
				$tr = $("<tr class='in'></tr>");			
			
				$td1 = $("<td height='30px' align='right'>仓库：</td>");
				$tr.append($td1);

				$td2 = $("<td></td>");
				$select = $("<select></select>");
				for(var i = 0;i<uuids.length;i++){
					$op = $("<option value="+uuids[i]+">"+names[i]+"</option>");
					$select.append($op);
				}
				$td2.append($select);
				$tr.append($td2);
			
				$td3 = $("<td align='right'>入库量：</td>");
				$tr.append($td3);
			
				var surplus = data.surplus;
				var num = data.num;
			
				$td4 = $("<td><input type='text' value='"+surplus+"'/></td>");
				$tr.append($td4);
			
				$td5 = $('<td align="center"><img src="images/icon_3.gif" /><a href="javascript:void(0)" class="btn_ok xiu">确定</a></td>');
				$tr.append($td5);
			
				$nowTr.after($tr);
			}