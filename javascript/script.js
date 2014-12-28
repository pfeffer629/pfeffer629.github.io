$(document).ready(function() {

  $(".blog_button").on("click", function(e){
    e.preventDefault();
    $('#blog').css("visibility", "visible")
    $('#primary').fadeOut(800, function(){
      $("#blog").animate({opacity: 1})
    });
  })

  $(".portfolio_button").on("click", function(e){
    e.preventDefault();
    $('#portfolio').css("visibility", "visible")
    $('#primary').fadeOut(800, function(){
      $("#portfolio").animate({opacity: 1})
    });
  })

  $(".about_button").on("click", function(e){
    e.preventDefault();
    $('#about').css("visibility", "visible")
    $('#primary').fadeOut(800, function(){
      $("#about").animate({opacity: 1})
    });
  })

  $(".contact_button").on("click", function(e){
    e.preventDefault();
    $('#contact').css("visibility", "visible")
    $('#primary').fadeOut(800, function(){
      $("#contact").animate({opacity: 1})
    });
  })

  $(".return").on("click", function(e){
    e.preventDefault();
    $(".return").closest("div").animate({opacity: 0}, 800, function(){
      $(".return").closest("div").css("visibility", "hidden")
      $('#primary').fadeIn(800);
    });
  })

    //attempt at sliding animation
		// $('body').css({'background':'red no-repeat center center fixed', 
    //   '-webkit-background-size':'cover',
    //   '-moz-background-size':'cover',
    //   '-o-background-size':'cover',
    //   'background-size':'cover'})
  	// $('.blog_container').animate({
  	// 	width:"100%"
  	// }, 1500, function(){
  		// $("#blog").animate({opacity: 1})
  	// })
  // })


});

