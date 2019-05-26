$(document).ready(function() {
	var categoryTitleList = $('.title-list'),
		categoryTitleListSpan = $('.title-list').find('span'),
		categoryBlock = $('.category-block'),
		toggleCategoryBlock = $('.toggle-category-block'),
		toggleTopSearch = $('.toggle-top-search'),
		toggleTitleBuilder = $('.title-builder');
	/*category's script active*/
	categoryBlock.each(function() {
		var this_categoryBlock = $(this);
		var this_categoryCheckBox = this_categoryBlock.find('label');
		this_categoryCheckBox.click(function() {
			$(this).toggleClass('active');
		});
	});

	categoryTitleListSpan.each(function() {
		var this_categoryTitleListSpan = $(this)
		this_categoryTitleListSpan.click(function() {
			var this_categoryTitleList = this_categoryTitleListSpan.parents('li');
			this_categoryTitleList.toggleClass('active');
			var this_titleListUl = this_categoryTitleListSpan.siblings('ul');
			this_titleListUl.slideToggle();
		});
	});

	toggleCategoryBlock.each(function() {
		var this_toggleCategoryBlock = $(this);
		var this_categoryTitle = this_toggleCategoryBlock.find('.category-title');
		var this_categoryBlock = this_categoryTitle.siblings('div');
		
		this_categoryTitle.click(function() {
			$(this).toggleClass('active');
			this_categoryBlock.slideToggle();
		});
	});

	toggleTitleBuilder.each(function() {
		var this_toggleTitleBuilder = $(this);
		var this_selectItem = this_toggleTitleBuilder.parents('.select-item');
		var this_containerItem = this_toggleTitleBuilder.siblings('.container-item');
		
		this_toggleTitleBuilder.click(function() {
			this_selectItem .toggleClass('active');
			this_containerItem.slideToggle();
		});
	});
	/*end category's script active*/

	/*builder's script active*/
	var builder__chooseCategoty = $('.main-builder-page__choose-category-selection').find('.builder__choose-categoty'),
		chooseCategoty__builder__itemBox = builder__chooseCategoty.find('.builder__item-box'),
		builder__selectTheAD = $('.main-builder-page__choose-category-selection').find('.builder__select-the-AD'),
		selectTheAD__builder__itemBox = builder__selectTheAD.find('.builder__item-box');

	chooseCategoty__builder__itemBox.click(function() {
		chooseCategoty__builder__itemBox.removeClass('active');
		$(this).addClass('active');
		
	});
	selectTheAD__builder__itemBox.click(function() {
		selectTheAD__builder__itemBox.removeClass('active');
		$(this).addClass('active');
		
	});
	/*end builder's script active*/

	var preview_controller = $('.main-builder-page__review-checkout').find('.preview-controller');
	var preview_controller_btn = preview_controller.find('span');
	console.log(preview_controller_btn);
	preview_controller_btn.click(function() {
		var data_name = $(this).attr('data-name');
		preview_controller_btn.removeClass('active')
		$(this).addClass('active');
		$('.ad-info-preview').removeClass('active');
		$('.' + data_name).addClass('active');
	});

	$('.dropdown-link').click(function() {
		$('.dropdown-block').slideToggle();
	});

	$('.dropdown-menu').click(function() {
		var this_dropdown_link = $(this),
			this_dropdown_list = this_dropdown_link.find('ul');
		this_dropdown_list.slideToggle();
	});

	$(function() {
		$(window).scroll(function(){
			if  ($(window).scrollTop() > 180)
				toggleTopSearch.addClass('visibility');
			else
				toggleTopSearch.removeClass('visibility');
		});
	});

	$('.profile_details').each(function(){
		let that = $(this),
			edit_btn = that.find('.profile_edit'),
			prof_info = that.find('.profile_info input'),
			input_box = that.find('.input_box');

		edit_btn.click(function(){
			let username = that.find('#username')
				username_val = username.val(),
				userphone = that.find('#userphone'),
				userphone_val = userphone.val(),
				useremail =  that.find('#useremail')
				useremail_val = useremail.val();

			if($(this).hasClass('active')){
				$(this).removeClass('active');
				prof_info.css('z-index', '-1')
				username.parent().find('span').text(username_val);
				userphone.parent().find('span').text(userphone_val);
				useremail.parent().find('span').text(useremail_val);

			}else{
				$(this).addClass('active'),
				prof_info.css('z-index', '1'),
				prof_info.focus()
			}
		})

	})

	$('.profile_items').each(function(){
		let that = $(this),
			item = that.find('.profile_item');

			item.each(function(){
				let that_item = $(this),
					item_status = that_item.find('.item_status'),
					item_v = that_item.data('status'),
					item_btn = that_item.find('.item_actions .details'),
					item_details = that_item.find('.item_details'),
					item_close = that_item.find('.close');

				if(item_v == 'draft' || item_v == 'Under Review'){
					item_status.attr('data-status', item_v).html(item_v);
					//$('.support, .details').css('display', 'none');
					
				}else if(item_v == 'awaiting'){
					item_status.attr('data-status', item_v).html('Awaiting approval from paper');
					//$('.delete').css('display', 'none');
					

				}else if (item_v == 'approved'){
					item_status.attr('data-status', item_v).html(item_v);
					//$('.support, .edit, .delete').css('display', 'none');
					
				}else if (item_v == 'rejected'){
					item_status.attr('data-status', item_v).html(item_v);
					//$('.support, .edit, .delete').css('display', 'none');
					
				}

				item_close.click(function(){
					item_details.slideUp();
					item_btn.removeClass('show').text('Show Details');
				})

				item_btn.click(function(){
					$(this).toggleClass('show');
					item_details.slideToggle();

					if($(this).hasClass('show')){
						item_btn.text('Hide Details');
					}else{
						item_btn.text('Show Details');
					}
				})
			})
	})

	$('.popular-block-carousel').owlCarousel({
		lazyLoad:true,
		nav:true,
		dots:false,
		margin: 20,
		responsive:{
			0:{
				items:3
			},
			960:{
				items:4
			}
		}
	});

	$('.item-foto-carousel').owlCarousel({
		items:1,
		lazyLoad:true,
		loop:true,
		nav:true,
		dots:false,
		margin: 10
	});

	$('.advertising-box').owlCarousel({
		items:1,
		lazyLoad:true,
		loop:true,
		nav:true,
		dots:false,
		margin: 10
	});

	$('.popular-packages_carousel').owlCarousel({
		items:2,
		nav:true,
		dots:false,
		navText: ["<span></span>","<span></span>"],
		margin: 20
	});
	$('.popular-template_carousel').owlCarousel({
		items:2,
		nav:true,
		dots:false,
		navText: ["<span></span>","<span></span>"],
		margin: 20
	});
	$('.popular-offer_carousel').owlCarousel({
		items:3,
		nav:true,
		dots:false,
		navText: ["<span></span>","<span></span>"],
		margin: 20
	});
	
	$(function(){
		var input = $('.input-global')
		input.each(function() {
			var this_input = $(this);
			this_input.click(function() {
				this_input.addClass('input-focus')
			});
		});
	});
});