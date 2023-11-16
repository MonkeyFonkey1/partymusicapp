// script.js

document.addEventListener('DOMContentLoaded', function () {

    // Fetch user data
    fetch('http://localhost:9090/pma/api/v1/users/{userId}')
        .then(response => response.json())
        .then(user => {
            document.getElementById('username-placeholder').innerText = user.username;
            document.getElementById('follower').innerText = 'Followers: ' + user.noOfFollowers; // Update with the actual field names
            document.getElementById('following').innerText = 'Following: ' + user.noOfFollowing;
            document.getElementById('parties_hosted').innerText = 'Parties Hosted: ' + user.noOfHostedParties;
            document.getElementById('parties_participated').innerText = 'Parties Participated: ' + user.noOfJoinedParties;
        })
        .catch(error => console.error('Error fetching user data:', error));
});