/**
 * called in Calendar.js
 * @returns
 */
function calendarGetStyle(){
	
	
		var str = '<style type="text/css">\n';
		str += '.calendar{position:absolute;width:140px!important;width /**/:142px;height:184px!important;height /**/:174px;background-color:'+this.style.bodyBackColor+';border:1px solid ' + this.style.borderColor + ';left:0px;top:0px;z-index:9999;}\n';
		str += '.cdrHeader{background-color:'+ this.style.headerBackColor +';width:140px;height:22px;font-size:12px;color:'+this.style.headerFontColor+';}\n';
		str += '.cdrWatermark{position:absolute;left:0px;top:55px;width:140px;font-family: 黑体;font-size:70px;color:'+this.style.watermarkColor+';z-index:1;text-align:center;}\n';
		str += '.cdrBodyBar{background-color:' + this.style.bodyBarBackColor + ';font-size:12px;color:' + this.style.bodyBarFontColor + ';width:140px;height:20px;}\n';
		str += '.cdrBody{width:140px;height:122px!important; height /**/:110px;font-size:12px;cursor:pointer;color:' + this.style.bodyFontColor + ';}\n';
		str += '.dayOver{height:16px;padding:0px;border:1px solid black;background-color:#f4f4f4;}\n';
		str += '.dayOut{padding:1px;border:none;height:16px;}\n';
		str += '.menuOver{background-color:'+this.style.headerBackColor+';color:'+this.style.headerFontColor+';font-size:12px;}\n';
		str += '.headerOver{border:1px solid black;background-color:#f4f4f4;color:black;cursor:default;}\n';
		str += '.cdrMenu{font-size:12px;border:1px solid #000000;background-color:#ffffff;cursor:default;width:100%}\n';
		str += 'html>body #Calendar{width:142px;174px;}';
		str += '</style>\n';	
		return str;
	
}