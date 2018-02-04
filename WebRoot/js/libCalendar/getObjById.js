/**
 * called in Calendar.js
 * @param obj
 * @returns
 */
function getObjById(obj)
{
	if(document.getElementById)
	{
		return document.getElementById(obj);
	}
	else
	{
		alert("浏览器不支持!");
	}
}