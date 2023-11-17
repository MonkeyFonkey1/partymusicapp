document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dateOfBirth').addEventListener('input', function(event) {
        var inputValue = event.target.value;
        if (inputValue.length === 8) {
            var formattedDate = inputValue.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
            event.target.value = formattedDate;
        }
    });
});

var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirmPassword");

function validatePasswordMatch() {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

  
    
    if (password !== confirmPassword){
        confirmPasswordInput.classList.add("password-mismatch");
        passwordInput.value = '';
        confirmPasswordInput.value = '';
    } else {
        // console.log("Redirecting to login page");
        // redirectToLoginPage();
    }
}

// function redirectToLoginPage() {
//     //console.log("Redirecting to login page");
//     window.location.href = "/src/app/WebUI/html/AuthentificationPanels/LoginPage.html";
// }
