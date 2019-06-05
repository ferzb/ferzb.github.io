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
    
    //input focus function
    let input_box = $('.input_box input');
    
	input_box.focus(function(){
		$(this).parent().addClass('focus')
	}).blur(function(){
		if($(this).val() === ''){
			$(this).parent().removeClass('focus')
		}
	})
	
});