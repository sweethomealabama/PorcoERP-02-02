/**
 * this file is called in input.js
 * 
 * @returns
 */

function ajOnClick(){
			//0.页面校验输入是否合法（省略）
			//1.组织ajax提交的数据
			document.writeln("<script type='text/javascript' src='jsonInitializer.js'></script>");

			jsonParam =jsonInitializer();
			
			//为ajax提交操作后的操作对象进行初始化
			var $upTr = $(this).parent().parent().prev();
			var $upCenter =  $upTr.children("td:eq(2)");
			var $upRight = $upTr.children("td:eq(3)");
			var $myTr = $(this).parent().parent();
				
				
				if(0 == 0){
					$upTr.remove();
					$myTr.remove();
				}
			}