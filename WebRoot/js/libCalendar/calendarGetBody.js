/**
 * called in Calendar.js
 * @returns
 */
function calendarGetBody()
{
	var n = 0;
	var str = this.getBodyBar();
	str += '<table Author="alin" class="cdrBody" cellSpacing="2" cellPadding="0">\n';   
	var i = 0;
	for(i = 0; i < 6; i++)
	{	  
		str += '<tr Author="alin" align="center">';
		var j = 0;
		for(j = 0; j < 7; j++)
		{
			str = str + '<td Author="alin" class="dayOut" id="cdrDay'+(n)+'" width="13%"></td>\n';
			n=n+1;
		}
		str = str + '</tr>';
	}
	str = str + '</table>\n';
	str = str + '<table Author="alin" class="cdrBodyBar" cellSpacing="2" cellPadding="0"><tr align="center" Author="alin"><td Author="alin" style="cursor:pointer;" onclick="'+this.Obj+'.getToday();">今天：'+new Date().toFormatString("yyyy年mm月dd日")+'</td></tr></table>\n';
	return str;
}