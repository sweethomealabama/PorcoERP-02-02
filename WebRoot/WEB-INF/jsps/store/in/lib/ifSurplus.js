/**
 * called in picker.js
 * @param surplus
 * @returns
 */
function ifSurplus(surplus){
if(surplus == 0){
    				//删除两个行对象
    				$nowTr.prev().remove();
    				$nowTr.remove();
    			}else{
		  			//设置剩余量
		  			$nowTr.prev().children("td:eq(3)").html(surplus);
		  			//设置值已入库数量
		  			$nowTr.prev().children("td:eq(2)").html(num-surplus);
		  			//设置下次入库数量
		  			$nowTr.children("td:eq(3)").children("input").val(surplus);
		  		}
}