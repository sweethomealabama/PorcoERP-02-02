/**
 * this file is called in mask.jsp file
 */
// 获取对象
		call();
		call2();
		variableFun();

		var stopDefault = preventDefault(e);

		var getPage = pageGetter();

		var lock = {
			show : visibility(),
			close : pageOver()
		};
		bind(window, 'load', bindClick());
		
		function call(){
			document.writeln("<script type='text/javascript' src='maskFanOut.js'></script>");
			document.writeln("<script type='text/javascript' src='lib/preventDefault.js'></script>");
			document.writeln("<script type='text/javascript' src='lib/eachFun.js'></script>");
		}
		
		function call2(){
			document.writeln("<script type='text/javascript' src='safeFun.js'></script>");

			document.writeln("<script type='text/javascript' src='lib/variableFun.js'></script>");

			document.writeln("<script type='text/javascript' src='maskFun.js'></script>");
		}