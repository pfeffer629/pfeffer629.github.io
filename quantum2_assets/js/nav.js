$(function() {
  var pull = $('#menu');
  var menu = $('.dropdown-menu');

  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(window).width();
    if(w > 760 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});
