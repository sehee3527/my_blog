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

$(function () {
    slider();
    news();
    TopBar_init();
    ActiveOnVisible__init();
});