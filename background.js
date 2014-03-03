chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.executeScript(null, {file: "sysuwlan.js"});
  setInterval(function(){
  	login();
  }, 3000);
});

