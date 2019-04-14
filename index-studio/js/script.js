$(document).ready(function() {
	var count = 0;
	var main_box_number = $('.main_box').length;
	var main_box_w = $('.main_box').width();
	var section_why_us_w = $('.section_why-us').width();
	var section_content_w = $('.section_content').width();
	$('.main_scroll').css('width', +main_box_w*3+section_why_us_w+section_content_w-31+'px')

	var main_w = $('.main_scroll').width() - main_box_w;

	var count_step = 120;
	var count_max = (main_w/count_step) - 1.5;

	$(function(){
		if ($(window).width() > 640) {
			scrolling ();
			
		
			$('.main_scroll').bind('mousewheel DOMMouseScroll', function(event){
				if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
					count--;
					$('.main_scroll').css('left', '-'+count*count_step+"px")
					$('.ball').css('transform', 'translateX(-'+count*20+'px)');
					$('.triangle').css('transform', 'translateX('+count*21+'px) rotate(-75deg)');
					$('.squer').css('transform', 'rotate('+count*20+'deg)');
				} else if(count < 0){
					count = 0
				}
				else if (count > count_max) {
					count = count_max;
				}
				else{
					count++;
					$('.main_scroll').css('left', '-'+count*count_step+"px")
					$('.ball').css('transform', 'translateX(-'+count*20+'px)');
					$('.triangle').css('transform', 'translateX('+count*21+'px) rotate(-75deg)');
					$('.squer').css('transform', 'rotate('+count*20+'deg)');
				}
			});
		
		}else($('.main_scroll').css('width', '100vw'))
	})


	function scrolling (){
		window.onscroll = function () {
			count++
			$('.ball').css('transform', 'translateX(-'+count/10+'px)');
			$('.triangle').css('transform', 'translateX('+count/11+'px) rotate(-75deg)');
			$('.squer').css('transform', 'rotate('+count/10+'deg)');
		}
	};

	
	/*$(function() {
		$(window).scroll(function(){
			var window_offset_top = $(window).scrollTop();
			if (window_offset_top >= 1480) {
				$('.header_logo').css('color', '#fff')
			} else(
				$('.header_logo').removeAttr('style')
			)
			if (window_offset_top >= 2700) {
				$('.nav-icon_line').css('background', '#fff')
			} else(
				$('.nav-icon_line').removeAttr('style')
			)
		})
	})*/
});