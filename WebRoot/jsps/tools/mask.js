/**
 * this file is called in mask.jsp file
 */
// 获取对象
		document.writeln("<script type='text/javascript' src='maskFanOut.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/preventDefault.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/eachFun.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/safeFun.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/variableFun.js'></script>");
		document.writeln("<script type='text/javascript' src='maskFun.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/getPageGetter.js'></script>");

		
		variableFun();

		var stopDefault = preventDefault(e);

		
		
		document.writeln("<script type='text/javascript' src='lib/lockFun.js'></script>");
		lockFun();
		
		document.writeln("<script type='text/javascript' src='lib/bindFun.js'></script>");
		bindFun();
		
		