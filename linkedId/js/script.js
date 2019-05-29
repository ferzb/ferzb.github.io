'use strict';

$(document).ready(function() {

	let g_dropdown = $('.general_dropdown'),
		g_dropdown_box = $('.dropdown_box'),
		close = $('.close');
	
	close.click(function(){
		g_dropdown_box.removeClass('open');
		$('.all_filters_box').removeClass('show');
		$('.overaly').removeAttr('style');
		$('html, body').removeAttr('style');
	})

	g_dropdown.each(function(){
		let that = $(this),
			dropdown_box = that.find('.dropdown_box'),
			drop_btn = that.find('.drop_btn');

		drop_btn.click(function(){
			$(this).toggleClass('active');
			dropdown_box.toggleClass('open');
		})
	})

	$('.toggle_all_filters').click(function(){
		$('.all_filters_box').addClass('show');
		$('.overaly').css('display', 'block');
		$('html, body').css('overflow', 'hidden');
	})

	$('.overaly').click(function(){
		$('.all_filters_box').removeClass('show');
		$(this).removeAttr('style');
		$('html, body').removeAttr('style');
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