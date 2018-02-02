/**
 * called in Calendar.js
 * @returns
 */
function calendarGetBodyBar()
{
	var str = '<table Author="alin_bar" id="cdrBodyBar" class="cdrBodyBar" style="cursor:move;" cellSpacing="2" cellPadding="0"><tr Author="alin_bar" align="center">\n';
	var day = new Array('日','一','二','三','四','五','六');
	var i = 0;	
	for(i = 0; i < 7; i++)
	{
		str += '<td Author="alin_bar">' + day[i] + '</td>\n';     
	}
	str += '</tr></table>';
	return str;  
}