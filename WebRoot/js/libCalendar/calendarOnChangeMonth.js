/**
 * called in Calendar.js
 * @param isnext
 * @returns
 */

function calendarOnChangeMonth(isnext)
{
	var _year = this.date.getFullYear();
	var _month = this.date.getMonth() + 1;
	var _date = this.date.getDate();
	if(isnext){ _month= _month + 1;} else {_month= _month - 1;}
	if(_year > 999 && _year <10000)
	{ 
		if(_month < 1) {_month = 12; _year= _year -1;}
		if(_month > 12) {_month = 1; _year= year + 1;}
	}
	else
	{
		alert("年份超出范围（1000-9999）!");
	}  
	this.bindDate(_year + '-' + _month + '-' + _date);
}