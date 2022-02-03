var searchButton = document.querySelector('#searchB')
var userMovie = document.querySelector('#autocomplete-input')
var omdbURL = 'https://www.omdbapi.com/?apikey=9a519566&t='
var searchURL = '';
var posterCard = document.querySelector('#posterC')
var infoCard = document.querySelector('.card-content')


function search() {
    searchURL = omdbURL.concat(userMovie.value.replace(/ /g, "+"));
    console.log(searchURL);
    fetch(searchURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        if (data.Poster === "N/A") {
            posterCard.src = './assets/images/noPoster.png'
            infoCard.textContent = "No results found, please try again."
        } else {
            printResults(data);
        }
    });
}   
function printResults(data) {
    posterCard.src = data.Poster
    document.getElementById('Actors').textContent = "Actors: " + data.Actors
    // if we want to create the element 
    // var actorEl = document.createElement('p')
    // getElementById('actor div').appendchild(actorEl)
    // and then set classes for styling
    document.getElementById('Plot').textContent = "Plot: " + data.Plot
    for (let i = 0; i < data.Ratings.length; i++) {
    document.getElementById('Ratings').textContent += "Ratings: " + data.Ratings[i].Source + " " + data.Ratings[i].Value + " "
    }
}

