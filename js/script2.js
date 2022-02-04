var searchButton = document.querySelector('#searchButton');
var userMovie = document.querySelector('#autocomplete-input');
let movieInfo = {};

function getOmdbApi (searchURL) {
    fetch(searchURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (data.Response === 'False') {
            clearResults();
            document.getElementById('Actors').textContent = "No movie found, please be as specific as possible."
        } else {
        clearResults();
        console.log(data)
        let objEmpty = JSON.stringify(data)
        movieInfo = JSON.parse(objEmpty)
        movieTitle(movieInfo)
        movieYear(movieInfo)
        movieDirector(movieInfo)
        actorResults(movieInfo)
        awardResults(movieInfo)
        moviePlot(movieInfo)
        reviewResults(movieInfo)
        }
    });

    function movieTitle(movieInfo) {
        document.getElementById('Title').textContent = movieInfo.Title
    };

    function movieYear(movieInfo) {
        document.getElementById('Year').textContent = movieInfo.Year + " " + movieInfo.Country
    };

    function movieDirector(movieInfo) { 
        if (movieInfo.Director === "N/A") {
            document.getElementById('Director').textContent = "No Director info found"
        } else {
        document.getElementById('Director').textContent = movieInfo.Director
        }
    };

    function actorResults(movieInfo) {
        if (movieInfo.Actors === "N/A") {
            document.getElementById('Actors').textContent = "No Actor info found"
        } else {
            document.getElementById('Actors').textContent = "Actors: " + movieInfo.Actors
        }
    };

    function awardResults(movieInfo) {
        if (movieInfo.Awards === "N/A") {
            document.getElementById('Awards').textContent = "No Award info found"
        } else {
            document.getElementById('Awards').textContent = movieInfo.Awards
        }
    };

    function moviePlot(movieInfo) {
        if (movieInfo.Plot === "N/A") {
            document.getElementById('Plot').textContent = "No Plot Summary Found"
        } else {
            document.getElementById('Plot').textContent = "Plot: " + movieInfo.Plot
        }
    };

    function reviewResults(movieInfo) {
        if (movieInfo.Ratings === "N/A") {
            document.getElementById('Ratings').textContent = "No Ratings Found"
        } else {
            for (let i = 0; i < movieInfo.Ratings.length; i++) {
            document.getElementById('Ratings').textContent += movieInfo.Ratings[i].Source + " " + movieInfo.Ratings[i].Value + " "
            }   
        }
    };

    function clearResults(movieInfo) {
        document.getElementById('Title').textContent = ""
        document.getElementById('Year').textContent = ""
        document.getElementById('Director').textContent = ""
        document.getElementById('Actors').textContent = ""
        document.getElementById('Awards').textContent = ""
        document.getElementById('Plot').textContent = ""
        document.getElementById('Ratings').textContent = ""
    };
};
