/**
 * called in Calendar.js
 * @returns
 */
function getBodyFun(){
	Calendar.prototype.getBody = calendarGetBody();
	Calendar.prototype.getBodyBar = calendarGetBodyBar();
}