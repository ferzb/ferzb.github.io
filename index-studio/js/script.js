'use strict';

$(document).ready(function() {


	function scrolling(){
		let count = 0,
			arrow = $('.mous-arrow'),
			global_section = $('.global_section');

		
		global_section.css('right', '-'+$(window).width()+'px')


		$(document).mousemove(function(e){
			let x_pos = e.pageX,
				y_pos = e.pageY;
				
				arrow.css('transform', 'translate('+x_pos+'px,'+y_pos+'px)');

			$(function(){
				if(x_pos < $(window).width()/2 && arrow.hasClass('next')){
					arrow.addClass('prev')
				}else(
					arrow.removeClass('prev')
				)
			})
			
		});

		arrow.click(function(){
			
			if(count == 0){
				count++;
			} else if( $(this).hasClass('prev') ){
				count--;
			} else if( count == global_section.length - 1 ){
				count--;
			} else(
				count++
			)

			global_section.removeClass('active');

			// add main section class active
			let this_global_section = global_section.eq(count);
			
			this_global_section.addClass('active');

			$(function(){
				if(count >= 1){
					arrow.addClass('next');
					$('.page_header .header_logo').addClass('fade');
				}else(
					arrow.removeClass('next'),
					$('.page_header .header_logo').removeClass('fade')
				)
			})


			$(function(){
				if(count >= global_section.length - 1){
					arrow.addClass('previus');
				}else(
					arrow.removeClass('previus')
				)
			})

		})
	}

    $(function(){
		if ($(window).width() > 1100) {
			scrolling();
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