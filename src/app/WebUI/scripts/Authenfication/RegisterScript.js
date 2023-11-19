// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('dateOfBirth').addEventListener('input', function(event) {
//         var inputValue = event.target.value;
//         if (inputValue.length === 8) {
//             var formattedDate = inputValue.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
//             event.target.value = formattedDate;
//         }
//     });
// });

// var passwordInput = document.getElementById("password");
// var confirmPasswordInput = document.getElementById("confirmPassword");

// function validatePasswordMatch() {
//     const password = document.getElementById("password").value;
//     const confirmPassword = document.getElementById("confirmPassword").value;

//     if (password !== confirmPassword) {
//         alert("Passwords do not match. Please check and try again.");
//     } else {
//         registerUser();
//     }
// }

function redirectToLoginPage() {
    //console.log("Redirecting to login page");
    window.location.href = "/src/app/WebUI/html/AuthentificationPanels/LoginPage.html";
}


function registerUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
        username: username,
        email: email,
        password: password,
    };

    fetch('http://localhost:9090/pma/api/v1/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(authenticationResponse => {
        alert("Registration successful! User Token: " + userToken);
        redirectToLoginPage();
    })
    .catch(error => console.error('Error registering user:', error));
}