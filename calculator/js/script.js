
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
			var price1, price2, price3;
			$('.calc').each(function(key, val){
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
							case 'price15':
								val = '';
								break;
							case 'price16':
								val = '';
								break;
							case 'price17':
								val = '';
								break;
							case 'price18':
								val = '';
								break;
							case 'price19':
								val = '';
								break;
							
							default:
								break;
						}
						$(this).val(val);
					}
					calcInputs[name] = val;
				});

				total_start_up_price = 0;



				if (calcInputs.price2 >= 1) {
					total_start_up_price += calcInputs.price2 * 1;
				}

				if (calcInputs.price3 >= 1) {
					total_start_up_price += calcInputs.price3 * 1;
				}

				if (calcInputs.price4 >= 1) {
					total_start_up_price += calcInputs.price4 * 1;
				}

				if (calcInputs.price5 >= 1) {
					total_start_up_price += calcInputs.price5 * 1;
				}

				if (calcInputs.price6 >= 1) {
					total_start_up_price += calcInputs.price6 * 1;
				}

				if (calcInputs.price7 >= 1) {
					total_start_up_price += calcInputs.price7 * 1;
				}

				if (calcInputs.price8 >= 1) {
					total_start_up_price += calcInputs.price8 * 1;
				}

				if (calcInputs.price9 >= 1) {
					total_start_up_price += calcInputs.price9 * 1;
				}

				if (calcInputs.price10 >= 1) {
					total_start_up_price += calcInputs.price10 * 1;
				}
				
				if (calcInputs.price11 >= 1) {
					total_start_up_price += calcInputs.price11 * 1;
				}

				if (calcInputs.price12 >= 1) {
					total_start_up_price += calcInputs.price12 * 1;
				}

				if (calcInputs.price13 >= 1) {
					total_start_up_price += calcInputs.price13 * 1;
				}

				if (calcInputs.price14 >= 1) {
					total_start_up_price += calcInputs.price14 * 1;
				}

				if (calcInputs.price15 >= 1) {
					total_start_up_price += calcInputs.price15 * 1;
				}

				if (calcInputs.price16 >= 1) {
					total_start_up_price += calcInputs.price16 * 1;
				}

				if (calcInputs.price17 >= 1) {
					total_start_up_price += calcInputs.price17 * 1;
				}

				if (calcInputs.price18 >= 1) {
					total_start_up_price += calcInputs.price18 * 1;
				}

				if (calcInputs.price19 >= 1) {
					total_start_up_price += calcInputs.price19 * 1;
				}

				general_total_start_up_price = calcInputs.price1 * 1;

				total_start_up_price += general_total_start_up_price;

				total_start_up_price += ' грн';


				jQuery(this).find('span.total').html(total_start_up_price);

				price1 = jQuery('.calc1').find('span.total').text();

				price2 = jQuery('.calc2').find('span.total').text();


			});


			function roughScale(x, base) {
				var parsed = parseInt(x, base);
				if (isNaN(parsed)) { return 0 }
				return parsed;
			}
			  
			var price3 = roughScale(price1) - roughScale(price2)

			jQuery('.calc3').find('span.total').html(price3);
			

			
			

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
