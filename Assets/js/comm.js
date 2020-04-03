$(function () {
    
    $(".exhibitionbar .shopping").click(function () {
        $(".shopquick").toggleClass("shopquickanminal");
        $(".exhibitionbar").toggleClass("exhibitionbar_cur");
        var jian = $(".divNumber ");
        var jia = $(".divNumber");
        jian.delegate(".reduction", "click", function () {
            if ($(this).next("label").text() != "1") {
                $(this).next("label").text(parseInt($(this).next("label").text()) - 1);
            }
        });
        jia.delegate(".add", "click", function () {
            $(this).prev("label").text(parseInt($(this).prev("label").text()) + 1);
        });


        $(".shopquickanminal").css({"overflow": "auto"});
        $(".shopquick").css({"overflow": "auto"});
    });


    //城市列表
    $.selectcountry(".country","#sitename");

});

jQuery.selectcountry = function (sitemenu,name) {
    var args = {
        timeout: 500,
        closetimer: 0,
        ddmenuitem: 0
    };
    var ddmOpen = function() {
        ddmCanceltimer();
        ddmClose();
        args.ddmenuitem = $(this).addClass("countrycur");
    };
    var ddmClose = function () {
        if (args.ddmenuitem) args.ddmenuitem.removeClass("countrycur");
    };
    var ddmTimer = function () {
        args.closetimer = window.setTimeout(ddmClose, args.timeout);
    };
    var ddmSelect = function() {
        $(this).parent().find('li a').removeClass("cur");
        $(this).find('a').addClass("cur");
        $(name).html($(this).html());
    };
    var ddmCanceltimer = function () {
        if (args.closetimer) {
            window.clearTimeout(args.closetimer);
            args.closetimer = null;
        }
    };
    
    $(sitemenu).bind('mouseover', ddmOpen);
    $(sitemenu).bind('mouseout', ddmTimer);
    $(sitemenu + ' li').bind('click', ddmSelect);
    document.onclick = ddmClose;
};


