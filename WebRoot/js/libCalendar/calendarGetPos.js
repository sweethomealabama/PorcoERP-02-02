/**
 * called in Calendar.js
 * @param e
 * @returns
 */
function getPosition(e)
{
	var left = 0;
	var top  = 0;

	/*while (e.offsetParent){
	left += e.offsetLeft + (e.currentStyle?(parseInt(e.currentStyle.borderLeftWidth)).NaN0():0);
	top  += e.offsetTop  + (e.currentStyle?(parseInt(e.currentStyle.borderTopWidth)).NaN0():0);
	e     = e.offsetParent;
	}
	 */

	while(e.offsetParent){
		if(e.currentStyle){
			left+=e.offsetLeft+parseInt(e.currentStyle.borderLeftWidth).NaN0();
		}else{
			left+=e.offsetLeft;
		}

		if(e.currentStyle){
			top+=e.offsetTop+parseInt(e.currentStyle.borderTopWidth).NaN0();
		}else{
			top+=e.offsetTop;
		}
	}


	/*
	left += e.offsetLeft + (e.currentStyle?(parseInt(e.currentStyle.borderLeftWidth)).NaN0():0);
	top  += e.offsetTop  + (e.currentStyle?(parseInt(e.currentStyle.borderTopWidth)).NaN0():0);
	 */

	if(e.currentStyle){
		left+=e.offsetLeft+parseInt(e.currentStyle.borderLeftWidth).NaN0();
	}else{
		left+=e.offsetLeft;
	}

	if(e.currentStyle){
		top  += e.offsetTop+parseInt(e.currentStyle.borderTopWidth).NaN0();
	}else{
		top  += e.offsetTop;
	}


	return {x:left, y:top};
}