var $html = $('html');

function FullPage() {

  $(document).ready(function () {
    $('#fullpage').fullpage({
      scrollingSpeed: 500,
      navigation: true,
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      onLeave: function (origin, destination, direction) {
        var $originVideo = $('#fullpage .section').eq(origin.index).find('video');
        var $destinationVideo = $('#fullpage .section').eq(destination.index).find('video');
        $html.attr('data-fullpage-index', destination.index);
        if ($originVideo.length > 0) {
          var video = $originVideo.get(0);
          video.pause();
        }

        if ($destinationVideo.length > 0) {
          var video = $destinationVideo.get(0);
          // video.currentTime = 0;
          video.play();
        };

      }
      //   슬라이드 직후에 실행
      // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){

      // }
    });
  });
}

var Popup = function () {
  if ($(".pop-up").hasClass("active")) {
    $(".pop-up").css("top", "");
    $(".pop-up").removeClass("active");
    $(".top-bar").removeClass("active");
  } else {
    $(".pop-up").css("top", "0");
    $(".pop-up").addClass("active");
    $(".top-bar").addClass("active");
  }
};

function slickSlider() {
  $(document).ready(function () {
    $('.slick-slider').slick({});
  });
}


function count() {

  $(document).ready(function () {

    $('.counter').counterUp({
      delay: 10,
      time: 5000
    });
  });
}


$(function () {
  FullPage();
  slickSlider();
  count();
});