/* jshint browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, jQuery, document, Modernizr */

$(document).ready(function () {
  'use strict';

  var lookbook = $('#lookbook'),
    winHeight = $(window).height(),
    winWidth = $(window).width(),
    header = $('#header'),
    footer = $('#footer'),
    headerHeight = header.outerHeight(true),
    footerHeight = footer.outerHeight(true),
    lookbookHeight,
    lookbookWidth;

  if (winWidth > winHeight) {
    lookbookHeight = ( winHeight - ( headerHeight + footerHeight ) );
    lookbookWidth = ( ( lookbookHeight * 0.707 ) * 2 );
  } else {
    lookbookWidth = ( winWidth * 0.9 );
    lookbookHeight = ( lookbookWidth * 1.414 ) / 2;
  }

  lookbook.css({
    'margin-top': ( ( winHeight - lookbookHeight ) / 2 ),
    'margin-left': ( ( winWidth - lookbookWidth ) / 2 ),
  }).turn({
    height: lookbookHeight,
    width: lookbookWidth,
    autoCenter: false,
    gradients: true,
  });

  $(window).on('resize', function(){
    winHeight = $(window).height();
    winWidth = $(window).width();
    headerHeight = header.outerHeight(true);
    footerHeight = footer.outerHeight(true);

    if (winWidth > winHeight) {
      lookbookHeight = ( winHeight - ( headerHeight + footerHeight ) );
      lookbookWidth = ( ( lookbookHeight * 0.707 ) * 2 );
    } else {
      lookbookWidth = ( winWidth * 0.9 );
      lookbookHeight = ( lookbookWidth * 1.414 ) / 2;
    }

    lookbook.css({
      'margin-top': ( ( winHeight - lookbookHeight ) / 2 ),
      'margin-left': ( ( winWidth - lookbookWidth ) / 2 ),
    }).turn('size', lookbookWidth, lookbookHeight);
  });

});
