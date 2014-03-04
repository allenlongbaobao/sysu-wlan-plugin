document.onload = function(){
  console.log ("hello");
}

detect_online = function(callback){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.baidu.com");
  xhr.onreadystatechange = function (){
	if (xhr.readyState == 4) {
	  var status = xhr.status;
	  if(status == 200){callback(true);}
	  else callback(false);
	}
  }
  xhr.send();
}

login = function(callback){
  options = "PtUser=" + localStorage["netid"] + 
	"&PtPwd=" + localStorage["pwd"] +
	"&PtButton=" + "Logon"
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://10.10.2.22/portal/logon.cgi");
  xhr.onreadystatechange = function (){
	if (xhr.readyState == 4) {
	  var res = (xhr.responseText);
	  console.log(xhr);
	  if(xhr.status == 200) { 
		localStorage["set_is_on"] = "on";
		callback({result: "success"});
	  }else 
	  	callback({result: "failed"});
	}
  }
  xhr.send(options);
}

logout = function(callback){
  options = "PtButton=" + "Logoff"
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://10.10.2.22/portal/logon.cgi");
  xhr.onreadystatechange = function() {
	if (xhr.readyState == 4){
	  if (xhr.status == 200) {
		localStorage["set_is_on"] = "off";
	  }
	  var res = xhr.responseText;
	  callback();
	}
  }
  xhr.send(options);

}
