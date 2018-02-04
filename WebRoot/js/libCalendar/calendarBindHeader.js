/**
 * called in Calendar.js
 * @returns
 */
function calendarBindHeader()
{
	var _curYear = getObjById("currentYear");
	var _curMonth = getObjById("currentMonth");
	var _watermark = getObjById("cdrWatermark");
	_curYear.innerHTML = this.date.toFormatString("yyyy年");
	_curMonth.innerHTML =  this.date.toFormatString("mm月");
	_watermark.innerHTML = this.date.getFullYear();     
}