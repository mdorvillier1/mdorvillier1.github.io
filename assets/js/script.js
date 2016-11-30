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

$('h4').click(function()
{
	$('html, body').animate({
    scrollTop: $("#contact-section").offset().top
}, 1000);


});


$('#contact-button').click(function()
{
	$('html, body').animate({
    scrollTop: $("#contact-section").offset().top
}, 1000);

});



$('#home-button').click(function()
{
	$('html, body').animate({
    scrollTop: $("#home-section").offset().top
}, 1000);

});

$('#about-button').click(function()
{
	$('html, body').animate({
    scrollTop: $("#about-section").offset().top
}, 1000);

});

$('#skills-button').click(function()
{
	$('html, body').animate({
    scrollTop: $("#carousel-section").offset().top
}, 1000);

});

});





