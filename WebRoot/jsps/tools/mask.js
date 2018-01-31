/**
 * this file is called in mask.jsp file
 */
// 获取对象
		document.writeln("<script type='text/javascript' src='maskFanOut.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/preventDefault.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/eachFun.js'></script>");
		document.writeln("<script type='text/javascript' src='safeFun.js'></script>");
		document.writeln("<script type='text/javascript' src='lib/variableFun.js'></script>");
		document.writeln("<script type='text/javascript' src='maskFun.js'></script>");
		
		variableFun();

		var stopDefault = preventDefault(e);

		var getPage = pageGetter();
		
		document.writeln("<script type='text/javascript' src='lib/lockFun.js'></script>");
		lockFun();
		
		bind(window, 'load', bindClick());
		
		