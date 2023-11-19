
    // document.getElementById('loginForm').addEventListener('submit', function(event) {
    //     event.preventDefault(); // Prevent the form from submitting normally



    //     const bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYXZpZCIsImlhdCI6MTcwMDM5ODc3OSwiZXhwIjoxNzAwNDAwMjE5fQ.uy_85eZ5ss9POObotYlqBdPGAvKlHt1mhmZguZ9dzCM8"

    //     // Get the values from the form
    //     const username = document.getElementById('username').value;
    //     const password = document.getElementById('password').value;

    //     // Your authentication API endpoint
    //     const authenticationEndpoint = 'http://localhost:9090/pma/api/v1/auth/authenticate';

    //     // Make the authentication request

    //     const formData = new FormData();
    //     formData.append('username', username);
    //     formData.append('password', password);


    //     fetch(authenticationEndpoint, {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': `Bearer ${bearerToken}`,
    //             'Content-Type': 'application/json',
    //         },
    //         body: 
    //             "username": username,
    //             "password": password
    //         }),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         // Assuming the response contains a 'token' property
            

    //         // Use the token in your subsequent requests as needed
    //         console.log('Bearer Token:', bearerToken);

    //         window.location.href = '/src/app/WebUI/html/MainPage.html';
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //         // Add your logic for handling login failure here
    //     });
    // });

document.addEventListener('DOMContentLoaded', function() {
  function activateLogin(){

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Your authentication API endpoint
    const authenticationEndpoint = 'http://localhost:9090/pma/api/v1/auth/authenticate';

    // Make the authentication request
    fetch(authenticationEndpoint, {
        method: 'POST',
        headers: {
           // 'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": `${username}`,
            "password": `${password}`
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sending request with username:', username, 'and password:', password);
        // Add logic here based on the response data
    })
    .catch(error => {
        console.error('Error:', error);
        // Add your logic for handling login failure here
    });
}
});