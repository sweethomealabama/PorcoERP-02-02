/**
 * this file is called in input.js
 * @returns
 */
function reverseFun() {
			$("[name=roles]:checkbox").each(checked());
		}

function checked() {
    $(this).attr("checked", !$(this).attr("checked"));
}

function checkBox() {
	$("[name=roles]:checkbox").attr("checked",$("#all").attr("checked")=="checked");
}