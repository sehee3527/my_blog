$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      loop:true,
      spaceBetween: 30,
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
  