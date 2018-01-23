/**
 * called in mask.js
 * @returns
 */
function pageOver() {
				$('pageOverlay').style.visibility = 'hidden';
				each(
						[ 'DOMMouseScroll', 'mousewheel', 'scroll',
								'contextmenu' ], function(o, i) {
							unbind(document, o, lock.mouse);
						});
				unbind(document, 'keydown', lock.key);
			}

function bindClick() {
	$('btn_ok').onclick = hid();
	$('btn_cancel').onclick = function() {
		//删除遮罩的方法调用
		lock.close();
		$('context-msg').style.display = "none";
	};
}

function pageGetter() {
	var dd = document.documentElement, db = document.body;
	return {
		left : Math.max(dd.scrollLeft, db.scrollLeft),
		top : Math.max(dd.scrollTop, db.scrollTop)
	};
}