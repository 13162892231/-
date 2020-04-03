$(function () {
    //供应关系树状图
    //我的商品
    $(".all_tree>a").click(function () {
        var all = $(this).find("img").attr("src");
        $(".ul_tree_details").toggleClass("ul_tree_detailsanminal");
        if (all == "Assets/images/tree_open.png") {
            $(this).find("img").attr("src", "Assets/images/tree_close.png");
        }
        else {
            $(this).find("img").attr("src", "Assets/images/tree_open.png");
        }
    });
    //西药
    $(".tree_details>a").click(function () {
        var tree_details_cion = $(this).find("img").attr("src");
        $(this).parent().find('.ul_tree_detail').toggleClass("ul_tree_detailanm");
        if (tree_details_cion == "Assets/images/tree_open.png") {
            $(this).find("img").attr("src", "Assets/images/tree_close.png");
        }
        else {
            $(this).find("img").attr("src", "Assets/images/tree_open.png");
        }
    });
    //我的供应商
    $(".right>ul>li>a").click(function () {
        var right_cion = $(this).parent().find("img").attr("src");
        $(".ul_suppliersdetail").toggleClass("ul_suppliersdetailanminal");
        if (right_cion == "Assets/images/tree_open.png") {
            $(this).find("img").attr("src", "Assets/images/tree_close.png");
        }
        else {
            $(this).find("img").attr("src", "Assets/images/tree_open.png");
        }
    });
})