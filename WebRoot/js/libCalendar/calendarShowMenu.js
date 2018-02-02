/**
 * called in Calendar.js
 * @param isyear
 * @returns
 */
function calendarShowMenu(isyear)
{

	var _menu = getObjById("cdrMenu");

	if(isyear != null)
	{    
		var _obj;
		if(isyear){
			_obj=getObjById("currentYear");
		}
		else{
			_obj=getObjById("currentMonth");
		}


		if(isyear)
		{
			this.getYearMenu(this.date.getFullYear() - 5);	   
		}
		else
		{
			this.getMonthMenu();	   
		}
		_menu.style.top = (_obj.offsetTop + _obj.offsetHeight) + 'px';
		_menu.style.left = _obj.offsetLeft + 'px';	
		_menu.style.width = _obj.offsetWidth + 'px';
	}
	if (this.timer != null) clearTimeout(this.timer);
	_menu.style.display="";
}