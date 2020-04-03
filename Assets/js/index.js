$(function () {
    var banner = new Swiper('.banner', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 2000
    });
    var mySwiper = new Swiper('.carousel_four', {
        paginationClickable: true,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4
        //autoplay: 5000,
    });
    $('.swiper-button-prev').on('click', function (e) {
        e.preventDefault()
        mySwiper.swipePrev()
    });
    $('.swiper-button-next').on('click', function (e) {
        e.preventDefault()
        mySwiper.swipeNext()
    });

    //首页左导航
    $.selectnav(".commoditype");

});

jQuery.selectnav = function (sitemenu,name) {
    var args = {
        timeout: 500,
        closetimer: 0,
        ddmenuitem: 0
    };
    var ddmOpen = function() {
        ddmCanceltimer();
        ddmClose();
        args.ddmenuitem = $(this).find(".type_detail").show();
    };
    var ddmClose = function () {
        if (args.ddmenuitem) args.ddmenuitem.hide();
    };
    var ddmTimer = function () {
        args.closetimer = window.setTimeout(ddmClose, args.timeout);
    };
    var ddmSelect = function() {
        // $(this).parent().find('li a').removeClass("cur");
        // $(this).find('a').addClass("cur");
        // $(name).html($(this).html());
    };
    var ddmCanceltimer = function () {
        if (args.closetimer) {
            window.clearTimeout(args.closetimer);
            args.closetimer = null;
        }
    };
    $(sitemenu + '>div').bind('mouseover', ddmOpen);
    $(sitemenu + '>div').bind('mouseout', ddmTimer);
    document.onclick = ddmClose;
};