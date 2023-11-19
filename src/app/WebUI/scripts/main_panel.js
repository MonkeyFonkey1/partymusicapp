
const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYXZpZCIsImlhdCI6MTcwMDMzMTQzOSwiZXhwIjoxNzAwMzMyODc5fQ.zIQxlnClOANZi8chEGLimKzm-ofJ2tB8OgkS1KniKXw'; // Replace with your actual bearer token

// Fetch user data
fetch('http://localhost:9090/pma/api/v1/users/all', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(users => {
        // Update elements for each user in the array
        users.forEach(user => {
            document.getElementById("username-homepage").innerText = `Username: @${user.username} `;
            document.getElementById("username-placeholder").innerText = user.username;
            document.getElementById("follower").innerText = `Followers: ${user.noOfFollowers}`;
            document.getElementById("following").innerText = `Following: ${user.noOfFollowing}`;
            document.getElementById("parties_hosted").innerText = `Parties Hosted: ${user.noOfHostedParties}`;
            document.getElementById("parties_participated").innerText = `Parties Participated: ${user.noOfJoinedParties}`;
        });
    })
        .catch(error => console.error('Error fetching user data:', error));


//get all parties
fetch(`http://localhost:9090/pma/api/v1/parties/all`, {
        method: 'GET',
        headers:{
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        } 
    })
    .then(response => response.json())
    .then(
        parties => {
        const partyListElement=document.getElementById('all_party_list');

        if(Array.isArray(parties) && parties.length>0){

            parties.forEach(party => {
                const listItem=document.createElement('li');
                listItem.textContent= `${party.title} - owner: ${party.ownerUsername}`;

                partyListElement.appendChild(listItem);
            })
        }
        else {
            const listItem=document.createElement('li');
                listItem.textContent= `${party.title} - owner: ${party.ownerUsername}`;

                partyListElement.appendChild(listItem);
        }
    })
    .catch(error => console.error(`Error fetching all parties`, error));