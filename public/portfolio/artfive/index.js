function FullPage(){    
    
    $(document).ready(function() {
        $('#fullpage').fullpage({
          scrollBar: true,
          navigation: true,
        //   슬라이드 직후에 실행
          afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){

          }
        });
    });
}

$ (function() {
    FullPage();
});