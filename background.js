chrome.browserAction.onClicked.addListener(function(tab){ //login();
});


set = function(){
  var timer = setInterval(function(){
	detect_online(function(result){
	  if(result == false) {
		login(function(response){
		  if (response && response.result == "success"){
			start.innerHTML = "已开启"
		  	start.disabled = true;
		  }
		  else {
			alert("开启失败！");
		  }
		});
	  } 
	});
  }, 10*1000);
  localStorage['timer'] = timer;
}

set();
