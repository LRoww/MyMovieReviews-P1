var searchButton = document.querySelector('#searchButton')
var userMovie = document.querySelector('#autocomplete-input')
// var omdbURL = 'https://www.omdbapi.com/?apikey=9a519566&t='
// var searchURL = '';
var posterCard = document.querySelector('#posterC')
var infoCard = document.querySelector('.card-content')
let movieInfo = {};

function test123 (searchURL) {
    fetch(searchURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (data.Response === 'False') {
            alert("no movie found, please be as specific as possible")
        } else {
        console.log(data)
        let objEmpty = JSON.stringify(data)
        movieInfo = JSON.parse(objEmpty)
        movieTitle(movieInfo)
        movieYear(movieInfo)
        actorResults(movieInfo)
        awardResults(movieInfo)
        moviePlot(movieInfo)
        reviewResults(movieInfo)
        }
    })
    function movieTitle(movieInfo) {
        document.getElementById('Title').textContent = movieInfo.Title
    }
    function movieYear(movieInfo) {
        document.getElementById('Year').textContent = movieInfo.Year
    }
    function actorResults(movieInfo) {
        if (movieInfo.Actors === "N/A") {
            document.getElementById('Actors').textContent = "Actors: none found"
        } else {
            document.getElementById('Actors').textContent = "Actors: " + movieInfo.Actors
        }
    }
    function moviePlot(movieInfo) {
        if (movieInfo.Plot === "N/A") {
            document.getElementById('Plot').textContent = "No Plot Summary Found"
        } else {
            document.getElementById('Plot').textContent = "Plot: " + movieInfo.Plot
        }
    }
    function reviewResults(movieInfo) {
        if (movieInfo.Ratings === "N/A") {
            document.getElementById('Ratings').textContent = "No Ratings Found"
        } else {
            for (let i = 0; i < movieInfo.Ratings.length; i++) {
            document.getElementById('Ratings').textContent += movieInfo.Ratings[i].Source + " " + movieInfo.Ratings[i].Value + " "
            }   
        }
    }
    function awardResults(movieInfo) {
        if (movieInfo.Awards === "N/A") {
            document.getElementById('Awards').textContent = "No Awards Found"
        } else {
            document.getElementById('Awards').textContent = movieInfo.Awards
        }
    }
}
