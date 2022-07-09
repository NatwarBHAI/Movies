document.querySelector("form").addEventListener("submit", myFunction);

let dataArr = JSON.parse(localStorage.getItem("users")) || [];
function myFunction(event) {
    event.preventDefault();
    let form = document.querySelector("#form");
    let name = form.name.value;
    let contact = form.mobile.value;
    let email = form.email.value;
    let password = form.passwd.value;
    let userData = new user(name, contact, email, password);
    if(userData.name.length<3){
        alert("please fill the details");
    }else if(userData.contact.length<10){
        alert("please enter 10 digit mobile number");
    }else if(userData.email.length<1){
        alert("please enter your email Id")
    }else if(userData.password.length<5){
        alert("password length should be greater than 4");
    }else{
        if (verifyData(userData.email) === true) {
            dataArr.push(userData);
            localStorage.setItem("users", JSON.stringify(dataArr));
            alert("signup successful");
            window.location.href = "login.html";
        } else {
            alert("user already exist");
        }
    }
}
function user(n, c, e, p) {
    this.name = n;
    this.contact = c;
    this.email = e;
    this.password = p;
}
function verifyData(email) {
    let Filter = dataArr.filter(function (elem) {
        return elem.email === email;
    });
    if (Filter.length > 0) {
        return false;
    } else {
        return true;
    }
}