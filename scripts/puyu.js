/**
 * Created by lixinjie on 2017/8/25.
 */
/*回到顶部*/
$(window).scroll(function() {
    if($(window).scrollTop() >= 200) {
        $("#toTop").fadeIn(); /* 当滑动到不小于 200px 时，回到顶部图标显示 */
    }else {
        $("#toTop").fadeOut(); /* 当滑动到小于(页面被卷去的高度)200px 时，回到顶部图标隐藏 */
    }
});
$("#toTop").click(function () {
    $("html, body").animate({scrollTop: 0}, 400); /* 持续时间为 400ms */
    return false;
});

// 菜单的显示与隐藏
function displayMenu() {
    if (!($(window).outerWidth() > 1199)) {
        $("#nav > ul").css("display", "none");
    }else {
        $("#nav > ul").css("display", "block");
    }
}

// 多行文本省略号
function ellipsis() {
    $(".multi-line-ellipsis").dotdotdot();
}

// 重新加载页面时
$(function () {
    firstGrade();
    secondGrade();
    displayMenu();
    ellipsis()
});
//页面缩放时
$(window).resize(function () {
    secondGrade();
    displayMenu();
    ellipsis();
});

// 当页面宽度不小于 1200px 时，二级菜单显示与隐藏
function secondGrade() {
    if (!($(window).outerWidth() < 1200)) {
        $("#nav ul li").hover(
            // 导航菜单二级列表缓慢下滑，600ms同css中时间一致
            function () {
                $(this).find("ul").slideDown(600);
            },function () {
                $(this).find("ul").slideUp(600);
            }
        );
    }
}

// 当页面宽度小于 1200px 时，一级菜单显示与隐藏
function firstGrade() {
    $("#menuIcon").click(function (e) {
        if ($("#navList").css("display") === "block") {
            $("#navList").slideUp(400);
            $(this).find("i").removeClass("icon-close").addClass("icon-menu");
        } else {
            $("#navList").slideDown(400);
            $(this).find("i").removeClass("icon-menu").addClass("icon-close");
        }
        e.stopPropagation();
    });
    $(document).click(function () {
        $("#navList").slideUp(400);
        $("#menuIcon").find("i").removeClass("icon-close").addClass("icon-menu");
    });
    $("#navList").click(function (e) {
        e.stopPropagation();
    });
}


// 微信二维码的显示与影藏
$("#weixinIcon").hover(
    function(){
        $(this).css("color", "#fff");
        $("#weixinImg").slideDown(400);
    },function() {
        $(this).css("color", "#909090");
        $("#weixinImg").slideUp(400);
    }
);

// IE浏览器对替换内容(img,video等)object-fit不兼容的处理
/*objectFit.polyfill({
    selector: ".object-fit", // this can be any CSS selector
    fittype: "cover", // either contain, cover, fill or none
    disableCrossDomain: "true" // either 'true' or 'false' to not parse external CSS files.
});*/

// IE浏览器对替换内容(img,video等)object-fit不兼容的处理
document.addEventListener('DOMContentLoaded', function () {
    objectFit.polyfill({
        selector: '.object-fit',
        fittype: 'cover'
    });
});


// 轮播图自定义配置
$(".carousel").carousel({
    interval: 2000
});

// 为文章中的图片设置一些限制
if ($("article img[width]")) {
    $("article img").removeAttr("width");
}
if ($("article img[height]")) {
    $("article img").removeAttr("height");
}
$("article img").css({
    display: "block",
    maxWidth: "100%",
    height: "auto",
    margin: "15px auto"
});