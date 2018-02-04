/**
 * called in Calendar.js
 * @returns
 */
function dateFun(){
	Calendar.prototype.getYearMenu = calendarGetYearMenu(year);
	Calendar.prototype.getMonthMenu = calendarGetMonthMenu();
	Calendar.prototype.getToday = calendarGetToday();
}