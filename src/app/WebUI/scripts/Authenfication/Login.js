document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.formClass form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Create an object with the user credentials
        const credentials = {
            username: username,
            password: password
        };

        // Fetch to authenticate user
        fetch('http://localhost:9090/pma/api/v1/users/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid credentials');
            }
            // Successful login, redirect to the main panel page
            window.location.href = '/src/app/WebUI/html/MainPage.html';
        })
        .catch(error => {
            console.error('Error during login:', error);
        });
    });
});
