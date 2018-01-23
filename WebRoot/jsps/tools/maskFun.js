/**
 * this file is called in mask.js
 * 
 * @param obj
 * @param type
 * @param fn
 * @returns
 */
function bindFun(obj, type, fn) {
			if (obj.attachEvent) {
				obj['e' + type + fn] = fn;
				obj[type + fn] = function() {
					obj['e' + type + fn](window.event);
				}
				obj.attachEvent('on' + type, obj[type + fn]);
			} else {
				obj.addEventListener(type, fn, false);
			}
			;
		}
function unbindFun(obj, type, fn) {
	if (obj.detachEvent) {
		try {
			obj.detachEvent('on' + type, obj[type + fn]);
			obj[type + fn] = null;
		} catch (_) {
		}
		;
	} else {
		obj.removeEventListener(type, fn, false);
	}
	;
}

function elementById(id) {
	return document.getElementById(id);
}