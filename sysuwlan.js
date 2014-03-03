login = function(){
  options = {
	PtUser: localStorage["netid"],
	PtPwd: localStorage["pwd"],
	PtButton: 'Logon'
  }
  console.log(options);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "", true);
  xhr.onreadystatechange = function (){
	if (xhr.readyState == 4) {
	  var res = JSON.parse(xhr.responseText);
	}
  }
  xhr.send();
}
