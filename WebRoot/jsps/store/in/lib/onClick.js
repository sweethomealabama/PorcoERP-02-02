/**
 * this file is called in input.js
 * @returns
 */

function onClick(storeUuiArr, storeNameArr) {
			var $myTr = $(this).parent().parent();
			var $nextTr = $myTr.next();
			if($nextTr.attr("class") == "in"){
				return;
			}
			if($(".in").length>0){
				$(".in").remove();
			}
			
			document.writeln("<script type='text/javascript' src='complementarOnClick.js'></script>");
			var temp = complementar(storeUuiArr, storeNameArr);
			$newTr = temp[0];
			totalNum = temp[1];
			document.writeln("<script type='text/javascript' src='finalOnClick.js'></script>");
			finalOnClick($newTr, totalNum);
		}