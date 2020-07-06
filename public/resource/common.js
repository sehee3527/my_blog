function MobileSideBar__toggle() {
    var $btn = $('.mobile-top-bar-side-bt');
    var $mobileSideBar = $('.mobile-side-bar');
    var $mobileSideBarBg = $('.mobile-side-bar-bg');
    var $htmlActive = $('html')

    if ($btn.hasClass('active')) {
        $btn.removeClass('active');
        $mobileSideBar.removeClass('active');
        $mobileSideBarBg.removeClass('active');
        $htmlActive.removeClass('active');
    } else {
        $btn.addClass('active');
        $mobileSideBar.addClass('active');
        $mobileSideBarBg.addClass('active');
        $htmlActive.addClass('active');
    }
}

function MobileSideBar__init() {
    $('.mobile-top-bar-side-bt , .mobile-side-bar-bg').click(MobileSideBar__toggle);

    $('.mobile-side-bar ul>li').click(function(e){
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
        e.stopPropagation();
    });
}

function siedBarClick() {
    $('.main-bn > .side-bars > .bar').click(function() {
        var $clickedBtn = $(this);
        var $slider = $clickedBtn.closest('.main-bn');
        
        $clickedBtn.addClass('active');
        $clickedBtn.siblings('.active').removeClass('active');
        var no = $clickedBtn.index() + 1;
        var $currnet = $slider.find('.slider > .active');
        var $post = $slider.find('.slider > div:nth-child(' + no + ')');

        $currnet.removeClass('active');
        $post.addClass('active');
    });
};

$(function () {
    MobileSideBar__init();
    siedBarClick();
    $('.mobile-top-bar-side-bt').click();
    $('.mobile-side-bar>ul>li:last-child').click();
    $('.start').addClass('active');
    $('.main-bn>.main-box>.yellow').addClass('active');
    $('.main-bn>.main-box>.blue').addClass('active');
    $('.main-bn>.bn-name').addClass('active');
});

setInterval(function() {
    var $next = $('.main-bn > .side-bars > .bar.active').next();

    if ( $next.length == 0 ) {
        $next = $('.main-bn > .side-bars > .bar:nth-child(1)');
    }

    $next.click();
}, 7000);

