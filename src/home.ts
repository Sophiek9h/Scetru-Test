// Get elements
const welcomeMessage = document.getElementById('welcome-message') as HTMLElement;
const logoutButton = document.getElementById('signout') as HTMLButtonElement;
const activityForm = document.getElementById('activity-form') as HTMLFormElement;
const favoriteColorInput = document.getElementById('favorite-color') as HTMLInputElement;
const seasonRadios = document.querySelectorAll('input[name="season"]');

// Retrieve the token and logged-in user's details from localStorage
const authToken = localStorage.getItem('authToken'); // Retrieve the authentication token
const storedUserData = JSON.parse(localStorage.getItem('userData') || '{}');

// Check if the user is authenticated
if (authToken && storedUserData.username) {
    // If authenticated, update the welcome message with the user's name
    welcomeMessage.textContent = `Welcome, ${storedUserData.username}!`;
    console.log("User token is", authToken);
} else {
    // If not authenticated, redirect back to the login page
    alert('You must be logged in to access this page.');
    window.location.href = 'loginPage.html';
}

// Track activity for favorite color input
favoriteColorInput.addEventListener('input', (event) => {
    console.log('User entered favorite color:', favoriteColorInput.value);
});

// Track activity for radio button selection (favorite season)
seasonRadios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
        console.log('User selected season:', (event.target as HTMLInputElement).value);
    });
});

// Track form submission
activityForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedSeason = document.querySelector('input[name="season"]:checked') as HTMLInputElement;
    const favoriteColor = favoriteColorInput.value;

    console.log('Form Submitted');
    console.log('Favorite Color:', favoriteColor);
    console.log('Selected Season:', selectedSeason ? selectedSeason.value : 'None');

    alert('Activity submitted! Check console for logged activity.');
});

// Logout button functionality
logoutButton.addEventListener('click', () => {
    // Clear the user data and token from localStorage
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
    
    // Redirect back to the login page
    window.location.href = 'index.html';
});
