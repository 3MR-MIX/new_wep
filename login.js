var users = [{nameInArray:"amr",passInArray:"amr@12345"}
            ,{nameInArray:"ali",passInArray:"ali@12345"}];


function login(){
    var nameFromInput = document.getElementById("user1").value;
    var passFormInput = document.getElementById("pass1").value;
    for(var i=0; i<users.length; i++){
        if(users[i].nameInArray == nameFromInput && users[i].passInArray == passFormInput){
            alert("Login succssfully");
            window.location.href="cart.html";
            return;
        }
    }
    alert("Please try again");
}
function signup(){
    var nameSignup = document.getElementById("user2").value;
    var passSignup = document.getElementById("pass2").value;
    var age = document.getElementById("age2").value;
    var phone = document.getElementById("num2").value;
    try{
        var gender = document.querySelector('input[name=Gender]:checked').value;
    }
    catch{
        alert("Please Choose your gender");
        return false;
    }
    var regix = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{5,20}$/;
    for(var i=0; i<users.length;i++){
        if(nameSignup==users[i].nameInArray){
            alert("username already exist");
            return false;
        }
    }
    if(nameSignup <5 || nameSignup >15){
        alert("username must be between 5 & 15");
        return false;
    }
    if(!regix.test(passSignup)){
        alert("password Weeeeeeeeeeeeeeeek");
        return false;
    }
    if(phone.length !=11){
        alert("phone number should 11 numbers");
        return false;
    }
    if(age<18 || age>60){
        alert("age must be between 18 and 60")
        return false;
    }
    var NewUser = {nameInArray:nameSignup,passInArray:passSignup,age:age,phone:phone,gender:gender}
    users.push(NewUser);
    alert("Sign Up Succsessfully");
    console.log(users);
}
function forget(){
    var userforget = document.getElementById("user3").value;
    var passforget = document.getElementById("pass3").value;
    let r=false;
    if(userforget==""||passforget==""){
        alert("Check Empty filde");
    }
    else{
        for(var i=0;i<users.length;i++){
            if(userforget==users[i].nameInArray){
                users[i].passInArray = passforget;
                alert("changed Succsessfully");
                r=true;
                break;
            }
        }
    }
    if(r == false){
        alert("Please Enter Your Right User");
    }
}
