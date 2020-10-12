function mobileTopBarMenuClick() {
    var $mobileTopBarBox = $('.mobile-top-bar-box');

    $('.mobile-top-bar-box > .mobile-top-bar-menu').click(function () {
        if ($mobileTopBarBox.hasClass('active')) {
            $mobileTopBarBox.removeClass('active')
        } else {
            $mobileTopBarBox.addClass('active')
        }
    });
};

function footerButton() {
    var $footerBtton = $('#footer>ul>li:last-child>ul')
    $('#footer>ul>li:last-child>button').click(function () {
        if ($footerBtton.hasClass('active')) {
            $footerBtton.removeClass('active')
        } else {
            $footerBtton.addClass('active')
        }
    })
}
$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});


$(function () {
    footerButton();
    mobileTopBarMenuClick();
});