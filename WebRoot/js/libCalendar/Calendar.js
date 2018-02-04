/**
 * called in Calendar.js
 * @param objName
 * @returns
 */
function Calendar(objName){		
	this.style = {
			borderColor       		: "#909eff", //边框颜色
			headerBackColor    		: "#97d645", //表头背景颜色909EFF
			headerFontColor    		: "#ffffff", //表头字体颜色
			bodyBarBackColor  		: "#f4f4f4", //日历标题背景色
			bodyBarFontColor  		: "#000000", //日历标题字体色
			bodyBackColor     		: "#ffffff", //日历背景色
			bodyFontColor           : "#000000", //日历字体色 
			bodyHolidayFontColor    : "#ff0000", //假日字体色
			watermarkColor 		    : "#888888", //背景水印色
			moreDayColor            : "#cccccc" 
	};

	this.showMoreDay = true; //是否显示上月和下月的日期
	this.Obj = objName;		
	this.date = null;
	this.mouseOffset = null;
	this.dateInput = null;
	this.timer = null;	

}