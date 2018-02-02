/**
 * called in Calendar.js
 * @param fs
 * @returns
 */
function calendarToFormatString(fs)
{
	if(fs.length == 1)
	{ 
		return this.getFullYear() + fs + (this.getMonth() + 1) + fs + this.getDate(); 
	}
	fs = fs.replace("yyyy",this.getFullYear());
	fs = fs.replace("mm",(this.getMonth() + 1));
	fs = fs.replace("dd",this.getDate());
	return fs;
}