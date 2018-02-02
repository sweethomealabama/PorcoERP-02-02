/**
 * called in Calendar.js
 * @param date
 * @returns
 */
function calendarBindDate(date)
{
	var _monthDays = new Array(31,30,31,30,31,30,31,31,30,31,30,31);	
	var _arr = date.split('-');		
	var _date = new Date(_arr[0],_arr[1]-1,_arr[2]);	
	if(isNaN(_date)) _date = new Date();	
	this.date = _date;
	this.bindHeader();	
	var _year = _date.getFullYear(); var _month = _date.getMonth(); var _day = 1;	
	var _startDay = new Date(_year,_month,1).getDay();

	var _previYear;

	if(_month==0){
		_previYear=_year-1
	}else{
		_previYear=_year;
	}

	var _previMonth;

	if(_month==0){
		_previMonth=11
	}else{
		_previMonth=_month-1;
	}

	var _previDay = _monthDays[_previMonth];

	//if (_previMonth == 1)_previDay =((_previYear%4==0)&&(_previYear%100!=0)||(_previYear%400==0))?29:28;	
	//_previDay -= _startDay - 1;

	if(_previMonth == 1){
		if((((_previYear%4==0)&&(_previYear%100!=0))||(_previYear%400==0))){
			_previDay =29;
		}
	}else{
		_previDay =28;
	}
	_previDay -= _startDay - 1;

	var _nextDay = 1;

	if((_year%4==0)&&(_year%100!=0)||(_year%400==0)){
		_monthDays[1]=29;
	}else{
		_monthDays[1]=28;
	}
	var _previDate, _nextDate, _curDate, _day, i=0, temp=new Date(_year,_month,1).getDay() && _day <= _monthDays[_month];
	for(i = 0; i < 40; i++)
	{	
		var _dayElement = getObjById("cdrDay" + i);
		_dayElement.onmouseover = Function(this.Obj + ".onMouseOver(this)");
		_dayElement.onmouseout = Function(this.Obj + ".onMouseOut(this)");
		_dayElement.onclick = Function(this.Obj + ".onClick(this)");
		this.onMouseOut(_dayElement);	 		
		_dayElement.style.color = "";
		if(i < _startDay)
		{
			//获取上一个月的日期
			if(this.showMoreDay)
			{
				PreviDay();
			}else
			{
				_dayElement.innerHTML = "";
				_dayElement.title = "";
			}
		}
		else if(_day > _monthDays[_month])
		{
			//获取下个月的日期
			if(this.showMoreDay)
			{
				NextDay();
			}else
			{
				_dayElement.innerHTML = "";
				_dayElement.title = "";
			}
		}
		else if(i >= temp)
		{
			//获取本月日期
			CheckHoliday();
		}
		else
		{
			_dayElement.innerHTML = "";
			_dayElement.title = "";
		}	
	}
	var _menu = getObjById("cdrMenu");
	_menu.style.display = "none";	
}