var searchButton = document.querySelector('#searchButton')
var userMovie = document.querySelector('#autocomplete-input')
var omdbURL = 'https://www.omdbapi.com/?apikey=9a519566&t='
var searchURL = '';
var posterCard = document.querySelector('#posterC')
var infoCard = document.querySelector('.card-content')
let movieInfo = {};

function search() {
    searchURL = omdbURL.concat(userMovie.value.replace(/ /g, "+"));
    console.log(searchURL);
    test123();
}   
function printResults(data) {
    posterCard.src = data.Poster
    actorResults();
    // if we want to create the element 
    // var actorEl = document.createElement('p')
    // getElementById('actor div').appendchild(actorEl)
    // and then set classes for styling
    document.getElementById('Plot').textContent = "Plot: " + data.Plot
    for (let i = 0; i < data.Ratings.length; i++) {
    document.getElementById('Ratings').textContent += "Ratings: " + data.Ratings[i].Source + " " + data.Ratings[i].Value + " "
    }
}

function actorResults() {
    if (data.Actors === "N/A") {
        document.getElementById.textContent = "Actors: none found"
    } else {
        document.getElementById('Actors').textContent = "Actors: " + data.Actors
    }
}


function test123 () {
    fetch(searchURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let objEmpty = JSON.stringify(data)
        movieInfo = JSON.parse(objEmpty)
        console.log(movieInfo.Poster)
        actorResults(movieInfo)
        posterResults(movieInfo)
        
    })
    function actorResults(movieInfo) {
        if (movieInfo.Actors === "N/A") {
            document.getElementById.textContent = "Actors: none found"
        } else {
            document.getElementById('Actors').textContent = "Actors: " + movieInfo.Actors
        }
    }
    function posterResults(movieInfo) {
        if (movieInfo.Poster === "N/A") {
            posterCard.src = './assets/images/noPoster.png'
            infoCard.textContent = "No results found, please try again."
        } else {
            posterCard.src = movieInfo.Poster
        }
    }
}
