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