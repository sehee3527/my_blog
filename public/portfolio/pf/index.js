
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



$(function(){
    watchBt();
    watchIn();
    SlickSlider();
   })
  
   

