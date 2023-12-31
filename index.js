var emailAccount=document.getElementById("emailAccount")
var passAccount=document.getElementById("passAccount")
var loginMessage=document.getElementById("loginMessage")

var loginList=[];


  

function validateInputs(){
    var emptyEmail=emailAccount.value;
    var emptyPass=passAccount.value;

    if(!emptyEmail || !emptyPass){
        loginMessage.classList.remove("d-none")
    }

    
}
document.getElementById("loginin").addEventListener('click',function(){
    window.location= "./home.html";
})
document.getElementById("signing").addEventListener('click',function(){
    window.location= "./signup.html";
})

