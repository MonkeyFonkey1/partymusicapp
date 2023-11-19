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