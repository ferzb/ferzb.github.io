$(document).ready(function() {
	$(function(){
		if ($(window).width() > 640) {
			var main_number = $('.main_box').length;
			var main_width = $('.main_box').width();
			var last_section = $('.section_content').width();
			$('.main_scroll').css('width', main_width*main_number+last_section+'px')
			var scroll_box_width = $('.main_scroll').width();
			var window_h = $(window).height();
			$('body').css('height', scroll_box_width / window_h*565 + 'px');
			
			scrolling ();
		}
	})


	function scrolling (){
		window.onscroll = function () {
			var valueTop = window.scrollY;
			$('.main_scroll').css('transform', 'translateX(-'+valueTop+'px)');

			$('.ball').css('transform', 'translateX(-'+valueTop/10+'px)');

			$('.triangle').css('transform', 'translateX('+valueTop/11+'px) rotate(-75deg)');

			$('.squer').css('transform', 'rotate('+valueTop/10+'deg)');
		}
	};

	

	$(window).resize(function() {
		if ($(window).width() > 640) {
			var main_number = $('.main_box').length;
			var main_width = $('.main_box').width();
			var last_section = $('.section_content').width();
			$('.main_scroll').css('width', main_width*main_number+last_section+'px')
			var scroll_box_width = $('.main_scroll').width();

			var window_h = $(window).height();
			$('body').css('height', scroll_box_width / window_h*565 + 'px');

			scrolling ();
			
		} else(
			$('.main_scroll').css('width', '100%'),
			$('body').css('height', '100%')
		)
	});
});