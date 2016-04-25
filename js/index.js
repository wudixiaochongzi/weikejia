$(function(){
    var $btn=$('.logo-box .btn');
    var $max=$('.max-header');
    $btn.click(function(){
        //$max.animate({height:300});
        $max.slideToggle();
    })
});