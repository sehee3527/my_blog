function SlickSlider() {
    $(".slider-box > .slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });
    $(".inner > .slider").slick({
        infinite: true,
        slidesToShow: 3,
        swipe: false,
        dots: false
    });
    setTimeout(function() {
        $(".slider-box").addClass('ani-on');
    }, 10);
}

$(function () {
    SlickSlider();
});