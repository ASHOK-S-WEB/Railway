// index.html page
document.getElementById("signin").addEventListener('click',signIn);
function signIn()
{
  var user = (document.getElementById("user").value);
  var psswrd = (document.getElementById("psswrd").value)
  if(user == "" || psswrd == ""){
    alert("Field should not be null");
  }
  else if ((user != "Ashok") || ( psswrd != "12345"))
  {
    alert("Invalid User");
  }
  else{
    location.href = "main.html";
  }
}



document.getElementById("signup").addEventListener('click',signup);
function signup(){
  location.href = "signup.html";
}

function back(){
  location.href = "index.html";
}

// Signup.html

function clear(){
  alert("hi");
  document.getElementById("myform").reset();
}