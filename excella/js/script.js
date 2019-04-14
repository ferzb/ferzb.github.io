$(document).ready(function() {
	$('.header_logo, .main_header, .nav-icon, .header_info, .main_about').addClass('show');

	var toggleBlock = $('.nav-icon'),
		toggleLine = $('.nav-icon_line'),
		nav = $('.navbar');

	toggleBlock.on('click', function(event) {
		toggleLine.toggleClass('active');
		nav.slideToggle();
	});

	$(window).resize(function() {
		if ($(window).width() > 640) {
			nav.removeAttr('style');
			toggleLine.removeClass('active');
		}
	});

    $('body').append('<i class="btn-up">');

	$('.btn-up').click(function(){
		$('body').animate({'scrollTop': 0}, 1000);
		$('html').animate({'scrollTop': 0}, 1000)
	})

	$(window).scroll(function(){
		if ($(window).scrollTop() > 200){
			$('.btn-up').addClass('active');
		}
		else{
			$('.btn-up').removeClass('active');
		}
	});
	
});