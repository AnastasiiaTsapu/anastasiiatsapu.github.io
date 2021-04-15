$(function(){
    $('.slider__inner, .comment__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    })
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        focus: '#name'
     });
    
});

// $('.show-popup').magnificPopup({
//         type: 'inline',
//         removalDelay: 500, 
//         callbacks: {
//             beforeOpen: function () {
//                 this.st.mainClass = this.st.el.attr('data-effect');
//             }
//         },
//         midClick: true 
    // });
    // jQuery(document).ready(function($) {
    //     $('.popup-content').magnificPopup({
    //         type: 'inline'
    //     });
    // });