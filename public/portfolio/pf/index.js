
function Slider1__itemClick(el) {
    var $el = $(el);
    var url = $el.attr('data-img-url');
    var link = $el.attr('data-link-url');
    
    $('.phone-img-in').empty().append("<a href='" + link + "' target='_blank'><img src='" + url + "'></a>");
}

function watchIn() {
    $(".watch-in>div:last-child").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(".watch-in>div:last-child").removeClass("active");
            $(this).addClass("active");
        }
    });
}
function watchBt() {
    var watchBtn = $(".watch-name");
    watchBtn.click(function(){
    watchBtn.parent().find(".watch-circle").removeClass("active");
    $(this).parent().find(".watch-circle").addClass("active");
    })
}
function SlickSlider() {
    $(".page-5-pad-in > .slider").slick({
        dots: true,
        arrows:false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        cssEase: 'linear'
    });
}

function designClick() {
    $(".page-5-name>div:first-child").click(function () {
        if ($("#phone").hasClass("active")) {
            $("#phone").removeClass("active");
        } else {
            $(".watch-in>div:last-child").removeClass("active");
            $("#phone").addClass("active");
        }
    });
}
function ActiveOnVisible__init() {
    $(window).resize(ActiveOnVisible__initOffset);
    ActiveOnVisible__initOffset();

    $(window).scroll(ActiveOnVisible__checkAndActive);
    ActiveOnVisible__checkAndActive();
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

$(function(){
    watchBt();
    watchIn();
    SlickSlider();
    designClick();
    ActiveOnVisible__init();
   })
  
   

