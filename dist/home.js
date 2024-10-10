"use strict";
// Get elements
var welcomeMessage = document.getElementById('welcome-message');
var logoutButton = document.getElementById('signout');
var activityForm = document.getElementById('activity-form');
var favoriteColorInput = document.getElementById('favorite-color');
var seasonRadios = document.querySelectorAll('input[name="season"]');
// Retrieve the token and logged-in user's details from localStorage
var authToken = localStorage.getItem('authToken'); // Retrieve the authentication token
var storedUserData = JSON.parse(localStorage.getItem('userData') || '{}');
// Check if the user is authenticated
if (authToken && storedUserData.username) {
    // If authenticated, update the welcome message with the user's name
    welcomeMessage.textContent = "Welcome, ".concat(storedUserData.username, "!");
    console.log("User token is", authToken);
}
else {
    // If not authenticated, redirect back to the login page
    alert('You must be logged in to access this page.');
    window.location.href = 'loginPage.html';
}
// Track activity for favorite color input
favoriteColorInput.addEventListener('input', function (event) {
    console.log('User entered favorite color:', favoriteColorInput.value);
});
// Track activity for radio button selection (favorite season)
seasonRadios.forEach(function (radio) {
    radio.addEventListener('change', function (event) {
        console.log('User selected season:', event.target.value);
    });
});
// Track form submission
activityForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var selectedSeason = document.querySelector('input[name="season"]:checked');
    var favoriteColor = favoriteColorInput.value;
    console.log('Form Submitted');
    console.log('Favorite Color:', favoriteColor);
    console.log('Selected Season:', selectedSeason ? selectedSeason.value : 'None');
    alert('Activity submitted! Check console for logged activity.');
});
// Logout button functionality
logoutButton.addEventListener('click', function () {
    // Clear the user data and token from localStorage
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
    // Redirect back to the login page
    window.location.href = 'index.html';
});
