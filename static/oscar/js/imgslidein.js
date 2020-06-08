$(document).scroll(function () {
    var $window = $(window);
    $('.slide-img').each(function () {
        var y = $(document).scrollTop();
        var t = $(this).parent().offset().top;
        if (y + ($window.height() / 3) > t) {

            $(this)
            .animate({
                left: 280
            }, 'slow');

        }
    });
});

$(document).scrollTop(function () {
    var $window = $(window);
    $('.slide-img').each(function () {
        var y = $(document).scrollTop();
        var t = $(this).parent().offset().top;
        if (y < t/2 ) {
            console.log(y + $window.height() - 100, t/2)
            $(this)
            .animate({
                left: 0
            }, 'slow');
        }
    });
});