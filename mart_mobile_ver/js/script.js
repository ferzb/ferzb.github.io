$(document).ready(function() {

	let dropdown_list = $('.dropdown');

	dropdown_list.each(function(){
		let that = $(this)
			that_span = that.find('span'),
			that_ul = that.find('ul');

		that_span.click(function(){
			$(this).toggleClass('active');
			that_ul.slideToggle();
		})

	})

	console.clear();

	// Get all the Meters
	const meters = document.querySelectorAll('svg[data-value] .meter');

	meters.forEach( (path) => {

		let length = path.getTotalLength();


	// Get the value of the meter
		let value = $('svg').data('value');

		let to = length * ((100 - value) / 100);
		path.getBoundingClientRect();
		path.style.strokeDashoffset = Math.max(0, to);  
		
	});

	var time = 2, show = 1 ;
	$(document).ready(function() {
		$('.circle').each(function(){
			$('span i').each(function(){
			var 
				i = 1,
				num = $(this).data('value'),
				step = 1000 * time / num,
				that = $(this),
				int = setInterval(function(){
					if (i <= num) {
						that.html(i);
					}
					else {
						show = show + 2
						clearInterval(int);
					}
					i++;
				},step);

				
			});
		});
	});

});