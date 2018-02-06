/**
 * called in input.js
 * @returns
 */
function deleteBtn(){
			if($(".deleteBtn").size()>1){
				//获取当前所在行，并将其删除
				$(this).parent().parent().remove();
				//将添加按钮设置为可显示状态
				$("#add").css("display","inline");
			}
			//将所有项设置为不可修改
			$(".goodsType").attr("disabled","disabled");
			$(".goods").attr("disabled","disabled");
			total();
		}