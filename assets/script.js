$(document).ready(function() {



$('#carousel-next').click (function()
{
  var x = 
  parseInt($('#carousel').css('margin-left').replace ("px",""));

    if (x == -3480) {
        return false;
    }

    else {
      $('#carousel').css('margin-left', x-960);
}});


$('#carousel-prev').click (function()
{
  var y = 
  parseInt($('#carousel').css('margin-left').replace ("px", ""));

  if (y == 0) {
    return false;
  }
  else{
    $('#carousel').css('margin-left', y+960);
  }
});


 
});





