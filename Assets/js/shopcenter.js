//shopcenter
$(function () {
    $(".active").parent().show();
    $(".lidiv").click(function () {
        $(".lichild").hide();
        $(this).parent().find(".lichild").show();
    });
});
