$(document).ready(function(){
    $('.production__slider').slick({
        arrows:false,
        asNavFor:".production__slider-small",
    });
});
$(document).ready(function(){
    $('.production__slider-small').slick({
        slidesToShow:4,
        arrows:false,
        infinite:true,
        asNavFor:".production__slider",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.small-slider__back-arrow-wrapper').click(function(event) {
        $('.production__slider-small').slick('slickPrev');
    });
    $('.small-slider__next-arrow-wrapper').click(function(event) {
        $('.production__slider-small').slick('slickNext');
    });
});
$(document).ready(function(){
    $('.feedback-slider').slick({
        arrows:false,
        slidesToShow:3,
        slidesToScroll:1,
        infinite:true,
        responsive: [
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.feedback-slider__back-arrow').click(function(event) {
        $('.feedback-slider').slick('slickPrev');
    });
    $('.feedback-slider__next-arrow').click(function(event) {
        $('.feedback-slider').slick('slickNext');
    });
});