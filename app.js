$(document).ready(function(){
 	$("#about").click(function(){
 		$('#result').load('pages/about.html');
	});

	$("#portfolio").click(function(){
 		$('#result').load('pages/portfolio.html');
	});

	$("#resume").click(function(){
 		$('#result').load('pages/resume.html');
	});

	$("#blog").click(function(){
 		$('#result').load('pages/blog.html');
	});

});