/**
 * called in Calendar.js
 * @param target
 * @param ev
 * @returns
 */
function getMouseOffset(target, ev)
{
	ev = ev || window.event;
	var docPos    = calendarGetPos(target);
	var mousePos  = mouseCoords(ev);
	return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
}

function mouseCoords(ev)
{
	if(ev.pageX || ev.pageY){
		return {x:ev.pageX, y:ev.pageY};
	}
	return {
		x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
		y:ev.clientY + document.body.scrollTop  - document.body.clientTop
	};
}