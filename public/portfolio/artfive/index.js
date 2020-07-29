function FullPage() {

  $(document).ready(function () {
    $('#fullpage').fullpage({
      scrollingSpeed:500,
      scrollBar: true,
      navigation: true,
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      onLeave: function (origin, destination, direction) {
        var $originVideo = $('#fullpage .section').eq(origin.index).find('video');
        var $destinationVideo = $('#fullpage .section').eq(destination.index).find('video');

        if ( $originVideo.length > 0 ) {
          var video = $originVideo.get(0);
          video.pause();
        }

        if ( $destinationVideo.length > 0 ) {
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
$(function () {
  FullPage();
});