$(document).ready(function() {

    // Make Header Full Screen

    $('.header-content').css('padding-top', ($('header').height() - $('.header-content').height()) / 2 - 80);

    // Years Of Cars

    for(i = 2010; i < 2019; i++) {
        const option = '<option id ="year" value="' + i + '">' + i + '</option>';
        $('#years').append(option);
    }

    // Slick Plugin 

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
});