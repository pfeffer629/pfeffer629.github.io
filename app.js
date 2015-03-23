$(document).ready(function(){
 	$("#about").click(function(){
 		$('#result').fadeOut(function(){
 			$('#result').fadeIn();
 			$('#result').load('pages/about.html');
 		})
	});

	$("#portfolio").click(function(){
 		$('#result').fadeOut(function(){
 			$('#result').fadeIn();
 			$('#result').load('pages/portfolio.html');
 		})
	});

	$("#resume").click(function(){
		$('#result').fadeOut(function(){
 			$('#result').fadeIn();
 			$('#result').load('pages/resume.html');
 		})
	});

	$("#blog").click(function(){
 		$('#result').fadeOut(function(){
 			$('#result').fadeIn();
	 		$('#result').load('pages/blog.html');
 		})
	});
});