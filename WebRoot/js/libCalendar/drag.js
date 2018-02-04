/**
 * called in Calendar.js
 * @param evt
 * @returns
 */
function drag(evt)
{
	evt =  evt || window.event;	
	if(dragObj)
	{		  
		var mousePos = mouseCoords(evt); 
		dragObj.style.left = (mousePos.x - mouseOffset.x) + 'px';
		dragObj.style.top  = (mousePos.y - mouseOffset.y) + 'px';	  
	}
}

function dragStart(evt){
	evt = evt || window.event;	
	var _target= evt.target || evt.srcElement;
	if(_target.getAttribute("Author") == "alin_bar") 
	{	   
		dragObj = getObjById("Calendar");	   
		mouseOffset = getMouseOffset(dragObj, evt);	 
	}   
}

function dragEnd(evt)
{
	dragObj = null;    
}