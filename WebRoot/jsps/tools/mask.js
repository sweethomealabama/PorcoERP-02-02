/**
 * this file is called in mask.jsp file
 */
// 获取对象
document.writeln("<script type='text/javascript' src='maskFanOut.js'></script>");
document.writeln("<script type='text/javascript' src='lib/preventDefault.js'></script>");

document.writeln("<script type='text/javascript' src='safeFun.js'></script>");

document.writeln("<script type='text/javascript' src='maskFun.js'></script>");
		var $ = elementById(id);
		// 遍历
		var each = function(a, b) {
			for ( var i = 0, len = a.length; i < len; i++)
				b(a[i], i);
		};
		// 事件绑定
		var bind = bindFun(obj, type, fn);

		// 移除事件
		var unbind = unbindFun(obj, type, fn);

		// 阻止浏览器默认行为
		var stopDefault = preventDefault(e);
		// 获取页面滚动条位置
		var getPage = pageGetter();

		// 锁屏
		
		var lock = {
				

			show : visibility(),
			close : pageOver()
		};
		bind(window, 'load', bindClick());
		/*
		<s:if test="#msg!=null and !#msg.isEmpty()">
			top.$('hid-action').value = 'content.action';
			top.$('context-msg-text').innerHTML='<s:property value="#msg"/>';
			top.$('context-msg').style.display = "block";
			top.lock.show();
		</s:if>
		*/