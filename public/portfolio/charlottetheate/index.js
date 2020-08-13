$(document).ready(function () {
    $(".slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    //   autoplay: true,
    //   autoplaySpeed: 5000,
      arrows: false
    });
  });
  
  $(document).ready(function () {
    $(".musical-slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      arrows: true,
      slidesToScroll: 1
    });
  });
  