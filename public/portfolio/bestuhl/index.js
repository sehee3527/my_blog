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

/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
  $('.active-on-visible').each(function(index, node) {
    var $node = $(node);

    var onFuncName = $node.attr('data-active-on-visible-on-func-name');
    var offFuncName = $node.attr('data-active-on-visible-off-func-name');

    $node.data('data-active-on-visible-on-func-name', onFuncName);
    $node.data('data-active-on-visible-off-func-name', offFuncName);
  });

  $(window).resize(_.debounce(ActiveOnVisible__initOffset, 500));
  ActiveOnVisible__initOffset();

  $(window).scroll(_.debounce(ActiveOnVisible__checkAndActive, 50));
  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
  var windowHeight = $(window).height();

  $('.active-on-visible:not(.actived)').each(function(index, node) {
    var $node = $(node);

    var offsetTop = $node.offset().top;

    var matrix = $node.css('transform').replace(/[^0-9\-.,]/g, '').split(',')
    var translateX = matrix[12] || matrix[4];
    var translateY = matrix[13] || matrix[5];

    if ( translateY ) {
      offsetTop -= translateY;
    }

    $node.attr('data-active-on-visible-offsetTop', offsetTop);
    $node.data('data-active-on-visible-offsetTop', offsetTop);

    if ( !$node.attr('data-active-on-visible-diff-y') ) {
      $node.attr('data-active-on-visible-diff-y', '0');
    }

    if ( !$node.attr('data-active-on-visible-delay') ) {
      $node.attr('data-active-on-visible-delay', '0');
    }

    var diffY = $node.attr('data-active-on-visible-diff-y');
    var delay = $node.attr('data-active-on-visible-delay');

    if ( diffY.substr(-2, 2) == 'vh' ) {
      diffY = parseInt(diffY);

      diffY = windowHeight * (diffY / 100);
    }
    else if ( diffY.substr(-1, 1) == '%' ) {
      diffY = parseInt(diffY);

      diffY = $node.height() * (diffY / 100);
    }
    else {
      diffY = parseInt(diffY);
    }

    $node.attr('data-active-on-visible-diff-y-real', diffY);
    $node.data('data-active-on-visible-diff-y', diffY);
    $node.data('data-active-on-visible-delay', delay);
  });

  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() { 
  $('.active-on-visible:not(.actived)').each(function(index, node) {
    var $node = $(node);

    var offsetTop = $node.data('data-active-on-visible-offsetTop') * 1;
    var diffY = parseInt($node.data('data-active-on-visible-diff-y'));
    var delay = parseInt($node.data('data-active-on-visible-delay'));

    var onFuncName = $node.data('data-active-on-visible-on-func-name');
    var offFuncName = $node.data('data-active-on-visible-off-func-name');

    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var nodeHeight = $node.height();

    if ( scrollTop + windowHeight + diffY > offsetTop ) {
      setTimeout(function() {
        if ( $node.hasClass('active') == false ) {
          $node.addClass('active');

          if ( $node.hasClass('can-active-once') ) {
            $node.addClass('actived');
          }

          if ( window[onFuncName] ) {
            window[onFuncName]($node);
          }
        }
      }, delay);
    }
    else {
      if ( $node.hasClass('active') ) {
        $node.removeClass('active');

        if ( window[offFuncName] ) {
          window[offFuncName]($node);
        }
      }
    }
  });
}

/* 발견되면 활성화시키는 라이브러리 끝 */

$(function () {
    slider();
    news();
    TopBar_init();
    setTimeout(function () {
      ActiveOnVisible__init();
    }, 1000);
});