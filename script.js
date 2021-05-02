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

function signup(){
  location.href = "signup.html";
}