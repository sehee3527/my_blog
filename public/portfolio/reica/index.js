$(document).ready(function () {
  var swiper = new Swiper('.slide-1', {
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

$(document).ready(function () {
  var swiper = new Swiper('.bn-5-slider-in', {
    direction: 'vertical',
    spaceBetween: 30,
    fade:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

function slideNum() {
  var $slidesCount = $('.camera-content').length;
  for (var i = 1; i <= $slidesCount; i++) {
    $('.bn-4>.slide-4-box>.slide-num').append("<div>0" + i + "</div>");
  };
};

function TabBox__init() {
  $('[data-tab-head-item-name]').click(function() {
    var $this = $(this);
    var tabName = $this.attr('data-tab-name');
    var itemName = $this.attr('data-tab-head-item-name');
    // [for]
    // 모든 것을 숨기고
    $('[data-tab-name="' + tabName + '"]').removeClass('active');
    
    $('[data-tab-name="' + tabName + '"][data-tab-head-item-name="' + itemName + '"]').addClass('active');
    $('[data-tab-name="' + tabName + '"][data-tab-body-item-name="' + itemName + '"]').addClass('active');
  });
}


$(function () {
  slideNum();
  TabBox__init();
  $('.main-text-box').addClass('active');
  $('.main-bn .grid-box>div:nth-child(7)>div').addClass('active');
});