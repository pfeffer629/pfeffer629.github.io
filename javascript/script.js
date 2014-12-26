$(document).ready(function() {
	var height = screen.height

  $(".blog_button").on("click", function(e){
 		e.preventDefault();
  	$('#primary').fadeOut();
		$('#blog').css({
			"visibility" : "visible",
			"height" : height
		})
		$('.container').css("height", height)

  	$('.container').animate({
  		width:"100%"
  	}, 1500, function(){
  		$("#blog").animate({opacity: 1})
  	})
  })


});
