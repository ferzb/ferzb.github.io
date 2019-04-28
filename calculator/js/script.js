
var toggleBlock = $('.nav-icon'),
	toggleLine = $('.nav-icon_line'),
	overlay = $('.overlay'),
	nav = $('.navbar');

//
//toggle classes when click toggleBlock
//
toggleBlock.on('click', function(event) {
	$(this).toggleClass('open');
	toggleLine.toggleClass('active');
	nav.toggleClass('show');
	overlay.toggleClass('active');
	if (nav.hasClass('active')) {
		$('body', 'html').css('overflow', 'hidden');
	} else{
		$('body', 'html').removeAttr('style');
	}
});



(function ($) {
	$(function () {
		calculate();
		jQuery('.calc input').keyup(function(){
			this.value = this.value.replace(/[^0-9\.,]/g, '');
			this.value = this.value.replace(/[,]/, '.');
		})

		jQuery('.calc input').change(function() {
            calculate();
        });

		jQuery('.calc input').keyup(function(){
			calculate();
		})
		function calculate() {

			function roughScale(x, base) {
				var parsed = parseInt(x, base);
				if (isNaN(parsed)) { return 0 }
				return parsed;
			}

			$('.calc1').each(function(key, val){
				calcInputs = {};

				$(this).find('input').each(function(key, val){
					name = $(this).attr('name');
					val = $(this).val();
					if (!$.isNumeric(val)) {
						switch (name) {
							case 'price1':
								val = '';
								break;
							case 'price2':
								val = '';
								break;
							case 'price3':
								val = '';
								break;
							case 'price4':
								val = '';
								break;
							case 'price5':
								val = '';
								break;
							case 'price6':
								val = '';
								break;
							case 'price7':
								val = '';
								break;
					
							default:
								break;
						}
						$(this).val(val);
					}
					calcInputs[name] = val;
				});

				totalPrice = 0;

				if (calcInputs.price2 >= 1) {
					totalPrice += calcInputs.price2 * 1;
				}

				if (calcInputs.price3 >= 1) {
					totalPrice += calcInputs.price3 * 1;
				}

				if (calcInputs.price4 >= 1) {
					totalPrice += calcInputs.price4 * 1;
				}

				if (calcInputs.price5 >= 1) {
					totalPrice += calcInputs.price5 * 1;
				}


				if (calcInputs.price6 >= 1) {
					totalPrice += calcInputs.price6 * 1;
				}


				if (calcInputs.price7 >= 1) {
					totalPrice += calcInputs.price7 * 1;
				}


				install = calcInputs.price1 * 1;

				totalPrice += install;

				totalPrice += ' грн';

				jQuery(this).find('span.total').html(totalPrice);
			});

			$('.calc2').each(function(key, val){
				calcInputs1 = {};

				$(this).find('input').each(function(key, val){
					name = $(this).attr('name');
					val = $(this).val();
					if (!$.isNumeric(val)) {
						switch (name) {
							case 'price1':
								val = '';
								break;
							case 'price2':
								val = '';
								break;
							case 'price3':
								val = '';
								break;
							case 'price4':
								val = '';
								break;
							case 'price5':
								val = '';
								break;
							case 'price6':
								val = '';
								break;
							case 'price7':
								val = '';
								break;
							case 'price8':
								val = '';
								break;
							case 'price9':
								val = '';
								break;
							case 'price10':
								val = '';
								break;
							case 'price11':
								val = '';
								break;
							case 'price12':
								val = '';
								break;
							case 'price13':
								val = '';
								break;
							case 'price14':
								val = '';
								break;
					
							default:
								break;
						}
						$(this).val(val);
					}
					calcInputs1[name] = val;
				});

				totalPrice = 0;

				if (calcInputs1.price2 >= 1) {
					totalPrice += calcInputs1.price2 * 1;
				}

				if (calcInputs1.price3 >= 1) {
					totalPrice += calcInputs1.price3 * 1;
				}

				if (calcInputs1.price4 >= 1) {
					totalPrice += calcInputs1.price4 * 1;
				}

				if (calcInputs1.price5 >= 1) {
					totalPrice += calcInputs1.price5 * 1;
				}


				if (calcInputs1.price6 >= 1) {
					totalPrice += calcInputs1.price6 * 1;
				}


				if (calcInputs1.price7 >= 1) {
					totalPrice += calcInputs1.price7 * 1;
				}

				if (calcInputs1.price8 >= 1) {
					totalPrice += calcInputs1.price8 * 1;
				}

				if (calcInputs1.price9 >= 1) {
					totalPrice += calcInputs1.price9 * 1;
				}

				if (calcInputs1.price10 >= 1) {
					totalPrice += calcInputs1.price10 * 1;
				}

				if (calcInputs1.price11 >= 1) {
					totalPrice += calcInputs1.price11 * 1;
				}

				if (calcInputs1.price12 >= 1) {
					totalPrice += calcInputs1.price12 * 1;
				}

				if (calcInputs1.price13 >= 1) {
					totalPrice += calcInputs1.price13 * 1;
				}

				if (calcInputs1.price14 >= 1) {
					totalPrice += calcInputs1.price14 * 1;
				}


				install = calcInputs1.price1 * 1;

				totalPrice += install;

				totalPrice += ' грн';

				jQuery(this).find('span.total').html(totalPrice);
			});

			$('.calc3').each(function(key, val){
				calcInputs3 = {};

				$(this).find('input').each(function(key, val){
					name = $(this).attr('name');
					val = $(this).val();
					if (!$.isNumeric(val)) {
						switch (name) {
							case 'price1':
								val = '';
								break;
							case 'price2':
								val = '';
								break;
							case 'price3':
								val = '';
								break;
							case 'price4':
								val = '';
								break;
							case 'price5':
								val = '';
								break;
							case 'price6':
								val = '';
								break;
							case 'price7':
								val = '';
								break;
							case 'price8':
								val = '';
								break;
							case 'price9':
								val = '';
								break;
							case 'price10':
								val = '';
								break;
					
							default:
								break;
						}
						$(this).val(val);
					}
					calcInputs3[name] = val;
				});

				totalPrice = 0;

				if (calcInputs3.price2 >= 1) {
					totalPrice += calcInputs3.price2*calcInputs1.price4/1000 * 1;
				}

				if (calcInputs3.price3 >= 1) {
					totalPrice += calcInputs3.price3*calcInputs1.price5/1000 * 1;
				}

				if (calcInputs3.price4 >= 1) {
					totalPrice += calcInputs3.price4*calcInputs1.price6/1000 * 1;
				}

				if (calcInputs3.price5 >= 1) {
					totalPrice += calcInputs3.price5*calcInputs1.price9/1000 * 1;
				}

				if (calcInputs3.price6 >= 1) {
					totalPrice += calcInputs3.price6*calcInputs1.price7/1000 * 1;
				}

				if (calcInputs3.price7 >= 1) {
					totalPrice += calcInputs3.price7*calcInputs1.price8/1000 * 1;
				}

				if (calcInputs3.price8 >= 1) {
					totalPrice += calcInputs3.price8*calcInputs1.price10/1000 * 1;
				}

				if (calcInputs3.price9 >= 1) {
					totalPrice += calcInputs3.price9*calcInputs1.price11/1000 * 1;
				}

				if (calcInputs3.price10 >= 1) {
					totalPrice += calcInputs3.price10*calcInputs1.price12/1000 * 1;
				}


				install = calcInputs3.price1*calcInputs1.price2/1000 * 1;

				totalPrice += install;

				totalPrice += ' грн';

				jQuery(this).find('span.total').html(totalPrice);
			});

			$('.calc4').each(function(key, val){
				calcInputs4 = {};

				$(this).find('input').each(function(key, val){
					name = $(this).attr('name');
					val = $(this).val();
					if (!$.isNumeric(val)) {
						switch (name) {
							case 'price1':
								val = '';
								break;
							case 'price2':
								val = '';
								break;
							case 'price3':
								val = '';
								break;
							case 'price4':
								val = '';
								break;
							case 'price5':
								val = '';
								break;
							case 'price6':
								val = '';
								break;
							case 'price7':
								val = '';
								break;
							case 'price8':
								val = '';
								break;
							case 'price9':
								val = '';
								break;
							case 'price10':
								val = '';
								break;
					
							default:
								break;
						}
						$(this).val(val);
					}
					calcInputs4[name] = val;
				});

				totalPrice = 0;

				if (calcInputs4.price2 >= 1) {
					totalPrice += calcInputs4.price2*calcInputs1.price4/1000 * 1;
				}

				if (calcInputs4.price3 >= 1) {
					totalPrice += calcInputs4.price3*calcInputs1.price5/1000 * 1;
				}

				if (calcInputs4.price4 >= 1) {
					totalPrice += calcInputs4.price4*calcInputs1.price6/1000 * 1;
				}

				if (calcInputs4.price5 >= 1) {
					totalPrice += calcInputs4.price5*calcInputs1.price9/1000 * 1;
				}

				if (calcInputs4.price6 >= 1) {
					totalPrice += calcInputs4.price6*calcInputs1.price7/1000 * 1;
				}

				if (calcInputs4.price7 >= 1) {
					totalPrice += calcInputs4.price7*calcInputs1.price8/1000 * 1;
				}

				if (calcInputs4.price8 >= 1) {
					totalPrice += calcInputs4.price8*calcInputs1.price10/1000 * 1;
				}

				if (calcInputs4.price9 >= 1) {
					totalPrice += calcInputs4.price9*calcInputs1.price11/1000 * 1;
				}

				if (calcInputs4.price10 >= 1) {
					totalPrice += calcInputs4.price10*calcInputs1.price12/1000 * 1;
				}


				install = calcInputs4.price1*calcInputs1.price1/1000 * 1;

				totalPrice += install;

				totalPrice += ' грн';

				jQuery(this).find('span.total').html(totalPrice);
			});

			$('.calc5').each(function(key, val){
				calcInputs5 = {};

				$(this).find('input').each(function(key, val){
					name = $(this).attr('name');
					val = $(this).val();
					if (!$.isNumeric(val)) {
						switch (name) {
							case 'price1':
								val = '';
								break;
							case 'price2':
								val = '';
								break;
							case 'price3':
								val = '';
								break;
							case 'price4':
								val = '';
								break;
					
							default:
								break;
						}
						$(this).val(val);
					}
					calcInputs5[name] = val;
				});

				totalPrice1 = 0;
				totalPrice2 = 0;
				totalPrice3 = 0;
				totalPrice4 = 0;
				totalPrice5 = 0;
				totalPrice6 = 0;

				var totalCalc4 = jQuery('.calc4').find('span.total').text();
				var totalCalc3 = jQuery('.calc3').find('span.total').text();


				install1 = (calcInputs5.price1 - roughScale(totalCalc4))*calcInputs5.price2;
				install2 = (calcInputs5.price1 - roughScale(totalCalc3))*calcInputs5.price4;

				totalPrice1 += install1;
				totalPrice2 += install2;
				totalPrice3 += install1*30;
				totalPrice4 += install2*30;
				totalPrice5 += install1+install2;
				totalPrice6 += (install1+install2)*30;

				totalPrice1 += ' грн';
				totalPrice2 += ' грн';
				totalPrice3 += ' грн';
				totalPrice4 += ' грн';
				totalPrice5 += ' грн';
				totalPrice6 += ' грн';

				jQuery(this).find('span.total').html(totalPrice1);
				jQuery(this).find('span.total1').html(totalPrice3);
				jQuery(this).find('span.total2').html(totalPrice2);
				jQuery(this).find('span.total3').html(totalPrice4);
				jQuery(this).find('span.total4').html(totalPrice5);
				jQuery(this).find('span.total5').html(totalPrice6);
			});

			$('.calc6').each(function(key, val){
				calcInputs6 = {};

				$(this).find('input').each(function(key, val){
					name = $(this).attr('name');
					val = $(this).val();
					if (!$.isNumeric(val)) {
						switch (name) {
							case 'price1':
								val = '';
								break;
							case 'price2':
								val = '';
								break;
							case 'price3':
								val = '';
								break;
							case 'price4':
								val = '';
								break;
					
							default:
								break;
						}
						$(this).val(val);
					}
					calcInputs6[name] = val;
				});

				totalPrice = 0;

				if (calcInputs6.price2 >= 1) {
					totalPrice += calcInputs6.price2 * 1;
				}

				if (calcInputs6.price3 >= 1) {
					totalPrice += calcInputs6.price3 * 1;
				}

				if (calcInputs6.price4 >= 1) {
					totalPrice += calcInputs6.price4 * 1;
				}


				install = calcInputs6.price1 * 1;

				totalPrice += install;

				totalPrice += ' грн';

				jQuery(this).find('span.total').html(totalPrice);
			});

			$('.calc7').each(function(key, val){
				
				totalPrice = 0;

				var totalCalc5 = jQuery('.calc5').find('span.total5').text();
				var totalCalc6 = jQuery('.calc6').find('span.total').text();

				install = roughScale(totalCalc5) - roughScale(totalCalc6);

				totalPrice += install;

				totalPrice += ' грн';

				jQuery(this).find('span.total').html(totalPrice);
			});

			$('.calc8').each(function(key, val){
				
				totalPrice = 0;

				var totalCalc1 = jQuery('.calc1').find('span.total').text();
				var totalCalc7 = jQuery('.calc7').find('span.total').text();

				install = roughScale(totalCalc1)/roughScale(totalCalc7)*10;

				totalPrice = install.toFixed(0);

				totalPrice += ' мес.';

				jQuery(this).find('span.total').html(totalPrice);
			});


		}
	});

	
	  
	
})(jQuery);


$('input').focus(function(){
	$(this).addClass('focus')
}).blur(function(){
	if($(this).val() === ''){
		$(this).removeClass('focus')
	}
})
