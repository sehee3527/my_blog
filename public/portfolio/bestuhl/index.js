function slider(){
    $('.my-slider-1 > .owl-carousel').owlCarousel({
        items:1,
        autoplay:true,
        autoplayTimeout:5000
      });
}

$(function () {
    slider();
});