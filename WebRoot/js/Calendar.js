callFun();
callFun2();
callFun3();

Calendar(objName);

Calendar.prototype.toString = calendarToString();
Calendar.prototype.getStyle = calendarGetStyle();
Calendar.prototype.getHeader = calendarGetHeader();
getBodyFun();
dateFun();
Calendar.prototype.show = calendarShow();

Calendar.prototype.hide = calendarHide();

PreviDay();

NextDay();

Calendar.prototype.bindDate = calendarBindDate(date);
Calendar.prototype.bindHeader = calendarBindHeader();	
	
Calendar.prototype.onClick = calendarOnClick(obj);
Calendar.prototype.onChangeYear = calendarOnChangeYear(isnext);
Calendar.prototype.onChangeMonth = calendarOnChangeMonth(isnext);
Calendar.prototype.showMenu = calendarShowMenu(isYear);
Calendar.prototype.hideMenu = calendarHideMenu();

Nan0Mod = function()
{
	//	return isNaN(this) ? 0 : this;
	if(isNaN(this)){
		return 0;
	}else{
		return this;
	}
}


ToFormatStringMod = calendarToFormatString(fs);

calendarEnd();
