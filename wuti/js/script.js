'use strict';

$(document).ready(function() {

	//navbar func

	let nav_icon = $('.nav-icon'),
		navbar = $('.navbar');

	nav_icon.click(function(){
		$(this).toggleClass('active');
		navbar.slideToggle();

		if($(this).hasClass('active')){
			
			$('html, body').css({
				'overflow': 'hidden'
			})
		}else{
			$('html, body').removeAttr('style')
		}
	})

	$(window).resize(function() {
		if ($(window).width() > 780) {
			navbar.removeAttr('style');
			nav_icon.removeClass('active');
			$('html, body').removeAttr('style');
		}
	});

	$(window).scroll(function(){

		$('.panel').each(function(){
			var top = $(this).offset().top - 200,
				bottom = $(this).offset().top + 1000;
			console.log(bottom, top)
			if ($(window).scrollTop() > top && $(window).scrollTop() < bottom){
				$(this).addClass('show');
				var color = $('.panel.show').attr('data-color');
				$('header').css('background', color);
			}else{
				$(this).removeClass('show');
			}
		});

	});
	
});