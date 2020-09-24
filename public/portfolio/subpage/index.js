function PopUp() {
    if ($(".mobile-pop-up").hasClass("active")) {
        $(".mobile-pop-up").css("right", "");
        $(".mobile-pop-up").removeClass("active");
    } else {
        $(".mobile-pop-up").css("right", "0");
        $(".mobile-pop-up").addClass("active");
    }
};

function Active() {
    if ($(".mobile-top-bar-menu").hasClass("active")) {
        $(".mobile-top-bar-menu").removeClass("active");
    } else {
        $(".mobile-top-bar-menu").addClass("active");
    }
};
$(function(){
})