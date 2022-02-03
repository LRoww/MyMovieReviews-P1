(function ($) {
  $(function () {

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//search function - alert to show grab from input field

function search() {
  //get the value from the autocomplete
  let movie = document.querySelector("#autocomplete-input").value;
  //setting up the default or getting the data previously saved
  let dataSaved=JSON.parse(localStorage.getItem('data')) || {data:{ "Matrix": null,}}

  dataSaved.data[movie]=null;

  localStorage.setItem('data',JSON.stringify(dataSaved));
  
  let omdbURL = 'https://www.omdbapi.com/?apikey=9a519566&t=';
  let searchURL = omdbURL.concat(movie.replace(/ /g, "+"));
  console.log("searchurl" + searchURL);
  test123(searchURL);
  
  getResults(movie);
}

//auto complete form part
$(document).ready(function(){
  let dataStored=JSON.parse(localStorage.getItem('data')) || {data:{ "Matrix": null,}}
  //jquery using materialze methods
  $('input.autocomplete').autocomplete(dataStored);
});


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
  let url = 'https://www.youtube.com/embed/' + videoID + '?rel=0';
  // console.log(url);
  // console.log( $('iframe'));
  $('iframe').attr('src', url);
}