
// login functions started
function login(){
    emailCheck(); //first email will be checked
}
function emailCheck(){
    var email='billu'
    var emailcontainer=document.getElementById("exampleInputEmail1")
    if(emailcontainer.value==email){
        passwordCheck() //once email is wright then password will be checked
    }
    else{
        alert("Email_Not working")
    }
}
function passwordCheck(){
    var password='123'
    var passwordcontainer=document.getElementById("exampleInputPassword1")
    if(passwordcontainer.value==password){
        window.location='admin.html' //on valid email and password, admin page will be opened
    }
    else{
        alert("Password_Not working")
    }
}
// login functions ended