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
