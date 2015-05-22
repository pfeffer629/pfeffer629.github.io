$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 7500,
    pauseOnHover: false,
    swipeToSlide: true,
    fade: true,
    speed: 1500
  });

  $('.carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('#caption-' + nextSlide + ' h2').typewriter({speed: 80});
  });
});