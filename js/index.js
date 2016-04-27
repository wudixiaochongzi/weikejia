$(function(){
    var $btn=$('.logo-box .btn');
    var $max=$('.max-header');
    $btn.click(function(){
        $max.stop();
        $max.slideToggle();
        //$max.css({height:'auto'});
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
    });
});