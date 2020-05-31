$(function(){
	"use strict";

	$(".navbar ul li a").click(function(e){
		e.preventDefault();
	});

	$(".faq .faq-content h1").click(function(){

		$(this).next().slideToggle();

	});

	$(".portfolio ul li").click(function(){

		$(this).addClass("active").siblings().removeClass("active");

	});

	$(".question .question-item h4").click(function(){

		$(this).next().slideToggle();
		if( $(".question .question-item h4 i:eq(1)").hasClass("fa-chevron-down") )
		{
			$(".question .question-item h4 i:eq(1)").removeClass("fa-chevron-down");
			$(".question .question-item h4 i:eq(1)").addClass("fa-chevron-up");
		}
		else
		{
			$(".question .question-item h4 i:eq(1)").addClass("fa-chevron-down");
			$(".question .question-item h4 i:eq(1)").removeClass("fa-chevron-up");	
		}
	});


	$(window).scroll(function(){

		if($(this).scrollTop() > 150){
			$(".scroll-top").fadeIn();
		}
		else{
			$(".scroll-top").fadeOut();
		}
	});


	$(".scroll-top").click(function(e){
		e.preventDefault();
		$("html,body").animate({scrollTop:0},1500)
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 50)
		{
			$(".navbar").addClass("fixed-bg");
		}
		else{
			$(".navbar").removeClass("fixed-bg");
		}

	});

	$(".navbar-toggler").click(function(){

		$(".nav").slideToggle();

	});

	$(".drop-down").click(function(){

		$(this).find(".dropdown").slideToggle();
		console.log('clicked')
	});

});
