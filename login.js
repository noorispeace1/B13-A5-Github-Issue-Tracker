
const loginPage = document.getElementById('loginPage');
const loginForm = document.getElementById('loginForm');

function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if(user === "admin" && pass === "admin123") {
        alert("Login successful");
        window.location.assign("index.html"); 
    } else {
        alert("Invalid credentials! Please try again.");
    }
}
loginForm.addEventListener("submit", login);