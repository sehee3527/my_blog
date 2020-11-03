var $html =  $('html');

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
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  });

  $(document).ready(function () {
    var swiper = new Swiper('.new-arrivals-slider', {
      slidesPerView: 5,
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
    });
  });
});

$(document).ready(function () {
  var swiper = new Swiper('.chicor-picks-slider', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
  });
});

$(document).ready(function () {
  var swiper = new Swiper('.skin-care-slide', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },
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

function TabBox__init() {
  $('[data-tab-head-item-name]').click(function() {
    var $this = $(this);
    var tabName = $this.attr('data-tab-name');
    var itemName = $this.attr('data-tab-head-item-name');
    $('[data-tab-name="' + tabName + '"]').removeClass('active');
    
    $('[data-tab-name="' + tabName + '"][data-tab-head-item-name="' + itemName + '"]').addClass('active');
    $('[data-tab-name="' + tabName + '"][data-tab-body-item-name="' + itemName + '"]').addClass('active');
  });
}

function TopBar_init() {
  
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if ( scrollTop > 80 ) {
      $html.addClass('fly-top-bar-active');
    }
    else {
      $html.removeClass('fly-top-bar-active');
    }
  });
}


$(function () {
  topBack();
  TabBox__init();
  TopBar_init();
});