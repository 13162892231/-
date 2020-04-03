$(function () {
    $(".active").parent().show();
    $(".personal_center_01 p").click(function () {
        $(".password").hide();
        $(this).parent().find(".password").show();
    });
    $("#orderssert").click(function () {
        $("#orderssert").attr("style", "background-color:#0ca549;color: #fff");
        $("#orders").attr("style", "background-color:#fff;color: #333;border-top-right-radius: 4px;border-top-left-radius: 4px;");
    });
    $("#orders").click(function () {
        $("#orderssert").attr("style", "background-color:#fff;color: #333");
        $("#orders").attr("style", "background-color:#0ca549;color: #fff;border-top-right-radius: 4px;border-top-left-radius: 4px;");
    });
    jQuery.jqtab = function (tabtit, tab_conbox, shijian) {
        $(tab_conbox).find("li").hide();
        $(tabtit).find("li:first").addClass("thistab").show();
        $(tab_conbox).find("li:first").show();
        $(tabtit).find("li").bind(shijian, function () {
            $(this).addClass("thistab").siblings("li").removeClass("thistab");
            var activeindex = $(tabtit).find("li").index(this);
            $(tab_conbox).children().eq(activeindex).show().siblings().hide();
            return false;
        });
    };
    /*调用方法如下：*/
    $.jqtab("#tabs", "#tab_conbox", "click");
    $.jqtab("#tabs2", "#tab_conbox2", "mouseenter");

});
