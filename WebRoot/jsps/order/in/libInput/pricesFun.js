/**
 * called in input.js
 * @param event
 * @param intToFloat
 * @returns
 */
function pricesFun(event, intToFloat){
	document.writeln("<script type='text/javascript' src='pricesVar.js'></script>");
			//先把非数字的都替换掉，除了数字和. 
			$(this).val($(this).val().replace(/[^\d.]/g,""));
	        //必须保证第一个为数字而不是. 
	        $(this).val($(this).val().replace(/^\./g,"0."));
	        //保证只有出现一个.而没有多个. 
	        $(this).val($(this).val().replace(/\.{2,}/g,"."));
	        //保证.只出现一次，而不能出现两次以上
	        $(this).val($(this).val().replace(".","$#$").replace(/\./g,"").replace("$#$",".")); 

	        var vars = pricesVar(intToFloat);
	        var price = vars[0];
	        var num = vars[1];
			//求总计
			total();
		}