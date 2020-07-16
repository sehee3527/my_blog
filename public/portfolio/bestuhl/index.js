var $html = $('html')
function slider() {
    $('.my-slider-1 > .owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000
    });
}

function news() {

    $(document).ready(function () {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });

}
function TopBar_init(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 2){
            $html. addClass('top-bar-fly');
        }
        else{
            $html. removeClass('top-bar-fly');
        };
    })
}

$(function () {
    slider();
    news();
    TopBar_init();
});