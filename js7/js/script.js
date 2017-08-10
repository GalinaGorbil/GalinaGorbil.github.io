$(function () {
    var $liElem = $('li'),
        $pElem = $('p'),
        $pElemFirst = $('.first'),
        $pElemSecond = $('.second'),
        $pElemThird = $('.third'),
        $liElemFirst = $('.active_li'),
        $liElemSecond = $('.li_second'),
        $liElemThird = $('.li_third');


    $liElem.on('click', function (e) {
        e.preventDefault();
        $liElem.removeClass('active_li');
        $(this).addClass('active_li');
        $pElem.css('display', 'none');
    });


    $liElemFirst.on('click', function () {
        $pElemFirst.slideToggle();
    });

    $liElemSecond.on('click', function () {
        $pElemSecond.slideToggle();
    });

    $liElemThird.on('click', function () {
        $pElemThird.slideToggle();
    });


});
