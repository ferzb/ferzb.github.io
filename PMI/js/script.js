'use strict';

$(document).ready(function() {

	//checkbox functional

	let each_check = $('.each_check'),
		all_check = $('.check_all')

	each_check.each(function(){
		let that = $(this);
		that.click(function(){

			$(this).toggleClass('checked');

		})
	})

	all_check.click(function(){
		$(this).toggleClass('checked');

		if($(this).hasClass('checked')){
			each_check.addClass('checked');
		}else{
			each_check.removeClass('checked')
		}
		
	})

	//dropdown functional

	let dropdown_list = $('.dropdown_list');

	dropdown_list.each(function(){
		let that = $(this),
			that_span = that.find('span'),
			that_list = that.find('ul'),
			that_list_item = that_list.find('li');

			that_span.click(function(){
				$(this).toggleClass('active');

				that_list.slideToggle();
			})

			that_list_item.each(function(){
				$(this).click(function(){
					let this_val = $(this).text(),
						this_attr = $(this).attr('data-name');

					that_span.html(this_val).attr('data-name', this_attr);

					that_list.slideUp();
				})
			})

	})

    
    //input focus function
    let input_box = $('.input_box input');
    
	input_box.focus(function(){
		$(this).parent().addClass('focus')
	}).blur(function(){
		if($(this).val() === ''){
			$(this).parent().removeClass('focus')
		}
	})
	
});