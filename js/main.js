/* jshint browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, jQuery, document, Modernizr */

$(document).ready(function () {
  'use strict';

  var lookbook = $('#lookbook'),
    winHeight = $(window).height(),
    winWidth = $(window).width(),
    header = $('#header'),
    footer = $('#footer'),
    headerHeight = header.height(),
    footerHeight = footer.height(),
    lookbookHeight = ( winHeight - ( ( headerHeight + footerHeight ) * 2 ) ),
    lookbookWidth = ( ( lookbookHeight * 0.707 ) * 2 );

  lookbook.css({
    'margin-top': ( ( winHeight - lookbookHeight ) / 2 ),
    'margin-left': ( ( winWidth - lookbookWidth ) / 2 ),
  }).turn({
    height: lookbookHeight,
    width: lookbookWidth,
    autoCenter: true,
  });


  $(window).on('resize', function(){
    winHeight = $(window).height();
    winWidth = $(window).width();
    lookbookHeight = ( winHeight - ( ( headerHeight + footerHeight ) * 2 ) ),
    lookbookWidth = ( ( lookbookHeight * 0.707 ) * 2 );

    lookbook.css({
      'margin-top': ( ( winHeight - lookbookHeight ) / 2 ),
      'margin-left': ( ( winWidth - lookbookWidth ) / 2 ),
    }).turn('size', lookbookWidth, lookbookHeight);
  });

});
