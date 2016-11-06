// TOGGLE NAV========================
$(function() {
  var $navToggle = $('.toggle-nav');
  var $mainNav = $('.mainnav ul');
  var $window = $(window);
  var mobileBreakpoint = 500;

  $navToggle.on('click', function() {
    $mainNav.slideToggle();
    $navToggle.toggleClass('active');
  });

  $window.on('resize', function() {
    if ($window.width() > mobileBreakpoint ) {
      $mainNav.removeAttr('style');
      $navToggle.removeClass('active');
    }
  });
});


// LINEUP CAROUSEL=====================
$('.carousel').slick({
  nextArrow: '<i class="fa  fa-angle-right"></i>',
  prevArrow: '<i class="fa  fa-angle-left"></i>',
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
