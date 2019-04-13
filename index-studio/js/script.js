$(document).ready(function() {
	$(function(){
		if ($(window).width() > 640) {
			$.jInvertScroll(['.main_scroll'], {
				height: 'auto',
				onScroll: function(percent) {
				}
			});
			scrolling ();
		}
	})


	function scrolling (){
		window.onscroll = function () {
			var valueTop = window.scrollY;
			$('.ball').css('transform', 'translateX(-'+valueTop/10+'px)');
			$('.triangle').css('transform', 'translateX('+valueTop/11+'px) rotate(-75deg)');
			$('.squer').css('transform', 'rotate('+valueTop/10+'deg)');
		}
	};
	$(function() {
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
	})
});