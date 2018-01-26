/**
 * called in list.js
 * @param msg
 * @param uuid
 * @returns
 */
function showMsg(msg,uuid){
			//top.document.getElementById("context-msg").style.display = "block";
			top.$('context-msg').style.display = "block";
			top.$('context-msg-text').innerHTML=msg;
			top.$('hid-action').value="actionName";
			top.lock.show();
}