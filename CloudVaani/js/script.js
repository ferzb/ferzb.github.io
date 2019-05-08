'use strict';

$(document).ready(function() {
	$('.header_page, .home_banner, .home_banner_carousel, .home_banner_content > span, .home_banner_content > h1, .home_banner_content > p').addClass('show');

	$(window).scroll(function(){
		if ($(window).scrollTop() > 400){
			$('.home_description_content, .home_description_carousel').addClass('show');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 1100){
			$('.home_services h2').addClass('show');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 1400){
			$('.home_services > .container > p').addClass('show');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 1650){
			$('.home_services .box_item').addClass('show');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 1750){
			$('.home_services .box_item').css('transition-delay', '0s');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 2150){
			$('.home_about_content, .home_about_video').addClass('show');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 2450){
			$('.home_testimonial h2, .home_testimonial p, .home_testimonial_carousel').addClass('show');
		}
	});


	let toggleBlock = $('.nav-icon'),
		toggleLine = $('.nav-icon_line'),
		links = $('.navbar_list').find('> li > a'),
		links_footer = $('.footer_page').find('.footer_list > li > a'),
		nav = $('.navbar');

	toggleBlock.on('click', function(event) {
		$(this).toggleClass('open');
		toggleLine.toggleClass('active');
		nav.toggleClass('show');
		$('.overlay').toggleClass('show');
		if($(this).hasClass('open')){
			$('html, body').css('overflow', 'hidden')
		} else($('html, body').removeAttr('style'))
		

	});

	$('.overlay').click(function(){
		nav.removeClass('show');
		toggleLine.removeClass('active');
		toggleBlock.removeClass('open');
		$(this).removeClass('show');
		$('html, body').removeAttr('style')
	})

	$(window).resize(function() {
		if ($(window).width() > 1100) {
			nav.removeClass('show');
			toggleLine.removeClass('active');
			toggleBlock.removeClass('open');
			$('.overlay').removeClass('show');
			$('html, body').removeAttr('style')
		}
	});


	links.on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 150;
        $('body,html').animate({scrollTop: top}, 1000);
		nav.removeClass('show');
		toggleBlock.removeClass('open');
		toggleLine.removeClass('active');
		$('.overlay').removeClass('show');
		$('html, body').removeAttr('style')
	});
	
	links_footer.on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 150;
        $('body,html').animate({scrollTop: top}, 1000);
    	nav.removeClass('show');
		toggleLine.removeClass('active');
		toggleBlock.removeClass('open');
		$('.overlay').removeClass('show');
		$('html, body').removeAttr('style')
    });

    $('body').append('<i class="btn-up">');

	$('.btn-up').click(function(){
		$('body').animate({'scrollTop': 0}, 1000);
		$('html').animate({'scrollTop': 0}, 1000)
	})

	$(window).scroll(function(){
		if ($(window).scrollTop() > 200){
			$('.btn-up').addClass('active');
		} else if ($(window).scrollTop() > 400){
			$('.header_page').addClass('fixed');
		}
		else{
			$('.btn-up').removeClass('active');
		}
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() > 400){
			$('.header_page').addClass('fixed');
		}
		else{
			$('.header_page').removeClass('fixed');
		}
	});
	
});