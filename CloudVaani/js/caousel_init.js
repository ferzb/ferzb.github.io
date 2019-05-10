$('.home_banner_carousel').owlCarousel({
    items:1,
    loop:true,
    nav:false,
    dots: true,
    autoplay: true,
    margin:10
});

$('.home_description_carousel').owlCarousel({
    items:1,
    loop:true,
    nav:true,
    dots: false,
    margin:10,
    autoplay: true,
    navText: ["<span></span>", "<span></span>"]
});

$('.home_testimonial_carousel').owlCarousel({
    items:1,
    loop:true,
    nav:true,
    dots: false,
    margin:10,
    navText: ["<span></span>", "<span></span>"]
});

$('.customer_categories_carousel').owlCarousel({
    items:3,
    loop:true,
    nav:true,
    dots:false,
    margin:40,
    navText: ["<span></span>", "<span></span>"],
    responsive:{
		0:{
			items:1
		},
		480:{
			items:2
        },
        760:{
			items:3
        }
    }
});