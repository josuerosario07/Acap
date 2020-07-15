$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 130 && $(this).scrollTop() != 0) {
      $("#menu").addClass("header-fix");
    } else {
      $("#menu").removeClass("header-fix");
    }
  });

  $('#open').click(function() {
    $('#menu-responsive').toggleClass('open');
   });
   $('#close').click(function() {
    $('#menu-responsive').removeClass('open');
   });
});
