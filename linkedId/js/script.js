'use strict';

$(document).ready(function() {

	let g_dropdown = $('.general_dropdown'),
		g_dropdown_box = $('.dropdown_box'),
		close = $('.close'),
		all_filters_box = $('.all_filters_box');
	
	close.click(function(){
		g_dropdown_box.removeClass('open');
		all_filters_box.removeClass('show');
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
		all_filters_box.addClass('show');
		$('.overaly').css('display', 'block');
		$('html, body').css('overflow', 'hidden');
	})

	$('.overaly').click(function(){
		all_filters_box.removeClass('show');
		$(this).removeAttr('style');
		$('html, body').removeAttr('style');
	})


	all_filters_box.each(function(){
		let that = $(this),
			checkbox = that.find('input'),
			clear_btn = that.find('.clear_btn'),
			check_number = clear_btn.find('span')
			

		checkbox.click(function(){

			let checkbox_checked_l = that.find('input:checked').length;

			check_number.each(function(){
				if(checkbox_checked_l < 1){
					check_number.html(' ');
					clear_btn.attr('data-status', 'disable')
				}else{
					check_number.html(checkbox_checked_l),
					clear_btn.attr('data-status', 'able')
				}
			})

		})

		clear_btn.click(function(){
			$('input:checked').prop('checked', false);
			check_number.html(' ');
			$(this).attr('data-status', 'disable')
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