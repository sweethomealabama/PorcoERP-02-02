/**
 * called in Calendar.js
 * @param evt
 * @returns
 */
function closeCalendar(evt){
	evt = evt || window.event; 
	var _target= evt.target || evt.srcElement; 
	if(!_target.getAttribute("Author") &&  _target != inputObj && _target != targetObj)
	{
		getObjById("Calendar").style.display = "none"; 	  
	}  
}