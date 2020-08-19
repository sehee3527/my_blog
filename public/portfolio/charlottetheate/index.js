$(document).ready(function () {
    $(".slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    //   autoplay: true,
    //   autoplaySpeed: 5000,
      arrows: false
    });
  });
  
  $(document).ready(function () {
    $(".musical-slider").slick({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      slidesToScroll: 1
    });
  });
  
  
  $(document).ready(function () {
    $(".notice").slick({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
  });
  var $html =  $('html');

function TopBar_init() {
  
  var $topBar =  $('.top-bar');
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if ( scrollTop > 30 ) {
      $html.addClass('top-bar-fly');
    }
    else {
      $html.removeClass('top-bar-fly');
    }
  });
}

/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
  setTimeout(function() {
      $(window).resize(ActiveOnVisible__initOffset);
      ActiveOnVisible__initOffset();

      $(window).scroll(ActiveOnVisible__checkAndActive);
      ActiveOnVisible__checkAndActive();
  }, 500);
}

function ActiveOnVisible__initOffset() {
  $('.active-on-visible').each(function(index, node) {
      var $node = $(node);

      var offsetTop = $node.offset().top;
      $node.attr('data-active-on-visible-offsetTop', offsetTop);

      if ( !$node.attr('data-active-on-visible-diff-y') ) {
          $node.attr('data-active-on-visible-diff-y', '0');
      }

      if ( !$node.attr('data-active-on-visible-delay') ) {
          $node.attr('data-active-on-visible-delay', '0');
      }
  });

  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() { 
  $('.active-on-visible:not(.actived)').each(function(index, node) {
      var $node = $(node);

      var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
      var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
      var delay = parseInt($node.attr('data-active-on-visible-delay'));

      var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

      if ( $(window).scrollTop() + $(window).height() + diffY > offsetTop ) {
          $node.addClass('actived');

          setTimeout(function() {
              $node.addClass('active');
              if ( window[callbackFuncName] ) {
                  window[callbackFuncName]($node);
              }
          }, delay);
      }
  });
}

/* 발견되면 활성화시키는 라이브러리 끝 */

$(function(){
  TopBar_init();
  ActiveOnVisible__init();
});