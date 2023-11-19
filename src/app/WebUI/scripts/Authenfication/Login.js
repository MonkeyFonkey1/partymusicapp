// document.addEventListener('DOMContentLoaded', function () {
//     const loginForm = document.querySelector('.formClass form');

//     loginForm.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent the default form submission behavior

//         const username = document.getElementById('username').value;
//         const password = document.getElementById('password').value;

//         // Create an object with the user credentials
//         const credentials = {
//             username: username,
//             password: password
//         };

//         // Fetch to authenticate user
//         fetch('http://localhost:9090/pma/api/v1/users/authenticate', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(credentials)
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Invalid credentials');
//             }
//             // Successful login, redirect to the main panel page
//             window.location.href = '/src/app/WebUI/html/MainPage.html';
//         })
//         .catch(error => {
//             console.error('Error during login:', error);
//         });
//     });
// });


function activateLogin(){
    console.log("activate login");
    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Your authentication API endpoint
   // const authenticationEndpoint = 'http://localhost:9090/pma/api/v1/auth/authenticate';

    // Make the authentication request
    fetch('http://localhost:9090/pma/api/v1/auth/authenticate', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': `${username}`,
            'password': `${password}`
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sending request with username:', username, 'and password:', password);
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
}