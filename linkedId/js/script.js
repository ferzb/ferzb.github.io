'use strict';

$(document).ready(function() {

	let g_dropdown = $('.general_dropdown'),
		g_dropdown_box = $('.dropdown_box');
	
	g_dropdown.each(function(){
		let that = $(this),
			dropdown_box = that.find('.dropdown_box'),
			drop_btn = that.find('.drop_btn');

		drop_btn.click(function(){
			g_dropdown_box.removeClass('open');
			$(this).toggleClass('active');
			dropdown_box.toggleClass('open');
		})
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