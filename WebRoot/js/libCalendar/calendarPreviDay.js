/**
 * called in Calendar.js
 * @returns
 */
function PreviDay(){

	_previDate = new Date(_year,_month - 1,_previDay);
	_dayElement.innerHTML = _previDay;
	_dayElement.title = _previDate.toFormatString("yyyy年mm月dd日");
	_dayElement.value = _previDate.toFormatString("-");	
	_dayElement.style.color = this.style.moreDayColor;	
	_previDay++;
}