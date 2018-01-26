/**
 * called in pages.js
 * @returns
 */
function firstFun(){
			$("[name=pageNum]").val(1);
			$("form:first").submit();
		}

function preFun(){
	$("[name=pageNum]").val($("[name=pageNum]").val()-1);
	$("form:first").submit();
}