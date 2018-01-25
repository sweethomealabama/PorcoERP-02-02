/**
 * called in inDetail.js
 * @param data
 * @returns
 */
function dataSet(data){
				$tr = $("<tr class='in'></tr>");	
				document.writeln("<script type='text/javascript' src='trtd2.js'></script>");
			
				$td1 = $("<td height='30px' align='right'>仓库：</td>");
				$tr.append($td1);

				$td2 = $("<td></td>");
				$select = $("<select></select>");
				for(var i = 0;i<uuids.length;i++){
					$op = $("<option value="+uuids[i]+">"+names[i]+"</option>");
					$select.append($op);
				}
				trtd2($td2, $tr);
				
}