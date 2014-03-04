var start = document.getElementById("start");
var close = document.getElementById("close");
var option= document.getElementById("option");
var about = document.getElementById("about");

window.onload = function(){
  var set_is_on = localStorage["set_is_on"];
  if (set_is_on == "on")
  {
	start.innerHTML = "已开启";
	start.disabled = true;
  }

}

start.onclick = function(){
  login(function(response){
	if (response && response.result == "success"){
	  start.innerHTML= "已开启";
	  start.disabled = true;
	  alert("已开启");
	}
	else {alert("开启失败");}
  });
}
close.onclick = function(){
  logout(function(){
	start.innerHTML = "开启";
	start.disabled = false;
	remove();
  });
}
option.onclick = function(){
  chrome.tabs.create({url: "options.html"});
}

about.onclick = function(){
  chrome.tabs.create({url: 'about.html'})
}

remove = function(){
  timer = localStorage['timer'];
  clearInterval(timer);
}
