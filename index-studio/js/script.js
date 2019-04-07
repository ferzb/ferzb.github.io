$(document).ready(function() {
	$(function(){
		$(window).scroll(function() {
			
		});
	})
	window.onscroll = function (e) {
		var valueTop = window.scrollY;
		$('.main_scroll').css('transform', 'translateX(-'+valueTop/2+'px)');
		$('.ball').css('transform', 'translateX(-'+valueTop/18+'px)');
		//$('.general-title').css('transform', 'translateX('+valueTop/21+'px)');
		$('.triangle').css('transform', 'translateX('+valueTop/20+'px) rotate(-75deg)');
		$('.squer').css('transform', 'rotate('+valueTop/20+'deg)');
		//$('.wrapper').css('transform', 'translateX('+valueTop/16+'px)');
	};

	var main_number = $('.main_box').length;

	var last_section = $('.section_content').width();

	$('.main_scroll').css('width', 'calc( ' + 100*main_number + '% + ' + last_section + 'px)')
	
	var scroll_box_width = $('.main_scroll').width();

	$('body').css('height', 'calc('+scroll_box_width*2 +'px');

	$(window).resize(function() {
		var main_number = $('.main_box').length;

		var last_section = $('.section_content').width();

		$('.main_scroll').css('width', 'calc( ' + 100*main_number + '% + ' + last_section + 'px)')
		
		var scroll_box_width = $('.main_scroll').width();

		$('body').css('height', 'calc('+scroll_box_width*2 +'px - 8vw');
	});
});