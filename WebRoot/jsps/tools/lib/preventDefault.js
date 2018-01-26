/**
 * called in mask.js
 * @param e
 * @returns
 */
function preventDefault(e) {
			e.preventDefault ? e.preventDefault() : e.returnValue = false;
		}