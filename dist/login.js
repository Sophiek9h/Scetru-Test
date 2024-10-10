"use strict";
// Login functionality
var loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Retrieve user data from localStorage
        var storedUserData = JSON.parse(localStorage.getItem('userData') || '{}');
        console.log('Stored User Data:', storedUserData);
        if (storedUserData.username && storedUserData.password) {
            var enteredUsername = document.getElementById('username').value;
            var enteredPassword = document.getElementById('password').value;
            console.log('Entered Username:', enteredUsername);
            console.log('Entered Password:', enteredPassword);
            // Check if entered credentials match stored data
            if (storedUserData.username === enteredUsername && storedUserData.password === enteredPassword) {
                console.log('Login successful!'); // Ensure this runs
                // Generate a random token
                var authToken_1 = 'token_' + Math.random().toString(36).substr(2);
                console.log('Generated auth token:', authToken_1); // Ensure this runs
                // Store the token in localStorage
                localStorage.setItem('authToken', authToken_1);
                console.log('Auth token stored successfully'); // Ensure this runs
                alert('Login successful! Redirecting to dashboard...');
                // Redirect to home page
                window.location.href = 'home.html';
            }
            else {
                console.log('Login failed: Invalid username or password.');
                alert('Invalid username or password. Please try again.');
            }
        }
        else {
            console.log('No stored user data found.');
            alert('No user data found. Please sign up first.');
        }
    });
}
