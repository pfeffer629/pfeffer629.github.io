$(function() {
  var pull = $('#menu');
  var menu = $('nav ul');
  var menuHeight = menu.height();

  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
  $(window).resize(function(){
    var w = $(window).width();
    if(w > 750 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 50){  
    $('header').addClass("sticky");
    $('#logo').addClass("sticky");
    $('.nav-button').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
    $('#logo').removeClass("sticky");
    $('.nav-button').removeClass("sticky");
  }
});
