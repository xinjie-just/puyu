/**
 * Created by lixinjie on 2017/8/25.
 */
/*回到顶部*/
$(window).scroll(function() {
    if($(window).scrollTop() >= 100) {
        $("#toTop").fadeIn(); /* 当滑动到不小于 100px 时，回到顶部图标显示 */
    }else {
        $("#toTop").fadeOut(); /* 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏 */
    }
});
$("#toTop").click(function () {
    $("html, body").animate({scrollTop: 0}, 100); /* 持续时间为 100ms */
    return false;
});