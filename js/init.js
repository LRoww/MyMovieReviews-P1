(function ($) {
  $(function () {

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


//code for auto complete function? pending functionality??
//document.addEventListener('DOMContentLoaded', function() {
//var elems = document.querySelectorAll('.autocomplete');
//var instances = M.Autocomplete.init(elems, options);
//});


//mock up movie data for example cards 
let movieData = { "Title": "Pulp Fiction", "Year": "1994", "Rated": "R", "Released": "14 Oct 1994", "Runtime": "154 min", "Genre": "Crime, Drama", "Director": "Quentin Tarantino", "Writer": "Quentin Tarantino, Roger Avary", "Actors": "John Travolta, Uma Thurman, Samuel L. Jackson", "Plot": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", "Language": "English, Spanish, French", "Country": "United States", "Awards": "Won 1 Oscar. 70 wins & 75 nominations total", "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.9/10" }, { "Source": "Rotten Tomatoes", "Value": "92%" }, { "Source": "Metacritic", "Value": "94/100" }], "Metascore": "94", "imdbRating": "8.9", "imdbVotes": "1,949,605", "imdbID": "tt0110912", "Type": "movie", "DVD": "20 Aug 2002", "BoxOffice": "$107,928,762", "Production": "N/A", "Website": "N/A", "Response": "True" }
//

let videoID;

//search function - alert to show grab from input field
function search() {
  let movie = document.getElementById("autocomplete-input").value;
  alert(movie);

  // Get videoID and then sets display
  getResults(movie);
}


function getResults(movie){

  let q = movie + "%20movie%20trailer";
  let key='AIzaSyCbYCTbDgRPONgRI0notwc4GE0IlzZctEs'

  fetch(`https://www.googleapis.com/youtube/v3/search?q=${q}&maxResults=1&key=${key}&part=snippet`)
  .then(function(response){
    return response.json()
  }).then(function(data){
    // console.log(data);
    videoID = data.items[0].id.videoId;
    // console.log(videoID);
    showTrailer();
  });
};

function showTrailer(){
  ////www.youtube.com/embed/{videoID}?rel=0
  let url = 'https://www.youtube.com/embed/' + videoID + '?rel=0';
  // console.log(url);
  // console.log( $('iframe'));
  $('iframe').attr('src', url);
}