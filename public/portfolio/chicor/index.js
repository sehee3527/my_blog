$(document).ready(function () {
  swiper = new Swiper(".main-slider", {
    speed: 600,
    grabCursor: true,
    slidesPerView: 3,
    loop: true,
    spaceBetween: 70,
    centeredSlides: true,
    slidesPerView: "auto",
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(document).ready(function() {
    var swiper = new Swiper('.new-arrivals-slider', {
      slidesPerView: 5,
      loop:true,
      spaceBetween: 30,
      centeredSlides: true,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
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
  

});

function topBack() {
  $('.fly-top-bar>.fly-top-bar-box>ul>li').mouseover(function () {
    $('.fly-top-bar>.fly-top-bar-back').addClass('active')
  });
  $('.fly-top-bar>.fly-top-bar-box>ul>li').mouseleave(function () {
    $('.fly-top-bar>.fly-top-bar-back').removeClass('active')
  });
}

$(function () {
  topBack()
});