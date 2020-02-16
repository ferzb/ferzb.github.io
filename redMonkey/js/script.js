'use strict';

$(document).ready(function(){
    
    let language_list = $('.language_list'),
        open_language_list = $('.language_active'),
        choose_language = language_list.find('li'),
        user_box = $('.user'),
        user_list = user_box.find('.user_list'),
        user_arrow = user_box.find('.general_arrow');

    open_language_list.click(function () { 
        language_list.slideToggle();
        user_list.css('display', 'none');
    });

    choose_language.click(function(){
        let this_lang = $(this),
            attr_lang = this_lang.attr('data-lang');
        open_language_list.text(attr_lang);
        language_list.slideUp();
    })

    user_arrow.click(function(){
        language_list.css('display', 'none');
        user_list.slideToggle();
    })

    let count = 0,
        tour_card = $('.chooses_tours').find('.tour'),
        length_tour = tour_card.length,
        tour_arrow_next = $('.chooses_tours').find('.arrow_next'),
        tour_arrow_back = $('.chooses_tours').find('.arrow_back'),
        tour_wrapper_box = $('.chooses_tours').find('.wrapper_box'),
        choose_tour = $('.chooses_tours').find('.choose_tour'),
        all_tour = $('.chooses_tours').find('.all_tour');

        all_tour.text(length_tour);

    
    tour_arrow_next.click(function(){
        tour_wrapper_box.css('transform', 'translateX(calc(-100*'+count+1+'%))');
        count++;
        choose_tour.text(count+1);
        tour_arrow_back.css('display', 'flex');
        if (count == length_tour - 1){
            $(this).css('display', 'none');
        }
        console.log(count);
    })
    tour_arrow_back.click(function(){
        count--;
        choose_tour.text(count+1);
        tour_wrapper_box.css('transform', 'translateX(calc(100*'+count+'%))');
        tour_arrow_next.css('display', 'flex');
        if (count == 0){
            $(this).css('display', 'none');
        }

        console.log(count);
    })


    console.log(length_tour)


    let tab_tour = $('.tour');

        tab_tour.each(function(){
            let this_tab_tour = $(this);
            this_tab_tour.click(function(){
                tab_tour.removeClass('active');
                $(this).addClass('active');
                let index_tab = $(this).index();
                $('.tour_desc').removeClass('active');
                $('.tour_desc:eq('+index_tab+')').addClass('active')
            })

        })


    let footer_title = $('.footer_title_list');

    footer_title.click(function(){
        let this_title = $(this),
            list_attr = this_title.attr('data-list')

        $('.sublist.'+ list_attr).addClass('active');

    })

    let footer_list = $('.footer_list'),
        close_active_list = footer_list.find('.general_close');

    close_active_list.click(function(){
        $('.sublist').removeClass('active');
    })
})