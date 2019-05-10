'use strict';

$(document).ready(function() {
	$('.header_page, .home_banner, .home_banner_carousel, .home_banner_content > span, .home_banner_content > h1, .home_banner_content > p').addClass('show');


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


	$(window).scroll(function(){
		if($(window).scrollTop() > 1750){
			$('.home_services .box_item').css('transition-delay', '0s');
		}
		$('.panel').each(function(){
			var top = $(this).offset().top - 900;
			if ($(window).scrollTop() > top){
				$(this).addClass('show');
			}
		})

		let count = $(window).scrollTop();
		$('.home_main > .object').css({
			transform: 'translateY('+count/3+'px)'
		})

		$('.home_main > .object_1').css({
			transform: 'translateY('+count/3+'px)'
		})
	});


	links.on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
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
        let id  = $(this).attr('href'),
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

	let videoYoutube = $('.home_about_video iframe').attr('src');

	$('.home_about_video img').click(function(){
		$(this).css('display', 'none');
		$('.home_about_video iframe').attr('src', videoYoutube+'?autoplay=1').css('opacity', '1');
	})

	let time = 2,
		show = 1;

	$(window).scroll(function() {
		$('.customer_skills').each(function(){
			let 
				cPos = $(this).offset().top,
				topWindow = $(window).scrollTop();

			if(cPos < topWindow + 700){
				if(show < 2){
					$('.customer_skills_item > span').each(function(){
						let 
							i =1,
							this_span = $(this),
							num = this_span.data('num'),
							step = 1000 * time / num,
							that = this_span.find('i'),
							that_b = this_span.find('b'),
							int = setInterval(function(){
								if (i <= num) {
									that.html(i+"%");
								}
								else {
									show = show + 2
									clearInterval(int);
								}
								i++;
							},step);
						
						that_b.css({
							'transform': 'translateY(-'+num+'%)',						
						});
					})
				}
			}

		})	

	});

	$('.modal_target').click(function(){
		$('.popup-box').css('display', 'block')
		$('html, body').css({
			'overflow': 'hidden',
			'padding-right': '6px'
		})
	})

	$('.popup-box .overlay, .popup-box .close_popup').click(function(){
		$('.popup-box').removeAttr('style');
		$('html, body').removeAttr('style');
	})

	$('.popup-box .dropdown').each(function(){
		let that = $(this);
		that.click(function(){
			let dropdown_list = that.find('ul');
			dropdown_list.slideToggle();
			dropdown_list.each(function(){
				let dropdown_item = $(this).find('li');
				dropdown_item.click(function(){
					let dropdown_text = $(this).text(),
						that_span = that.find('span');
					that_span.text(dropdown_text);

				})
			})
		})
	});

	$('.popup-box').each(function(){
		let that = $(this),
			form_span = that.find('.form_btn'),
			form_btn = that.find('button'),
			count = 0,
			input_wrapper = that.find('.input-wrapper');

		form_span.click(function(){
			count++;
			if(count >= 2){
				$(this).css('display', 'none');
				form_btn.css('display', 'block');
				$('.step_start').addClass('final');
				$('.step_middle').removeClass('active');
				$('.step_middle').addClass('final');
				$('.step_final').addClass('active');
			}else if(count == 1){
				$('.step_start').addClass('final');
				$('.step_middle').addClass('active');
			}
			input_wrapper.css('top', 'calc(-'+count+'*360px')
		})
	});
	
});