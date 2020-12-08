//  =======================================================
//  File:       replyButton.js
//  Version:	v.0.1.3
//  Author:     Rodion "R.Beat" Grinberg (https://rbeat.gq)
//  Desc:	Reply button functionallity in Web Version
//		of Google Chat. To test in Chrome Console.
//  =======================================================


var i = 0;
var replyButtonElement = "<div class=\"zgMAae orLAid magicReplyButton\" data-focus-button-on-close=\"true\"><div role=\"button\" jscontroller=\"VXdfxd\" jsaction=\"focus:AHmuwe; blur:O22p3e;\" jsshadow=\"\" jsname=\"JlEEbd\" class=\"mUbCce n8aqX M9Bg4d\" aria-label=\"Reply\" aria-disabled=\"false\" tabindex=\"0\" data-tooltip=\"Reply\" data-tooltip-vertical-offset=\"-12\" data-tooltip-horizontal-offset=\"0\"><div class=\"\"></div><span jsslot=\"\" class=\"xjKiLb \"><span class=\"\" style=\"top: -10px\"><svg viewBox=\"0 0 24 24\" class=\" f8lxbf UVO9qc ZnfIwf\"><path d=\"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z\"></path></svg></span></span></div></div>"
replyButtonElement = new DOMParser().parseFromString(replyButtonElement, "text/html").body.firstElementChild;
var actionBubbles = document.getElementsByClassName("eWw5ab");
for (i = 0; i < actionBubbles.length; i++) {
    var duplicate = replyButtonElement.cloneNode(true);
	if (actionBubbles[i].contains(replyButtonElement) == false) {
		actionBubbles[i].appendChild(duplicate);
	}
}
var replyButtons = document.getElementsByClassName("magicReplyButton");
for (i = 0; i < replyButtons.length; i++) {
	replyButtons[i].addEventListener("click", function (e) {
		if (e.composedPath()[7].innerText == "") {
			if (e.composedPath()[8].innerText == "") {
				passMessage("N/A", e.composedPath()[13].innerText.split(/\r?\n/)[0]);
			} else {
				passMessage(e.composedPath()[8].innerText, e.composedPath()[13].innerText.split(/\r?\n/)[0]);
			}
		} else {
			passMessage(e.composedPath()[7].innerText, e.composedPath()[12].innerText.split(/\r?\n/)[0]);
		}
	});
}

function passMessage(message, author) {
	document.getElementsByClassName("oAzRtb krjOGe")[0].innerText = "``` " + message + " ```\n@" + author;
    	document.getElementsByClassName("Ct5IYc qs41qe")[0].innerText = "";
}
