let userData=JSON.parse(localStorage.getItem("users")) || [];
document.querySelector("form").addEventListener("submit",verifyUser);

function verifyUser(event){
    event.preventDefault();
    let form=document.querySelector("#form");
    let email=form.email.value;
    let password=form.passwd.value;
    if(dataFetch(email,password)===true){
        alert("login successful");
        window.location.href="index.html";
    }else{
        alert("wrong credentials");
    }
}
function dataFetch(email,password){
    let Filter=userData.filter(function(elem){
        return elem.email===email && elem.password===password;
    });
    if(Filter.length>0){
        return true;
    }else{
        return false;
    }
}