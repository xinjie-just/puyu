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
    $("html, body").animate({scrollTop: 0}, 200); /* 持续时间为 200ms */
    return false;
});

// 当页面宽度不小于 1199px 时，二级菜单显示与隐藏
if (!($("body").outerWidth() < 1199)) {
    $("#nav ul li").hover(
        // 导航菜单二级列表缓慢下滑，600ms同css中时间一致
        function () {
            $(this).find("ul").slideDown(600);
        },function () {
            $(this).find("ul").slideUp(600);
        }
    );
}

// 当页面宽度小于 1199px 时，一级菜单显示与隐藏
if ($("body").outerWidth() < 1199) {
    $("#menuIcon").on("click", function(e){
        $("#navList").slideToggle(400);
        $(document).on("click", function(){
            $("#navList").slideUp();
        });
        e.stopPropagation();
    });
    $("#navList").on("click", function(e){
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

// 多行文本省略号
$(window).load = function () {
    ellipsis();
    setWidth();
};
$(window).resize = function () {
    ellipsis();
    setWidth();
};