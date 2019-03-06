'use strict'

$(function() {
  var header = $(".it-nav-wrapper");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      header.removeClass('no-resize').addClass('resize');
    } else {
      header.removeClass('resize').addClass('no-resize');
    }
  });
});
