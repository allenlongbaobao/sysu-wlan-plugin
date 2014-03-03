login = function(){
  options = "PtUser=" + localStorage["netid"] + 
	"&PtPwd=" + localStorage["pwd"] +
	"&PtButton=" + "Logon"
  
  console.log(options);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://10.10.2.22/portal/logon.cgi");
  xhr.onreadystatechange = function (){
	if (xhr.readyState == 4) {
	  var res = (xhr.responseText);
	  console.log(res);
	}
  }
  xhr.send(options);
}
