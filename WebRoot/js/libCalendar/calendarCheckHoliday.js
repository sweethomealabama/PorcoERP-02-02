/**
 * called in Calendar.js
 * @returns
 */
function calendarCheckHoliday (){
	_dayElement.innerHTML = _day;
	if(_day == _date.getDate())
	{
		this.onMouseOver(_dayElement);
		_dayElement.onmouseover = Function("");   
		_dayElement.onmouseout = Function(""); 					  			    
	}
	if(this.isHoliday(_year,_month,_day))
	{
		_dayElement.style.color = this.style.bodyHolidayFontColor;			  
	}
	_curDate = new Date(_year, _month, _day);
	_dayElement.title =  _curDate.toFormatString("yyyy年mm月dd日");
	_dayElement.value = _curDate.toFormatString("-");
	_day++;
}