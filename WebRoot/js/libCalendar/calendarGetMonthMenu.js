/**
 * called in Calendar.js
 * @returns
 */
function calendarGetMonthMenu()
{
	var str = '<table Author="alin" cellSpacing="0" class="cdrMenu" cellPadding="0">\n';
	var i = 1;	
	var _date;
	for(i = 1; i <= 12; i++)
	{   
		_date = new Date(this.date.getFullYear(),i-1,this.date.getDate());		
		str += '</tr><tr Author="alin" align="center"><td Author="alin" height="16" ';
		if(this.date.getMonth() + 1 != i)
		{
			str += 'onmouseover="this.className=\'menuOver\'" onmouseout="this.className=\'\'" ';
		}
		else
		{
			str += 'class="menuOver"';
		}
		str += 'onclick="' + this.Obj + '.bindDate(\'' + _date.toFormatString("-") + '\')">'+i+'月</td></tr>\n';
	}
	str += '</table>';
	var _menu = getObjById("cdrMenu");
	_menu.innerHTML = str;   
}