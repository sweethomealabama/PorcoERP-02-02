/**
 * called in Calendar.js
 * @returns
 */
function calendarEnd(){
	/************公用方法及变量**************/
	var inputObj = null; 
	var targetObj = null;	
	var dragObj = null; 
	var mouseOffset = null; 
	
	getObjById(obj);
	mouseCoords(ev);
	calendarGetPos(e);
	getMouseOffset(target, ev);
	
	documentDragEnd(evt);
	/*********结束**********/
	var c = new Calendar("c");
	document.write(c);
}