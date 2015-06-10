$(document).ready(function(){
  var carouselContainer = $('.carousel');
  var slideInterval = 3000;
  
  $('.carousel-caption').hide();

  setTimeout(function(){
    var caption = $('#caption1');
    var captionLight = caption.find('.light');
    var captionBold = caption.find('.bold');
    captionLight.addClass("animated fadeIn");
    captionBold.addClass("animated bounceInDown")
    caption.show();
  }, 2800);

  carouselContainer.on("slid.bs.carousel", function(){
    var caption = carouselContainer.find('.active').find('.carousel-caption');
    var captionLight = caption.find('.light');
    var captionBold = caption.find('.bold');
    captionLight.addClass("animated fadeIn")
    captionBold.addClass("animated bounceInDown")
    caption.show();
  })

  carouselContainer.on("slide.bs.carousel", function(){
    var caption = carouselContainer.find('.active').find('.carousel-caption');
    var captionLight = caption.find('.light');
    var captionBold = caption.find('.bold');
    captionLight.removeClass("animated fadeIn")
    captionBold.removeClass("animated bounceInDown")
    caption.hide();
  })
})