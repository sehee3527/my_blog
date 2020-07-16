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

$(function () {
    slider();
    news();
});