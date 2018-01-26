/**
 * called in pages.js
 * @returns
 */
function nextFun(){

			$("[name=pageNum]").val($("[name=pageNum]").val()*1+1);
			$("form:first").submit();
		}

function lastFun(){
	$("[name=pageNum]").val(maxPageNum);
	$("form:first").submit();
}