function redirectToSuggestPage() {
    // Redirect to the suggest song page or perform any other action
    window.location.href = "/suggest_panel.html";
}

// Function to initialize the party panel
function initializePartyPanel() {
    // Retrieve elements from the DOM
    var partyOwnerUsernameElement = document.getElementById("party-owner-username");
    var partyTitleElement = document.getElementById("party-title");
    var topSongBoxElement = document.getElementById("top-song-box");
    var suggestSongButton = document.getElementById("suggest-song-button");

    // Set initial values or perform any other setup
    partyOwnerUsernameElement.innerText = "Your Owner Username";
    partyTitleElement.innerText = "Your Party Title";

    // Attach event listener to the suggest song button
    suggestSongButton.addEventListener("click", redirectToSuggestPage);

    // Fetch and display top song information (replace with actual data retrieval logic)
    fetchTopSongData().then(function(songData) {
        updateTopSongUI(songData);
    });

    // Fetch and display song chart information (replace with actual data retrieval logic)
    fetchSongChartData().then(function(chartData) {
        updateSongChartUI(chartData);
    });
}

// Function to fetch top song data (replace with actual data retrieval logic)
function fetchTopSongData() {
    // Simulate fetching data from an API or server
    return new Promise(function(resolve) {
        var topSongData = {
            title: "Top Song Title",
            author: "Top Song Author",
            suggester: "Top Song Suggester",
            thumbnail: "path/to/thumbnail.jpg"
        };
        resolve(topSongData);
    });
}

// Function to update the UI with top song data
function updateTopSongUI(songData) {
    var topSongLabelElement = document.getElementById("top-song-label");
    var topSongTitleElement = document.getElementById("top-song-title");
    var topSongAuthorElement = document.getElementById("top-song-author");
    var topSongSuggesterElement = document.getElementById("top-song-suggester");
    var topSongThumbnailElement = document.querySelector("#top-song-box .song-thumbnail");

    // Update UI elements with the fetched data
    topSongLabelElement.innerText = "Top Song";
    topSongTitleElement.innerText = songData.title;
    topSongAuthorElement.innerText = "By: " + songData.author;
    topSongSuggesterElement.innerText = "Suggested by: " + songData.suggester;
    topSongThumbnailElement.src = songData.thumbnail;
    topSongThumbnailElement.alt = songData.title;
}

// Function to fetch song chart data (replace with actual data retrieval logic)
function fetchSongChartData() {
    // Simulate fetching data from an API or server
    return new Promise(function(resolve) {
        var chartData = [
            {
                title: "Song Title 1",
                author: "Author 1",
                suggester: "Suggester 1",
                thumbnail: "path/to/thumbnail1.jpg"
            },
            // Add more data as needed
        ];
        resolve(chartData);
    });
}

// Function to update the UI with song chart data
function updateSongChartUI(chartData) {
    var songChartElement = document.getElementById("song-chart");

    // Clear existing list items
    songChartElement.innerHTML = "";

    // Create and append new list items for each song in the chart
    chartData.forEach(function(song) {
        var listItem = document.createElement("li");
        listItem.className = "song-box";
        listItem.innerHTML = `
            <img class="song-thumbnail" src="${song.thumbnail}" alt="${song.title}">
            <h3 class="song-title">${song.title}</h3>
            <p class="song-author">By: ${song.author}</p>
            <p class="song-sugester">Suggested by: ${song.suggester}</p>
        `;
        songChartElement.appendChild(listItem);
    });
}

// Call the initialize function when the DOM is ready
document.addEventListener("DOMContentLoaded", initializePartyPanel);