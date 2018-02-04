/**
 * called in Calendar.js
 * @returns
 */
function NextDay(){

	_nextDate = new Date(_year,_month + 1,_nextDay);
	_dayElement.innerHTML = _nextDay;
	_dayElement.title = _nextDate.toFormatString("yyyy年mm月dd日");
	_dayElement.value = _nextDate.toFormatString("-");
	_dayElement.style.color = this.style.moreDayColor;	
	_nextDay++;		
}