/**
 * called in Calendar.js
 * @param obj
 * @returns
 */
function calendarOnClick(obj){

		if(obj.innerHTML != "")  this.dateInput.value = obj.value;
		this.hide();
		//自定义真值隐藏元素组件赋值
		//当前组件为targetObj
		//获取真值隐藏元素组件
		var realValueObject = targetObj.nextSibling.nextSibling;
		//将显示结果obj.value格式化为long值
		var dates = obj.value.split("-");
		var tempDate = new Date(dates[0],dates[1]-1,dates[2]);
		//将值放入隐藏组件
		realValueObject.value = tempDate.getTime();

	
}