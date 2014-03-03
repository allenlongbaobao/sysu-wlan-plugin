chrome.browserAction.onClicked.addListener(function(tab){
  login();
  setInterval(function(){
   	login();
  }, 60*1000);
});


