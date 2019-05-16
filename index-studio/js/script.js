'use strict';

$(document).ready(function() {

	let loader = 0;
	
	var	preloader = setInterval(function(){
		if(loader < 101){
			$('.lds-hourglass > span').css('width', loader+'%')
			loader++;
		}else(
			clearInterval(preloader)
		)}, 20);

	setTimeout(function(){
		$('.preloader').addClass('close');
	  }, 2100);

	let count = 0,
		main_section = $('.main_box'),
		main_length = $('.main_box').length,
		main_box_w = $('.main_box').width(),
		arrow = $('.mous-arrow');

	function scrolling(){
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

		$('.nav-icon, .header_logo, a, input, textarea, button').mouseenter(function(){
			arrow.addClass('hand');
			if(arrow.hasClass('prev') || arrow.hasClass('previus')){
				arrow.addClass('rotate')
			}
			else(arrow.removeClass('rotate'))
		})

		$('.nav-icon, .header_logo, a, input, textarea, button').mouseleave(function(){
			arrow.removeClass('hand').removeClass('rotate');
		})

		$('input, textarea').mouseenter(function(){
			arrow.css('display', 'none')
		})

		$('input, textarea').mouseleave(function(){
			arrow.removeAttr('style');
		})

		arrow.click(function(){

			if(count == 0){
				count++;
			} else if( $(this).hasClass('prev') ){
				count--;
			} else if( count == main_length - 1 ){
				count--;
			} else(
				count++
			)
			
			// main section remove class active
			main_section.removeClass('active');

			// add main section class active
			let this_main_section = main_section.eq(count);
			this_main_section.addClass('active')

			// change arrow color
			this_main_section.each(function(){
				let that = $(this),
					that_color = that.attr('data-color');

					if(that.hasClass('active')){
						arrow.css('background', that_color)
					}
			})

			// scroll webpage
			$('.main_scroll').css('left', '-'+count*main_box_w+"px");

			// animate ojects
			let object_ball = $('.ball'),
				object_triangle = $('.triangle'),
				object_squer = $('.squer');

			object_ball.css('transform', 'translateX(-'+count*5*100+'px)');
			object_triangle.css('transform', 'translateX('+count*5*100+'px) rotate(-75deg)');
			object_squer.css('transform', 'rotate('+count*5*100+'deg)');

			//conditions if count change number
			$(function(){
				if(count >= 2){
					$('.nav-icon_line').css('background', '#fff');
				}else(
					$('.nav-icon_line').removeAttr('style')
				)
			})

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
				if(count >= main_length - 1){
					arrow.addClass('previus');
				}else(
					arrow.removeClass('previus')
				)
			})
			
		})
	}

	$('.main_scroll').css('width', +main_box_w*main_length+'px')

	$(function(){
		if ($(window).width() > 1100) {
			scrolling();
		}else(
			$('.main_scroll').css('width', '100vw')
		)
	});
	
	
});