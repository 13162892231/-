window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 30
    });
}
$(function () {
    $(".active").parent().show();
    $(".prchase_left_01 p").click(function () {
        $(".password").hide();
        $(this).parent().find(".password").show();
    });
});