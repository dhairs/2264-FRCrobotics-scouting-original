function main(){
  $('.massive-container').hide();
  $('form').hide();
  $('.massive-container').fadeIn(2500);
  setTimeout(function () {
    $('form').fadeIn(2000);
  }, 300);
  $('form').show();
}
$(document).ready(main);
