function main(){
  $('.massive-container').hide();
  $('form').hide();
  $('.massive-container').fadeIn(2500);
  setTimeout(function () {
    $('form').fadeIn(2000);
  }, 300);
  $('form').show();
  $('.massive-container').fadeIn(2500);
}
$(document).ready(main);
