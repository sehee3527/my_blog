var $window = $(window);
var $html = $('html');

function SlickSlider() {
    $(".slider-box > .slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });
    $(".inner > .slider").slick({
        infinite: true,
        slidesToShow: 3,
        swipe: false,
        dots: false,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    setTimeout(function () {
        $(".slider-box").addClass('ani-on');
    }, 10);
}

function ScrollSection__updateSection() {
    setTimeout(function () {
        $('[data-scroll-section]').each(function (index, el) {
            // 날아다니는 물체
            var $fo = $(el);
            var $target = $($fo.attr('data-scroll-section'));

            var topStart = $target.offset().top;
            var topEnd = topStart + $target.height() - $fo.height();

            $fo.data('data-scroll-section-top-start', topStart);
            $fo.data('data-scroll-section-top-end', topEnd);

            ScrollSection__updateTop($fo, $target);
        });
    }, 1000);
}

function ScrollSection__updateTop($fo, $target) {
    var topStart = $fo.data('data-scroll-section-top-start');
    var topEnd = $fo.data('data-scroll-section-top-end');

    console.log("topStart : " + topStart);
    console.log("topEnd : " + topEnd);

    var scrollTop = $window.scrollTop();

    var newTop;

    if (scrollTop < topStart) {
        newTop = topStart;
    } else if (scrollTop >= topStart && scrollTop <= topEnd) {
        newTop = scrollTop;
    } else {
        newTop = topEnd;
    }

    $fo.css('top', newTop);
}

function ScrollSection__init() {
    ScrollSection__updateSection();

    $('[data-scroll-section]').each(function (index, el) {
        // 날아다니는 물체
        var $fo = $(el);
        var $target = $($fo.attr('data-scroll-section'));

        $window.scroll(function () {
            ScrollSection__updateTop($fo, $target);
        });
    });

    $(window).resize(ScrollSection__updateSection);
}

function scroller() {
    $("#scroller").simplyScroll({
        pauseOnHover: false,
        speed: 2.5
    });
}


function TopBar_init() {
  
  var $topBar =  $('.top-bar');
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if ( scrollTop > 111 ) {
      $html.addClass('top-bar-fly');
    }
    else {
      $html.removeClass('top-bar-fly');
    }
  });
}


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
    SlickSlider();
    setTimeout(function () {
        ScrollSection__init();
    }, 1000);
    scroller();
    TopBar_init()
    TabBox__init();
    ActiveOnVisible__init();
});