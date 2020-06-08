$(document).scroll(function () {
    var $logo = $(".logo");
    var y = $(document).scrollTop();
    if (y > 170) {
        $logo.height(50);
    }
    if (y <= 170) {
        $logo.height(100);
    }
});