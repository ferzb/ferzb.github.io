$(document).ready(function() {

	setTimeout(function(){
		$('.preloader').addClass('close');
	  }, 2000);

	var count = 0,
		main_section = $('.main_box'),
		main_length = $('.main_box').length,
		main_box_w = $('.main_box').width();

	$('.main_scroll').css('width', +main_box_w*main_length+'px')

	$(function(){
		if ($(window).width() > 1100) {
			scrolling()
		}else($('.main_scroll').css('width', '100vw'))
	});
	

	function scrolling(){
		$(document).mousemove(function(e){
			var x_pos = e.pageX, // положения по оси X
				y_pos = e.pageY; // положения по оси Y
				x_pos_middle = x_pos/2
			$('.mous-arrow').css('transform', 'translate('+x_pos+'px,'+y_pos+'px)');

			$(function(){
				if(x_pos < $(window).width()/2 && $('.mous-arrow').hasClass('next')){
					$('.mous-arrow').addClass('prev')
				}else(
					$('.mous-arrow').removeClass('prev')
				)
			})
			
		});

		$('.nav-icon, .header_logo, a, input, textarea, button').mouseenter(function(){
			$('.mous-arrow').addClass('hand');
			if($('.mous-arrow').hasClass('prev')){
				$('.mous-arrow').addClass('rotate')
			}else if($('.mous-arrow').hasClass('previus')){
				$('.mous-arrow').addClass('rotate')
			}else($('.mous-arrow').removeClass('rotate'))
		})

		$('.nav-icon, .header_logo, a, input, textarea, button').mouseleave(function(){
			$('.mous-arrow').removeClass('hand').removeClass('rotate');
		})

		$('input, textarea').mouseenter(function(){
			$('.mous-arrow').css('display', 'none')
		})

		$('input, textarea').mouseleave(function(){
			$('.mous-arrow').removeAttr('style');
		})

		$('.mous-arrow').click(function(){

			if(count < 0){
				count = 0;
			}else if($(this).hasClass('prev')){
				count--;
			}else if($(this).hasClass('previus')){
				count--;
			}
			else if($(this).hasClass('prev') && count > 1 && $(this).hasClass('previus')){
				count--;
			}else if(count >= main_length - 2){
				count = main_length - 1;
			}else(
				count++
			)
			
			$('.page_header .header_logo').css('left', '-'+count*main_box_w+"px")

			main_section.removeClass('active');

			let this_main_section = main_section.eq(count);

			this_main_section.addClass('active')

			this_main_section.each(function(){
				let that = $(this),
					that_color = that.attr('data-color');

					if(that.hasClass('active')){
						$('.mous-arrow').css('background', that_color)
					}
			})

			$('.main_scroll').css('left', '-'+count*main_box_w+"px");

			$('.ball').css('transform', 'translateX(-'+count*5*100+'px)');
			$('.triangle').css('transform', 'translateX('+count*5*100+'px) rotate(-75deg)');
			$('.squer').css('transform', 'rotate('+count*5*100+'deg)');

			$(function(){
				if(count >= 2){
					$('.nav-icon_line').css('background', '#fff');
					$('.header_logo').addClass('white')
				}else(
					$('.nav-icon_line').removeAttr('style'),
					$('.header_logo').removeClass('white')
					
				)
			})

			$(function(){
				if(count >= 1){
					$('.mous-arrow').addClass('next');
				}else(
					$('.mous-arrow').removeClass('next')
					
				)
			})
			
			$(function(){
				if(count >= main_length - 1){
					$('.mous-arrow').addClass('previus');
				}else(
					$('.mous-arrow').removeClass('previus')
				)
			})
			
		})
	}	
});