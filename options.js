window.onload = function(){
  save_button = document.getElementById("save");
  restore_options();
  save_button.onclick = save_options
}

// Saves options to localStorage.
function save_options() {
  var input_netid = document.getElementById("netid");
  var input_pwd = document.getElementById("pwd");
  var netid = input_netid.value;
  var pwd = input_pwd.value;
  console.log(netid);

  localStorage["netid"] = netid;
  localStorage["pwd"] = pwd;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var netid = localStorage["netid"];
  var pwd = localStorage["pwd"]
  if (!netid|| !pwd) {
    return;
  }
  var input_netid = document.getElementById("netid");
  var input_pwd = document.getElementById("pwd");
  input_netid.value = netid;
  input_pwd.value = pwd; 
}

