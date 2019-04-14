$(document).ready(function() {
	$('.header_logo, .main_header, .nav-icon, .header_info, .main_about, .navbar').addClass('show');

	var toggleBlock = $('.nav-icon'),
		toggleLine = $('.nav-icon_line'),
		nav = $('.navbar'),
		links = $('.home_navbar').find('a');

	toggleBlock.on('click', function(event) {
		toggleLine.toggleClass('active');
		nav.slideToggle();
	});

	links.on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
		nav.removeAttr('style');
		toggleLine.removeClass('active');
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