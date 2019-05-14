$(document).ready(function() {
	var count = 0;
	var main_length = $('.main_box').length;
	var main_box_w = $('.main_box').width();
	var section_why_us_w = $('.section_why-us').width();
	var section_content_w = $('.section_content').width();
	$('.main_scroll').css('width', +main_box_w*main_length+section_why_us_w+section_content_w+'px')

	var main_w = $('.main_scroll').width() - main_box_w;

	var count_step = 100;
	var count_max = (main_w/count_step).toFixed(0);

	console.log(count_max);

	$(function(){
		if ($(window).width() > 640) {
			scrolling ();
			$('.next-section').each(function(){
				let this_arrow = $(this),
					n = this_arrow.attr('data-target');
					this_arrow.click(function(){
						count = n*main_box_w/count_step;
						$('.main_scroll').css('left', '-'+count*count_step+"px")
						$('.ball').css('transform', 'translateX(-'+count*20+'px)');
						$('.triangle').css('transform', 'translateX('+count*21+'px) rotate(-75deg)');
						$('.squer').css('transform', 'rotate('+count*20+'deg)');
					})
			})
		
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
				else if (count > count_max - 1) {
					count = count_max - 1;
				}
				
				else{
					count++;
					$('.main_scroll').css('left', '-'+count*count_step+"px")
					$('.ball').css('transform', 'translateX(-'+count*20+'px)');
					$('.triangle').css('transform', 'translateX('+count*21+'px) rotate(-75deg)');
					$('.squer').css('transform', 'rotate('+count*20+'deg)');
				}
			});

			$('.main_scroll').bind('mousewheel DOMMouseScroll', function(event){
				var offset_w = $('.section_content').offset().left;
				var offset_p = (offset_w*100)/main_box_w;
				if(offset_p <= 85){
					$('.header_logo').addClass('white')
				}
				else{
					$('.header_logo').removeClass('white')
				}
			});

			$('.main_scroll').bind('mousewheel DOMMouseScroll', function(event){
				var offset_w = $('.section_content').offset().left;
				var offset_p = (offset_w*100)/main_box_w;
				if(offset_p <= 33){
					$('.nav-icon_line').css('background', '#fff')
				}
				else{
					$('.nav-icon_line').removeAttr('style')
				}
			});
		
		}else($('.main_scroll').css('width', '100vw'))
	});


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