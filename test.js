var browser = browser || chrome;
var text = '';

var hAux = 0;
var mAux = 0;
var sAux = 0;

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "gethAux") {
        sendResponse({result: hAux});
    } else if (request.type == "getmAux") {
        sendResponse({result: mAux});
    } else if (request.type == "getsAux") {
        sendResponse({result: sAux});
    } else if (request.type == "sethAux") {
        hAux = request.value;
        sendResponse({result: text});
    } else if (request.type == "setmAux") {
        mAux = request.value;
        sendResponse({result: text});
    } else if (request.type == "setsAux") {
        sAux = request.value;
        sendResponse({result: text});
    }
});

var at = {};
var ct = -1;

chrome.tabs.onActivated.addListener(function(obj) {
    if (at[obj.tabId] !== undefined) {
    	console.log("Ya se encuentra registrado " + hAux + sAux + mAux);
    	at[ct] += Date.now();
    }
    else {
    	console.log("No se encuentra registrado: " + obj.tabId);
    	at[obj.tabId] = Date.now();
    	ct = obj.tabId;
    }
});