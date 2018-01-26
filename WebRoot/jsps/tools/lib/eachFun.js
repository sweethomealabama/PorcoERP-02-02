/**
 * called in mask.js
 * @param a
 * @param b
 * @returns
 */
function eachFun(a, b) {
			for ( var i = 0, len = a.length; i < len; i++)
				b(a[i], i);
		}