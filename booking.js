let a = document.getElementById("f1") ;
let b = document.getElementById("f2") ;
let c = document.getElementById("f3") ;
let d = document.getElementById("f4") ;
let b1 = parseInt("b") ;
let x = 1;

function validate(){
    if(a.value.length == 0){
        alert("Name is Empty") ;
        x = 0 ;
    }
    else if(a.value.length < 4){
        alert("Name should be of atleast 4 characters") ;
        x = 0 ;
    }
    else{
        x = 1 ;
    }

    if(b.value.length == 0){
        alert("Phone Number is Empty") ;
        x = 0 ;
    }
    else if(b.value.length != 10){
        alert("Invalid Phone Number") ;
        x = 0 ;
    }
    else if(isNaN(b.value)){
        alert("Invalid Phone Number") ;
        x = 0 ;
    }
    else{
        x = 1 ;
    }

    if(c.value.length == 0){
        alert("Email is Empty") ;
        x = 0 ;
    }
    else if(c.value.length < 11){
        alert("Invalid Mail Id")
    }
    else{
        x = 1 ;
    }

    if(d.value.length == 0){
        alert("Password is Empty") ; 
        x = 0 ;
    }
    else if(d.value.length < 8){
        alert("Password Must be of atleast 8 characters") ;
        x = 0 ;
    }
    else{
        x = 1 ;
    }

    if(x == 1){
        alert("Registered Successfully! Check MailBox to Verify Your Account.")
        return true ;
    }
    else{
        return false ;
    }
}

function eye(){
    let d = document.getElementById("f4") ;
    let i1 = document.getElementById("i1") ;
    let i2 = document.getElementById("i2") ; 
    
    if(d.type == "password"){
        d.type = "text" ;
        i1.style.display = "none" ;
        i2.style.display = "block" ;
    }

    else{
        d.type = "password" ;
        i1.style.display = "block" ;
        i2.style.display = "none" ;
    }
}