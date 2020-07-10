function mobileTopBarMenuClick() {
    var $mobileTopBarBox = $('.mobile-top-bar-box');

    $('.mobile-top-bar-box > .mobile-top-bar-menu').click(function() {
        if ($mobileTopBarBox.hasClass('active')){
            $mobileTopBarBox.removeClass('active')
        }
        else{
            $mobileTopBarBox.addClass('active')
        }
    });
};

$(function () {
    mobileTopBarMenuClick();
});