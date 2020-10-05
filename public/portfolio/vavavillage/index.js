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
        dots: false
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
    }, 500);
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



$(function () {
    SlickSlider();
    setTimeout(function () {
        ScrollSection__init();
    }, 1000);
    scroller();
    TopBar_init()
});