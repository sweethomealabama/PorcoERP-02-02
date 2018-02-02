/**
 * this file is called in onClick.js
 * @param storeUuiArr
 * @param storeNameArr
 * @returns
 */

function complementar(storeUuiArr, storeNameArr){
	var $newTr = $("<tr class='in'></tr>");
	var $td1 = $("<td align='right'>仓库：</td>");
	$newTr.append($td1);	
	var storeSelectStr = "<select style='width:200px'>";
	for(var i = 0;i<storeUuidArr.length;i++){
		storeSelectStr+="<option value='";
		storeSelectStr+=storeUuidArr[i];
		storeSelectStr+="'>";
		storeSelectStr+=storeNameArr[i];
		storeSelectStr+="</option>";
	}
	storeSelectStr += "</select>";
	var $td2 = $("<td height='30'>"+storeSelectStr+"</td>");
	$newTr.append($td2);	
	//2.3入库多少
	var $td3 = $("<td align='right'>入库量：</td>");
	$newTr.append($td3);	
	//获取当前入库数据总量
	var totalNum = $(this).parent().prev().text();
	return $newTr, totalNum;
}