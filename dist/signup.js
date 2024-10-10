"use strict";
// Sign-up functionality
var signupForm = document.getElementById('signup-form');
if (signupForm) {
    console.log("Form found!");
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var userData = {
            username: username,
            email: email,
            password: password
        };
        // Store the user data in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Signup successful! You will be redirected to the login page.');
        window.location.href = 'loginPage.html';
    });
}
else {
    console.log("Signup form not found!");
}
