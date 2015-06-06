$(document).ready(function() {

  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }, 2000)

  setTimeout(function(){
    $('#headline').textillate({ in: { effect: 'fadeInDown' } });
    $('#info').textillate({ in: { effect: 'fadeInLeft', sync: true } });
  }, 2500)
});
