/**
 * called in Calendar.js
 * @returns
 */
function calendarGetToday()
{
	var _date = new Date();
	this.bindDate(_date.toFormatString("-"));
};	
Calendar.prototype.isHoliday = function(year,month,date)
{
	var _date = new Date(year,month,date);
	return (_date.getDay() == 6 || _date.getDay() == 0);
};
Calendar.prototype.onMouseOver = function(obj)
{
	obj.className = "dayOver";
};
Calendar.prototype.onMouseOut = function(obj)
{
	obj.className = "dayOut";
}