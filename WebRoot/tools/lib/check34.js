/**
 * called in pages.js
 * @returns
 */
function check34(){
	document.writeln("<script type='text/javascript' src='lib/finalElse.js'></script>");
	document.writeln("<script type='text/javascript' src='lib/pageNumMax.js'></script>");
	if(check == 3){
		callFun();
		pageNumMax();
	}
	if(check == 4){
		callFun();
		finalElse();
	}
}