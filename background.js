chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.executeScript(null, {file: "sysuwlan.js"});
  login();
  setInterval(function(){
   	login();
  }, 60*1000);
});

