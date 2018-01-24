/**
 * called in clickEvent.js
 * @param data
 * @returns
 */
function pickerFun(data){
				//if(msg){
					//输入的东西有问题
					//找个合适的地方提示用户
				//}
				var	surplus = data.odm.surplus;
    			var num = data.odm.num;
    			var has = data.has
    			//获取该订单是否全部操作完毕
    			if(has){
					//已经全部入库完毕
					$("#inOrderTitle").remove();
					$("#inOrder").remove();
					$("#allInTitle").css("display","block");
					$("#return").css("display","block");
    			}
    			
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