'use strict';

$(document).ready(function() {

	//navbar functional
	
	let nav_icon = $('.nav-icon'),
		navbar = $('.navbar');
	
	nav_icon.click(function(){
		$(this).toggleClass('active')
		navbar.slideToggle()
	})

	//notification functional

	let notification_box = $('.profilebar_notification');

	notification_box.each(function(){
		let that = $(this),
			notif_icon = that.find('.notification_icon'),
			notif_list = that.find('.profilebar_notification_list');

			notif_icon.click(function(){
				notif_list.slideToggle()
			})
	})
	
	//modal window functional
	let offer_letter = $('.offer_letter'),
		close = $('.close');

	offer_letter.click(function(){
		let id = $(this).attr('data-target');

		navbar.slideUp();
		$('#'+id).addClass('show')
	})

	close.click(function(){
		$('.modal').removeClass('show');
	})

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