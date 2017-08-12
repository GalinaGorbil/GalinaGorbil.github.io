$(function () {




    /** Submenu show-hide*/

    $('.menu li').hover(function () {
        $(this).children('ul').slideDown(500);
        $(this).children('.submenu a').css('color', '#00CED1');
        $(this).children('.submenu li').css('background', 'yellow');
    }, function () {
        $(this).children('ul').slideUp(500);
        $(this).children('.submenu a').css('color', '#000');
    });

});

jQuery(function(){
jQuery(".jcarousel-wrapper").jCarouselLite({
btnNext: ".next",
btnPrev: ".prev"

});
});
