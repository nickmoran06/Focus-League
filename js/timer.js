"use strict"

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  var url = tabs[0].url;
});

var n = 0;
var l = document.getElementById("timer");
window.setInterval(function(){
  l.innerHTML = n;
  n++;
}, 1000);
