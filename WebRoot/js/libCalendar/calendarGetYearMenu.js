/**
 * called in Calendar.js
 * @param year
 * @returns
 */
function calendarGetYearMenu(year)
{
	var str = '<table Author="alin" cellSpacing="0" class="cdrMenu" cellPadding="0">\n';
	var i = 0;	
	var _date;
	var _year;
	for(i = 0; i < 10; i++)
	{	  
		_year = year + i;
		_date = new Date(_year,this.date.getMonth(),this.date.getDate());
		str += '<tr Author="alin" align="center"><td Author="alin" width="13%" height="16" ';
		if(this.date.getFullYear() != _year)
		{
			str += 'onmouseover="this.className=\'menuOver\'" onmouseout="this.className=\'\'" ';
		}
		else
		{
			str += 'class="menuOver"';
		}
		str += 'onclick="' + this.Obj + '.bindDate(\'' + _date.toFormatString("-") + '\')">' + _year + '年</td>\n';		
		str += '</tr>';
	}
	str += '<tr Author="alin" align="center"><td Author="alin"><table Author="alin" style="font-size:12px;width:100%;" cellSpacing="0" cellPadding="0">\n';
	str += '<tr Author="alin" align="center"><td Author="alin" onmouseover="this.className=\'menuOver\'" onmouseout="this.className=\'\'" onclick="'+this.Obj+'.getYearMenu('+ (year - 10) + ')"><<</td>\n';
	str += '<td Author="alin" onmouseover="this.className=\'menuOver\'" onmouseout="this.className=\'\'" onclick="'+this.Obj+'.getYearMenu('+ (year + 10) +')">>></td><tr>\n';
	str += '</table></td></tr>\n';
	str += '</table>';
	var _menu = getObjById("cdrMenu");
	_menu.innerHTML = str;
}