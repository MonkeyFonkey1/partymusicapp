
const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYXZpZCIsImlhdCI6MTcwMDM5NTAwMywiZXhwIjoxNzAwMzk2NDQzfQ.wKbttS5MgxLQoia69q4RVH73WjVMTZbgwjiMhB1v0hU'; // Replace with your actual bearer token

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
        if (Array.isArray(users) && users.length > 0) {
            const user = users[0]; // Assuming you want to access the first user in the array
            document.getElementById("username-placeholder").innerText = user.username;
            document.getElementById("username-homepage").innerText =`Username: @${user.username}`; 
            document.getElementById("follower").innerText = `Followers: ${user.noOfFollowers}`;
            document.getElementById("following").innerText = `Following: ${user.noOfFollowing}`;
            document.getElementById("parties_hosted").innerText = `Parties Hosted: ${user.noOfHostedParties}`;
            document.getElementById("parties_participated").innerText = `Parties Participated: ${user.noOfJoinedParties}`;
        } else {
            console.error('No user data available');
        }
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