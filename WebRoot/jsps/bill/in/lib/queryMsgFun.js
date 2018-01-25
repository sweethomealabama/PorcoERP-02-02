/**
 * called in inGoods.js
 * @returns
 */
function queryFun() {
			$("[name='pageNum']").val(1);
			$("form:first").submit();
		}

function msgFun(){
	$(".ajaxMsg").empty();
}