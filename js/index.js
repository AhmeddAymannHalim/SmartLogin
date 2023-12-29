var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var passInput = document.getElementById('passInput');
var loginButton = document.getElementById('loginButton');
var dangerInput = document.getElementById('dangerInput');
var dangerEmail = document.getElementById('dangerEmail');
var loginName = document.getElementById('text-login');




function logingToAccount() {
  if(localStorage.getItem('email') == emailInput.value && localStorage.getItem('password')== passInput.value){
     location.href = "login.html";
  }
else{
    dangerEmail.classList.replace('d-none','d-block')
}
}
function clearForm() {
    nameInput.value="",
    emailInput.value="",
    passInput.value="";
    
}







