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

  localStorage.setItem('data',JSON.stringify(dataSaved))

}

//auto complete form part
$(document).ready(function(){
  let dataStored=JSON.parse(localStorage.getItem('data')) || {data:{ "Matrix": null,}}
  //jquery using materialze methods
  $('input.autocomplete').autocomplete(dataStored);
});