document.getElementById("btn").addEventListener("click", function(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

const storedPassword = localStorage.getItem(username);

if(storedPassword === password){
    alert("Login successful! WELCOME, " + username);
    window.location.href = "home.html";
}else{
    alert("Invalid username or password!");
}


});