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

				that.toggleClass('show');

			})

			that_list_item.each(function(){
				$(this).click(function(){
					let this_val = $(this).text(),
						this_attr = $(this).attr('data-name');

					that_span.html(this_val).attr('data-name', this_attr).removeClass('active');

					that.removeClass('show');

					if($(this).attr('data-name') == 'new-user'){
						
						that_span.html('New User').attr('data-name', this_attr).removeClass('active');

						$('.dropdown_new-user').addClass('show');
					}else{
						$('.dropdown_new-user').removeClass('show');
					}
				})
			})

	})

	let select_user = $('#select_user'),
		dropdown_new_user = $('.dropdown_new-user');

	select_user.each(function(){
		let that = $(this),
			that_option = that.find('option').last();

		that_option.click(function(){
			dropdown_new_user.css('display', 'block');
		})
	})
	
	
	//modal functional

	let modal_window = $('.modal'),
		open_btn = $('.create_new_building'),
		close_btn = $('.close_modal');

	//open modal window
	open_btn.click(function(){
		modal_window.css('display', 'block')
	})
	//close modal window
	close_btn.click(function(){
		modal_window.css('display', 'none')
	})
	
	modal_window.each(function(){

		let that = $(this),
			inner_wrapper = that.find('.inner_wrapper');
			
		inner_wrapper.each(function(){

			let count = 0,
				this_inner_wrapper = $(this),
				btn_dropdown = this_inner_wrapper.find('.dropdown_form'),
				btn_add_display = this_inner_wrapper.find('.add_display'),
				box_dropdown = this_inner_wrapper.find('.dropdown_form-box'),
				elevator_yes = $('.elevator_yes').attr('id'),
				elevator_no = $('.elevator_no').attr('id');

			//dropdown button
			btn_dropdown.click(function(){
				$(this).toggleClass('active');
				box_dropdown.slideToggle();
	
				if($(this).hasClass('active')){
					$(this).text('Hide Advance Settings')
				}else{
					$(this).text('Show Advance Settings')
				}
			})
				
			//add new display button
			btn_add_display.click(function(){

				count++;

				let parent_form_btn = $(this).parent(),
					clone_inner = parent_form_btn.parent(),
					clone_inner_wrapper = clone_inner.parent();


				//clone inner wrapper box and function for this box
				clone_inner_wrapper.clone().each(function(i){

					let this_clone = $(this),
						btn_dropdown = this_clone.find('.dropdown_form'),
						box_dropdown = this_clone.find('.dropdown_form-box'),
						remove_add = this_clone.find('.remove_display');

					//remove new display box
					remove_add.click(function(){
						let clone = $('.clone');

						count = count - (count + 1);
	

						this_clone.remove();
					})

					//dropdown button for new display box
					btn_dropdown.click(function(){
						$(this).toggleClass('active');
						box_dropdown.slideToggle();

						
			
						if($(this).hasClass('active')){
							$(this).text('Hide Advance Settings')
						}else{
							$(this).text('Show Advance Settings')
						}

					})

					//function fot radio button for each inner wrapper
					this_clone.each(function(){

						let this_input_yes = $(this).find('.elevator_yes'),
							this_label_yes = $(this).find('.elevator_yes + label'),
							this_input_no = $(this).find('.elevator_no'),
							this_label_no = $(this).find('.elevator_no + label');

						this_input_yes.attr('id', 'display_'+count+'_'+elevator_yes).attr('name', 'elevator_'+count);
						this_label_yes.attr('for', 'display_'+count+'_'+elevator_yes);
						

						this_input_no.attr('id', 'display_'+count+'_'+elevator_no).attr('name', 'elevator_'+count);
						this_label_no.attr('for', 'display_'+count+'_'+elevator_no);
					})
					

				}).addClass('clone clone_'+count).appendTo('.building_screens');

			});


		})


		let count = 0,
			inner_box = that.find('.global_wrap'),
			inner_box_l = inner_box.length,
			g_btn_action = that.find('.modal_footer .general_btn'),
			progress = that.find('.progerss span');
		
		inner_box.eq(count).addClass('active')

		g_btn_action.click(function(){

			if($(this).hasClass('back')){
				count--;
				progress.eq(count).removeClass('active');
				$('.modal_footer .general_btn.next').css('display', 'block');
				$('.modal_footer .general_btn.publish').css('display', 'none');
			}else if(count >= inner_box_l - 1){
				count = inner_box_l - 1;
				$('.modal_footer .general_btn.next').css('display', 'none');
				$('.modal_footer .general_btn.publish').css('display', 'block');
			}else {
				count++,
				progress.eq(count - 1).addClass('active')
			}
			
			if(count <= 0){
				$('.modal_footer .general_btn.back').addClass('disable');
				progress.removeClass('active')
			}else if(count > 0){
				$('.modal_footer .general_btn.back	').removeClass('disable');
			}

			inner_box.removeClass('active')
			inner_box.eq(count).addClass('active');

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