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
	});

	$(".navbar ul li").click(function(){

			if( $(this).data("slide-to") === "Home" )
				{
					$("html,body").animate({scrollTop : 0},800)					
				}
				else
				{
					$("html,body").animate({

						scrollTop : $("#" + $(this).data("slide-to")).offset().top

					},800);
				
				}

		
	});

	$(window).scroll(function(){

		if($(this).scrollTop() >= ($(".skills").offset().top - 200))
		{

			$(".skills .progress .progress-bar").each(function(){

				$(this).animate({

					width : parseInt($(this).data("width")) + "%"
				},1500);

			});			

		}

	});



	$(window).scroll(function(){

		$(".navbar ul li").each(function(){
			if($("#" + $(this).data("slide-to")).length > 0 )
			{
				if( $("#" + $(this).data("slide-to")).offset().top -100 <= $(window).scrollTop() )
					{
						$(this).find(".nav-link").addClass("active").parent().siblings().find('.nav-link').removeClass("active");
					}
			}
			
			

		});

	});



});
