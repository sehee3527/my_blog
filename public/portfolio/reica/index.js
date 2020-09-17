$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
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

$(document).ready(function () {
  var swiper = new Swiper('.swiper-container-4', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  });
});


function slideNum() {
  var $slidesCount = $('.camera-content').length;
  for (var i = 1; i <= $slidesCount; i++) {
    $('.bn-4>.slide-4-box>.slide-num').append("<div>0" + i + "</div>");
  };
};


$(function () {
  slideNum();
});