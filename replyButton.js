var i = 0;
var replyButtonElement = "<div class=\"zgMAae orLAid magicReplyButton\" data-focus-button-on-close=\"true\"><div role=\"button\" jscontroller=\"VXdfxd\" jsaction=\"focus:AHmuwe; blur:O22p3e;\" jsshadow=\"\" jsname=\"JlEEbd\" class=\"mUbCce n8aqX M9Bg4d\" aria-label=\"Reply\" aria-disabled=\"false\" tabindex=\"0\" data-tooltip=\"Reply\" data-tooltip-vertical-offset=\"-12\" data-tooltip-horizontal-offset=\"0\"><div class=\"\"></div><span jsslot=\"\" class=\"xjKiLb \"><span class=\"\" style=\"top: -10px\"><svg viewBox=\"0 0 24 24\" class=\" f8lxbf UVO9qc ZnfIwf\"><path d=\"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"></path></svg></span></span></div></div>"
replyButtonElement = new DOMParser().parseFromString(replyButtonElement, "text/html").body.firstElementChild;
var actionBubbles = document.getElementsByClassName("eWw5ab");
for (i = 0; i < actionBubbles.length; i++) {
	if (actionBubbles[i].contains(replyButtonElement) == false) {
		actionBubbles[i].appendChild(replyButtonElement);
	}
}
var replyButtons = document.getElementsByClassName("magicReplyButton");
for (i = 0; i < replyButtons.length; i++) {
	replyButtons[i].addEventListener("click", function (e) {

		if (e.composedPath()[7].innerText == "") {
			if (e.composedPath()[8].innerText == "") {
				passMessage("N/A");
			} else {
				passMessage(e.composedPath()[8].innerText);
			}
		}
	});
}

function passMessage(message) {
	console.log("Text: \"" + message + "\"");
	document.getElementsByClassName("oAzRtb krjOGe")[0].innerText = message;

}