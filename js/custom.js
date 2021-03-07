jQuery(document).ready(function($){
	"use strict";
	$('#myCarousel').carousel({
		interval: 3000,
	})


	/*Responsive Navigation*/
	$(document).ready(function(){
		$('.toggle').click(function(){
			$('.toggle').toggleClass('active')

			$('nav ul').toggleClass('active-menu')


		})
	});


});
