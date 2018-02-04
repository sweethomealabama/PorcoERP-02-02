/**
 * called in Calendar.js
 * @param evt
 * @returns
 */
function documentDragEnd(evt){
	closeCalendar(evt);
	
	dragStart(evt);
	
	drag(evt);
	//拖动结束
	dragEnd(evt);
	/***********End 公用方法*********/
	document.onclick = closeCalendar;
	document.onmousedown = dragStart;
	document.onmousemove = drag;
	document.onmouseup = dragEnd;
}