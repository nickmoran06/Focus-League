"use strict"

let websites = [
  "https://www.udemy.com/*",
  "https://platzi.com/*",
  "https://keep.google.com/*",
  "https://stackoverflow.com/*",
  "https://www.geeksforgeeks.org/*",
  "https://github.com/*",
  "https://www.coursera.org/*",
  "https://www.deepl.com/*",
  "https://intranet.hbtn.io/",
  "https://www.digitalocean.com/",
  "https://www.wikipedia.org/",
  "https://translate.google.com/",
];


chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  var url = tabs[0].url;
  console.log(url)
  var n = 0;
  var l = document.getElementById("timer");

  for (let urls in websites) {
    if (url == websites[urls]) {
      window.setInterval(function(){
        l.innerHTML = n;
        n++;
      }, 1000);
    }
  }
});
