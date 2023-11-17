//load dashboard
    const bearerToken='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYXZpZCIsImlhdCI6MTcwMDIxNzcwOCwiZXhwIjoxNzAwMjE5MTQ4fQ.yZJyUbjrYblfSF20q4cFb2KmcPlORrbkv0gkbY_p1gE'

    fetch(`http://localhost:9090/pma/api/v1/users/all/count`, {
        method: 'GET',
        headers:{
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(count =>
            document.getElementById("no_total_users_display").innerText=`Total users: ${count}`)
        .catch(error => console.error(`Error fetching user count`, errror));

    fetch(`http://localhost:9090/pma/api/v1/parties/all/count`, {
        method: 'GET',
        headers:{
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        } 
    })
        .then(response => response.json())
        .then(count =>
            document.getElementById("no_ongoing_parties_display").innerText=`Ongoing parties: ${count}`)
        .catch(error => console.error(`Error fetching party count`, errror));

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
            console.log(parties.title);
        }
    })
    .catch(error => console.error(`Error fetching all parties`, error));


    //get all users
    fetch(`http://localhost:9090/pma/api/v1/users/all`, {
        method: 'GET',
        headers:{
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        } 
    })
    .then(response => response.json())
    .then(users => {
        const partyListElement=document.getElementById('all_user_list');

        if(Array.isArray(users) && users.length>0){
            users.forEach(user => {
                const listItem=document.createElement('li');
                listItem.textContent= `${user.username} - owner: ${user.email}`;

                partyListElement.appendChild(listItem);
            })
        }
        else {
            console.log(users.username);
        }
    })
    .catch(error => console.error(`Error fetching all users`, error));
