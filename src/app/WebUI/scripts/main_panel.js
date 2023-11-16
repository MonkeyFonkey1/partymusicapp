document.addEventListener('DOMContentLoaded', function () {
    // Fetch current user ID
    fetch('http://localhost:9090/pma/api/v1/users/userid')
        .then(response => response.text())
        .then(userId => {
            // Fetch user data based on the retrieved user ID
            fetch(`http://localhost:9090/pma/api/v1/users/userid/${userId}`)
                .then(response => response.json())
                .then(user => {
                    document.getElementById('username-placeholder').innerText = user.username;
                    document.getElementById('follower').innerText = 'Followers: ' + user.noOfFollowers;
                    document.getElementById('following').innerText = 'Following: ' + user.noOfFollowing;
                    document.getElementById('parties_hosted').innerText = 'Parties Hosted: ' + user.noOfHostedParties;
                    document.getElementById('parties_participated').innerText = 'Parties Participated: ' + user.noOfJoinedParties;
                })
                .catch(error => console.error('Error fetching user data:', error));
        })
        .catch(error => console.error('Error fetching current user ID:', error));
});
