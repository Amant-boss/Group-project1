var username = document.getElementById("username");
var password = document.getElementById("password");
var email = document.getElementById("email");
var error_label = document.getElementById("error");

var username_regex = /^\w+$/;
var password_regex = /^\w+$/;

error_label.style.display = "none";
error_label.style.color = "red";

function validation(){
if(!(username.value.match(username_regex)) || !(password.value.match(password_regex))){
    error_label.style.display = "block";
    return false;
}else{
    return true;}
}