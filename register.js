document.getElementById("btn").addEventListener("click", function(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username && password){
        localStorage.setItem(username,password);
        alert("Register successfully! Please login now.");
        window.location.href = "login.html";
    }else{
        alert("Please enter both username and password.");
    }

});