/**
 * this file is called in list.jsp
 * @returns
 */

document.writeln("<script type='text/javascript' src='lib/queryUnitList.js'></script>");

queryUnitList();

document.writeln("<script type='text/javascript' src='lib/showMsg.js'></script>");
showMsg(msg, uuid);
document.writeln("<script type='text/javascript' src='lib/listQueryExt.js'></script>");

	query();
	
	
	showMsg(msg, uuid);
