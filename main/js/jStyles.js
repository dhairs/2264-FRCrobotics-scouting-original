// EVERYTHING TO DO WITH STYLING HTML ELEMENTS USING JS

// FADE IN
function main(){
  $('.massive-container').hide();
  $('form').hide();
  $('.table').hide();
  $('.massive-container').fadeIn(2500);
  setTimeout(function () {

    $('form').fadeIn(2000);
  }, 300);

  // $('form').show();
  //
  // $('.massive-container').show();
}
$(document).ready(main);
