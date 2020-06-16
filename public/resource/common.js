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

$(function () {
    MobileSideBar__init();
    $('.mobile-top-bar-side-bt').click();
    $('.mobile-side-bar>ul>li:last-child').click();
});





// function mobileSideBarLi__toggle() {
//     var $mobileSideBarLi = $('.mobile-side-bar ul>li');

//     if ($mobileSideBarLi.hasClass('active')) {
//         $mobileSideBarLi.removeClass('active');
//     } 
    
//     else {
//         $mobileSideBarLi.addClass('active');
//     }
// }

// function mobileSideBarLi__init() {
//     $('.mobile-side-bar ul>li').click(mobileSideBarLi__toggle);
// }
// $(function () {
//     mobileSideBarLi__init();
// })