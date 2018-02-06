/**
 * called in input.js
 * @returns
 */
function submitOrderFun(){
			$("#supplier").removeAttr("disabled");
			$(".goods").removeAttr("disabled");
			//提交页面中的第一个form对象
			$("form:first").submit();
		}