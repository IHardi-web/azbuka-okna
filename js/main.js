$(document).ready(function () {
  $('.owl-carousel--header').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
    }
  });

  $('.owl-carousel--reviews').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: ['<span class="arrow arrow--left"></span>', '<span class="arrow arrow--right"></span>'],
    responsive: {
      0: {
        items: 1,
      },
      520: {
        items: 2,
      },
      798: {
        items: 3,
      },
      1032: {
        items: 4,
      },
    }
  });

  $('.owl-carousel--portfolio').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: ['<span class="arrow arrow--small arrow--left"></span>', '<span class="arrow arrow--small arrow--right"></span>'],
    responsive: {
      0: {
        items: 2,
      },
      992: {
        items: 4,
      },
      1000: {
        items: 5,
        nav: true,
      }
    }
  });
});
