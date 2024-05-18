// script_login.js

/* LOGIN BUTTON */
document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;

    if (password === "Rover2.0") {
        window.location.href = 'index.html';
    } else {
        alert('Incorrect password. Please try again');
    }
});