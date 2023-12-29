var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var passInput = document.getElementById('passInput');
var signupButton = document.getElementById('signupButton');
var dangerInput = document.getElementById('dangerInput');
var dangerEmail = document.getElementById('dangerEmail');
var sucess = document.getElementById('sucess');


var accountInfo =[];


function signupAccount() {
    if(emailInput.value != ""&& passInput.value != ""&&nameInput.value != "") 
 {
    var account = {
        name: nameInput.value,
        email: emailInput.value,
        password: passInput.value
    }
       accountInfo.push(account);
       localStorage.setItem('name',nameInput.value)
       localStorage.setItem('email',emailInput.value);
       localStorage.setItem('password',passInput.value);
       sucess.classList.replace('d-none','d-block') 
       
       
 }
 else if(emailInput.value != localStorage.getItem('email') && passInput.value != localStorage.getItem('password')&&nameInput.value != localStorage.getItem('name')){
    dangerInput.classList.replace('d-none','d-block')
    dangerInput.classList.replace('d-block','d-none')
 }
 

 else{
    dangerEmail.classList.replace('d-none','d-block');
 }
 
}

signupButton.addEventListener('click',function () {
    signupAccount();
    clearForm();
    
});


function clearForm() {
    nameInput.value="",
    emailInput.value="",
    passInput.value="";
    
}







