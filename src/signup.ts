// Sign-up functionality
const signupForm = document.getElementById('signup-form') as HTMLFormElement;

if (signupForm) {
    console.log("Form found!");

    signupForm.addEventListener('submit', function (event: Event) {
        event.preventDefault();

        const username = (document.getElementById('username') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        const userData = {
            username: username,
            email: email,
            password: password
        };

        // Store the user data in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Signup successful! You will be redirected to the login page.');
        window.location.href = 'loginPage.html';
    });
} else {
    console.log("Signup form not found!");
}

