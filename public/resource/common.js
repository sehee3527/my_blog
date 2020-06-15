function MobileSideBar__toggle() {
    var $btn = $('.mobile-top-bar-side-bt');
    var $mobileSideBar = $('.mobile-side-bar');
    var $mobileSideBarBg = $('.mobile-side-bar-bg');
    var $htmlActive = $('html')

    if ( $btn.hasClass('active') ) {
        $btn.removeClass('active');
        $mobileSideBar.removeClass('active');
        $mobileSideBarBg.removeClass('active');
        $htmlActive.removeClass('active');
    }
    else {
        $btn.addClass('active');
        $mobileSideBar.addClass('active');
        $mobileSideBarBg.addClass('active');
        $htmlActive.addClass('active');
    }
}

function MobileSideBar__init() {
    $('.mobile-top-bar-side-bt , .mobile-side-bar-bg').click(MobileSideBar__toggle);
}

$(function() {
    MobileSideBar__init();
});