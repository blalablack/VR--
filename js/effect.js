﻿/*******************初始化操作****************/
window.onload = function () {
    check_left();
    //loading去掉，count1出来
    $('#loading').css({'display': 'none'});
    $('#count1').css({'display': 'block'});
    //页面滚动条一滚动的事件
    function scroll() {
        //判断滚动到哪了
        check_left();
        //调用这两个函数，时刻监控是否出来
        right_effect($('.day_right'));
        left_effect($('.day_left'));
        //百万关卡的动画
        if (isShow($('#news_img'), 300)) {
            wordFloat($('.wordFloat3'), '170px', 1000);
            wordFloat($('.wordFloat4'), '200px', 1000);
        }
        //百万关卡的阅读详情动画
        if (isShow($('#news_img_xiang'), 140)) {
            objBlock($('#news_img_xiang'));
        }
        //阅读详情动画
        $('.content_all img').each(function () {
            if (isShow($(this), 100)) {
                objBlock($(this));
            }
        });
        //潮品的动画
        if (isShow($('#shop_word'), 350)) {
            $('#shop_word').css('margin-left', '0');
            $('#shop_img').css('margin-left', '0');
        }
        //本周极客动画(有两个一样的注意)
        if (isShow($('.plan2_top_ben'), 210)) {
            $('#count1 .plan2_top_ben').css('top', '100');
            $('#count1 .plan2_top_men').css('top', '200');
            $('#count1 .plan2_top_ren').css('opacity', '1');
        }
    }

    //60ms之内重复触发不执行，每隔150ms必定执行一次
    window.onscroll = youhua(scroll, 60, 150);
    changeNav.s1();

}

var youhua = function (fn, delay, mustRunDelay) {
    var timer = null;
    var t_start;
    return function () {
        var context = this, args = arguments, t_curr = +new Date();
        clearTimeout(timer);
        if (!t_start) {
            t_start = t_curr;
        }
        if (t_curr - t_start >= mustRunDelay) {
            fn.apply(context, args);
            t_start = t_curr;
        }
        else {
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    };
};

/******上浮字体******/
function wordFloat(aa, topgo, time) {
    aa.animate({top: topgo, opacity: 1}, time);
}

/*******透明字体*******/
function objBlock(aa) {
    aa.animate({opacity: 1}, 900);
}

//判断你是否到了要触发动画的点。
function isShow(aa, height) {
    var b = $(window).scrollTop(); //监控窗口已滚动的距离;
    var d = $(window).height();//浏览器窗口的高度*/
    var a = aa.offset().top;
    //height是用来调节大约什么时间动画
    //这里$(this).attr("style"),使用来限制上面只执行一次动画，
    //条件是在动画运行之前，元素都没有内联的style。
    if (b + d > a + height && !$(this).attr("style")) {
        return true;
    } else {
        return false;
    }
}

/*******************导航切换连带效果********************/
var changeNav = function () {
    var theme_img = $('#theme_img');
    var theme_word = $('#theme_word');
    var news2_title_hr = $('#news2_title_hr');
    var news2_title_word = $('#news2_title_word');
    var shop2_top_img = $('#shop2_top_img');
    var shop2_top_word = $('#shop2_top_word');
    var plan2_top_ben = $('.plan2_top_ben');
    var plan2_top_men = $('.plan2_top_men');
    var plan2_top_ren = $('.plan2_top_ren');
    var theme_img1 = $('#theme_img1');
    var theme_img2 = $('#theme_img2');

    //全部恢复
    function switch0() {
        theme_img.animate({'opacity': '0', 'left': '730'}, 0);
        theme_word.animate({'left': '300'}, 0);
        theme_img1.animate({'opacity': '0'}, 0);
        theme_img2.animate({'opacity': '0'}, 0);
        news2_title_hr.stop();
        news2_title_hr.animate({marginLeft: 80}, 0);
        news2_title_word.stop();
        news2_title_word.animate({marginTop: -50}, 0);
        shop2_top_img.stop();
        shop2_top_img.animate({marginTop: -80}, 0);
        shop2_top_word.stop();
        shop2_top_word.animate({opacity: 0}, 0);
        plan2_top_ben.animate({'top': '125'}, 0);
        plan2_top_men.animate({'top': '170'}, 0);
        plan2_top_ren.stop();
        plan2_top_ren.animate({'opacity': '0'}, 0);
    }

    //首页的加载动画
    function switch1() {
        setTimeout(function () {
            theme_img.css({'opacity': '1', 'left': '530'});
        }, 600);
        setTimeout(function () {
            theme_word.css('left', '200')
        }, 900);
        setTimeout(function () {
            theme_img1.css('opacity', '1');
            theme_img2.css('opacity', '1');
        }, 1200);
    }

    //产品资讯的加载动画
    function switch2() {
        setTimeout(function () {
            news2_title_hr.animate({marginLeft: 0}, 500);
        }, 600);
        setTimeout(function () {
            //弹珠落地的感觉
            news2_title_word.animate({marginTop: 0}, 600, 'easeOutBounce');
        }, 1000);
    }

    //潮品购的加载动画
    function switch3() {
        setTimeout(function () {
            //先到底在上来一点
            shop2_top_img.animate({marginTop: 0}, 1000, 'easeOutElastic');
        }, 600);
        setTimeout(function () {
            shop2_top_word.animate({opacity: 1}, 600);
        }, 1300);
    }

    //联系我们的加载动画
    function switch4() {
        setTimeout(function () {
            plan2_top_ben.css('top', '100');
        }, 600);
        setTimeout(function () {
            plan2_top_men.css('top', '200');
        }, 600);
        setTimeout(function () {
            plan2_top_ren.animate({'opacity': '1'}, 900);
        }, 900);
    }

    return {
        s1: switch1,
        s2: switch2,
        s3: switch3,
        s4: switch4,
        s0: switch0
    }
}()
/***********************************************左侧导航栏*************************************************/
/**************给非active的左边导航添加out，over事件***************/
var left_lead = $("#left_lead");
left_lead.delegate("div:not(.active)", "mouseenter", function () {
    $(this).css({"background": "rgb(255, 255, 255)", "color": "rgb(17,17,17)"});
});
left_lead.delegate("div:not(.active)", "mouseleave", function () {
    $(this).css({"background": "", "color": ""});
});
/************左边导航栏点击事件*************/
left_lead.delegate("div", "click", function () {
    var idName = $(this).attr("id");
    var body = $("body");
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    //防止滞留队列
    $(document.body).stop(true);
    //这里是消除over事件在html上的修改
    $(this).css({"background": "", "color": ""});
    //根据点击哪个div实行相应的动作
    if (idName == "z_theme") {
        body.animate({scrollTop: 0}, 1000, 'easeOutCirc', function () {
        });
    } else if (idName == "z_news") {
        body.animate({scrollTop: 600}, 1000, 'easeOutCirc', function () {
        });
    } else if (idName == "z_shop") {
        body.animate({scrollTop: 2000}, 1000, 'easeOutCirc', function () {
        });
    } else if (idName == "z_plan") {
        body.animate({scrollTop: 3100}, 1000, 'easeOutCirc', function () {
        });
    } else if (idName == "z_connect") {
        body.animate({scrollTop: 4500}, 1000, 'easeOutCirc', function () {
        });
    }
});
/************判断滚动到哪了*****************/
var z_theme = $("#z_theme");
var z_news = $("#z_news");
var z_shop = $("#z_shop");
var z_plan = $("#z_plan");
var z_connect = $("#z_connect");
function check_left() {
    var active = $("#left_lead .active");
    var body = $('body');
    //按照滚动距离判断到哪了
    if (body.scrollTop() >= 0 && $('body').scrollTop() < 400) {
        //去除上一个active的active
        active.removeClass("active");
        //为这一次的加active
        z_theme.addClass("active");
    }
    if (body.scrollTop() >= 400 && $('body').scrollTop() < 1800) {
        //同上
        active.removeClass("active");
        z_news.addClass("active");
    }
    if (body.scrollTop() >= 1800 && $('body').scrollTop() < 2700) {
        active.removeClass("active");
        z_shop.addClass("active");
    }
    if (body.scrollTop() >= 2700 && $('body').scrollTop() < 4000) {
        active.removeClass("active");
        z_plan.addClass("active");
    }
    if (body.scrollTop() >= 4000 && $('body').scrollTop() < 10000) {
        active.removeClass("active");
        z_connect.addClass("active");
        ;
    }
}

/***************页面到达到某个地方，左右回来******************/
function right_effect(aa) {
    var b = $(window).scrollTop(); //监控窗口已滚动的距离;
    var d = $(window).height();//浏览器窗口的高度*/
    aa.each(function () {
        a = $(this).offset().top;//元素相对于窗口的距离
        //b+d=a时元素刚要漏出，150是调整差不多元素出来一块在变化
        if (b > a + 150 - d && !$(this).attr("style")) {
            //左右回来
            $(this).animate({opacity: 1, right: 0}, 700);
        }

    });
}
function left_effect(aa) {
    var b = $(window).scrollTop(); //监控窗口已滚动的距离;
    var d = $(window).height();//浏览器窗口的高度*/
    aa.each(function () {
        a = $(this).offset().top;//元素相对于窗口的距离
        //取style属性，确保只执行一次show,没执行之前是没有style的
        if (b > a + 150 - d && !$(this).attr("style")) {
            $(this).animate({opacity: 1, left: 0}, 700);
        }
    });
}

//绑定每个标题的click事件
$("#top_lead").delegate("h3", "click", function () {
    //标题栏改变active
    var elem = $(this);
    var id = elem.attr("id");
    elem.siblings(".active").removeClass("active");
    elem.addClass("active");
    //内容变为透明
    var count = $("#count" + id.slice(id.length - 1))
    var arrow = $('#arrow');
    count.siblings().each(function () {
        $(this).stop(true, true);
        $(this).animate({"opacity": 0}, 400);
    });

    setTimeout(function () {
        //根据id判断到底是那个标题
        if (id == "lead1") {
            //恢复位置
            changeNav.s0();
            //动画展示
            changeNav.s1();
            //三角图标动画
            arrow.stop(true, true);
            arrow.animate({left: 10}, 400);
            var count1 = $('#count1');
            //其余消失
            count1.siblings().each(function () {
                $(this).css('display', 'none');
            });
            count1.stop(true, true);
            //count1出来
            count1.css('display', 'block');
            count1.animate({opacity: 1}, 400);
        } else if (id == "lead2") {
            //恢复位置
            changeNav.s0();
            //动画展示
            changeNav.s2();
            //三角图标动画
            arrow.stop(true, true);
            arrow.animate({left: 85}, 400);
            var count2 = $('#count2');
            //其余消失
            count2.stop(true, true);
            count2.siblings().each(function () {
                $(this).css('display', 'none');
            });
            //count2出来
            count2.css('display', 'block');
            count2.animate({opacity: 1}, 400);

        } else if (id == "lead3") {
            //同上
            //恢复位置
            changeNav.s0();
            changeNav.s3();
            arrow.stop(true, true);
            arrow.animate({left: 170}, 400);
            //count3出来
            var count3 = $('#count3');
            count3.stop(true, true);
            count3.siblings().each(function () {
                $(this).css('display', 'none');
            });

            count3.css('display', 'block');
            count3.animate({opacity: 1}, 400);
        } else if (id == "lead4") {
            //恢复位置
            changeNav.s0();
            changeNav.s4();
            arrow.stop(true, true);
            arrow.animate({left: 250}, 400);
            //count4出来
            var count4 = $('#count4');
            count4.stop(true, true);
            count4.siblings().each(function () {
                $(this).css('display', 'none');
            });

            count4.css('display', 'block');
            count4.animate({opacity: 1}, 400);
        } else {
            arrow.stop(true, true);
            arrow.animate({left: 340}, 400);
            //count5出来
            var count5 = $('#count5');
            count5.stop(true, true);
            count5.siblings().each(function () {
                $(this).css('display', 'none');
            });
            count5.css('display', 'block');
            count5.animate({opacity: 1}, 400);
        }
    }, 400);


});


/////////////////////////////////////////////////////滑动块///////////////////////////////////////////
//小图片进入
function l_imgb(elem) {
    //遮罩恢复
    elem.prev().animate({left: 0, top: 0}, 200);
    elem.prev().prev().stop(true);
    //小图片变大
    elem.prev().prev().animate({width: 350, left: -25, top: -18}, 300);
}
//小图片出去
function i_imgs(elem) {
    elem.prev().prev().stop(true);
    elem.prev().prev().animate({width: 303, left: 0, top: 0}, 300);
}
$('.div').mouseenter(function (e) {
    var x = parseFloat(e.offsetX);
    var y = parseFloat(e.offsetY) * 1.4;
    if (x <= y && x + y <= 303) {
        //左边进
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().css({'top': '0', 'left': '-302px'});
        l_imgb(elem);
    }
    if (x <= y && x + y > 303) {
        //下边进
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().css({'top': '213px', 'left': '0'});
        l_imgb(elem);
    }
    if (x > y && x + y < 303) {
        //上边进
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().css({'top': '-213px', 'left': '0'});
        l_imgb(elem);
    }
    if (x > y && x + y >= 303) {
        //右边进
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().css({'left': '302px'});
        l_imgb(elem);
    }
});
$('.div').mouseleave(function (e) {
    if (e.offsetX <= 0) {
        //左边出
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().animate({left: -302, top: 0}, 200);
        i_imgs(elem)
    }
    if (e.offsetX >= 302) {
        //右边出
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().animate({left: 302, top: 0}, 200);
        i_imgs(elem)
    }
    if (e.offsetY <= 0) {
        //上边出
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().animate({left: 0, top: -213}, 200);
        i_imgs(elem)
    }
    if (e.offsetY >= 213) {
        //下边出
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().animate({left: 0, top: 213}, 200);
        i_imgs(elem)
    }
});
//大图片的进出事件
$('.divs').mouseenter(function (e) {
    var x = parseFloat(e.offsetX) * 1.3;
    var y = parseFloat(e.offsetY);
    if (x <= y && x + y <= 464) {
        //左边进
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().css({'top': '0', 'left': '-357px'});
        elem.prev().animate({left: 0, top: 0}, 200);
    }
    if (x <= y && x + y > 464) {
        //下边进
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().css({'top': '468px', 'left': '0'});
        elem.prev().animate({left: 0, top: 0}, 200);
    }
    if (x > y && x + y < 464) {
        //上边进
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().css({'top': '-468px', 'left': '0'});
        elem.prev().animate({left: 0, top: 0}, 200);
    }
    if (x > y && x + y >= 464) {
        //右边进
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().css({'left': '357px'});
        elem.prev().animate({left: 0, top: 0}, 200);
    }
});
$('.divs').mouseleave(function (e) {
    if (e.offsetX <= 0) {
        //左边出
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().animate({left: -357, top: 0}, 200);
    }
    if (e.offsetX >= 357) {
        //右边出
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().animate({left: 357, top: 0}, 200);
    }
    if (e.offsetY <= 0) {
        //上边出
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().animate({left: 0, top: -468}, 200);
    }
    if (e.offsetY >= 468) {
        //下边出
        var elem = $(this);
        elem.prev().stop(true);
        elem.prev().animate({left: 0, top: 468}, 200);
    }
});

/****************************上部搜索框********************/
var input = $('.input');
var search11 = $('#search11');
input.focus(function () {
    search11.css({'top': '29', 'right': '68'});
});
input.blur(function () {
    search11.css({'top': '25', 'right': '70'});
});

/****************************按钮线圈**********************/
$('.lap_m_div').mouseenter(function () {
    var elem = $(this);
    elem.children('.lap_m_div10').attr({'class': 'lap_m_div1'});
    elem.children('.lap_m_div20').attr({'class': 'lap_m_div2'});
    elem.children('.lap_m_div30').attr({'class': 'lap_m_div3'});
    elem.children('.lap_m_div40').attr({'class': 'lap_m_div4'});
});
//全部恢复
$('.lap_m_div').mouseleave(function () {
    $('.lap_m_div1').attr({'class': 'lap_m_div10'});
    $('.lap_m_div2').attr({'class': 'lap_m_div20'});
    $('.lap_m_div3').attr({'class': 'lap_m_div30'});
    $('.lap_m_div4').attr({'class': 'lap_m_div40'});
});
$('.lap_s_div').mouseenter(function () {
    var elem = $(this);
    elem.children('.lap_s_div10').attr({'class': 'lap_s_div1'});
    elem.children('.lap_s_div20').attr({'class': 'lap_s_div2'});
    elem.children('.lap_s_div30').attr({'class': 'lap_s_div3'});
    elem.children('.lap_s_div40').attr({'class': 'lap_s_div4'});
});
$('.lap_s_div').mouseleave(function () {
    $('.lap_s_div1').attr({'class': 'lap_s_div10'});
    $('.lap_s_div2').attr({'class': 'lap_s_div20'});
    $('.lap_s_div3').attr({'class': 'lap_s_div30'});
    $('.lap_s_div4').attr({'class': 'lap_s_div40'});
});
$('.lap_l_div').mouseenter(function () {
    var elem = $(this);
    elem.children('.lap_l_div10').attr({'class': 'lap_l_div1'});
    elem.children('.lap_l_div20').attr({'class': 'lap_l_div2'});
    elem.children('.lap_l_div30').attr({'class': 'lap_l_div3'});
    elem.children('.lap_l_div40').attr({'class': 'lap_l_div4'});
});
$('.lap_l_div').mouseleave(function () {
    $('.lap_l_div1').attr({'class': 'lap_l_div10'});
    $('.lap_l_div2').attr({'class': 'lap_l_div20'});
    $('.lap_l_div3').attr({'class': 'lap_l_div30'});
    $('.lap_l_div4').attr({'class': 'lap_l_div40'});
});
$('.lap_l1_div').mouseenter(function () {
    var elem = $(this);
    elem.children('.lap_l1_div10').attr({'class': 'lap_l1_div1'});
    elem.children('.lap_l1_div20').attr({'class': 'lap_l1_div2'});
    elem.children('.lap_l1_div30').attr({'class': 'lap_l1_div3'});
    elem.children('.lap_l1_div40').attr({'class': 'lap_l1_div4'});
});
$('.lap_l1_div').mouseleave(function () {
    $('.lap_l1_div1').attr({'class': 'lap_l1_div10'});
    $('.lap_l1_div2').attr({'class': 'lap_l1_div20'});
    $('.lap_l1_div3').attr({'class': 'lap_l1_div30'});
    $('.lap_l1_div4').attr({'class': 'lap_l1_div40'});
});
/******************产品图移入移除字上浮*****************/
$('#shop2_middle_fenlei>div').mouseenter(function () {
    $(this).children('.fenlei_word0').attr({'class': 'fenlei_word1 trans5'});
});
$('#shop2_middle_fenlei>div').mouseleave(function () {
    $(this).children('.fenlei_word1').attr({'class': 'fenlei_word0 trans5'});
});

/****************************阅读详情*******************************/
//移入移除换图片
$('.day_left>h4>img,.day_right>h4>img').mouseenter(function () {
    $(this).attr('src', 'img/产品资讯/阅读详情2.png');
});
$('.day_left>h4>img,.day_right>h4>img').mouseleave(function () {
    $(this).attr('src', 'img/产品资讯/阅读详情.png');
});
//click事件
$('.day_left>h4>img,.day_right>h4>img,.lap_s_div').click(function () {
    $(this).next().children().attr('class', 'window trans5');
    $('.windowb10').attr('class', 'windowb windowb1 trans5');
    $('.windowb20').attr('class', 'windowb windowb2 trans5');
});
$('.windowb').click(function () {
    $('.windowb1').attr('class', 'windowb windowb10');
    $('.windowb2').attr('class', 'windowb windowb20');
    $('.window').attr('class', 'prewin');
});

/*********************logo的事件***********************/
function logoOne() {
    $('#title_img').css('opacity', '0');
    setTimeout(function () {
        $('#logo1').css('opacity', '1')
    }, 200);
    setTimeout(function () {
        $('#logo2').css('opacity', '1')
    }, 500);
    setTimeout(function () {
        $('#logo2').css('opacity', '0')
    }, 1000);
    setTimeout(function () {
        $('#logo1').css('opacity', '0')
    }, 1300);
}
var interval;
var logo0 = $('#logo0');
//over和out事件

logo0.mouseenter(function () {
    //先执行一次
    logoOne();
    //没2秒执行一次像呼吸灯一样
    interval = setInterval(logoOne, 2000);
});
logo0.mouseleave(function () {
    clearInterval(interval);
    $('#title_img').css('opacity', '1');
    $('#logo1').css('opacity', '0');
    $('#logo2').css('opacity', '0');
});
//click事件，和点击的首页功能一样
logo0.click(function () {
    changeNav.s0();
    changeNav.s1();
    var arrow = $('#arrow');
    arrow.stop(true, true);
    arrow.animate({left: 10}, 400);
    var count1 = $('#count1');
    //其余消失
    count1.siblings().each(function () {
        $(this).css('display', 'none');
    });
    count1.stop(true, true);
    //count1出来
    count1.css('display', 'block');
    count1.animate({opacity: 1}, 400);
});

/***************首页circle****************/
    //取得图片元素
var themeimg = document.getElementById("theme_img");
var themeimgs = themeimg.querySelectorAll("div");
$("#theme_circle").delegate("div", "click", function () {
    var elem = $(this);
    //清除以前的，变为现在的
    elem.siblings(".circled").removeClass();
    elem.addClass("circled");
    //判断点击的是那个原型，改变对应的图片的class，利用transition
    var id = elem.attr("id");
    if (id == "theme_circle_1") {
        $(themeimgs[0]).attr('class', 'theme_img_now trans7');
        $(themeimgs[1]).attr('class', 'theme_img_left trans7');
        $(themeimgs[2]).attr('class', 'theme_img_left trans7');
        $(themeimgs[3]).attr('class', 'theme_img_left trans7');
    } else if (id == "theme_circle_2") {
        $(themeimgs[0]).attr('class', 'theme_img_right trans7');
        $(themeimgs[1]).attr('class', 'theme_img_now trans7');
        $(themeimgs[2]).attr('class', 'theme_img_left trans7');
        $(themeimgs[3]).attr('class', 'theme_img_left trans7');
    } else if (id == "theme_circle_3") {
        $(themeimgs[0]).attr('class', 'theme_img_right trans7');
        $(themeimgs[1]).attr('class', 'theme_img_right trans7');
        $(themeimgs[2]).attr('class', 'theme_img_now trans7');
        $(themeimgs[3]).attr('class', 'theme_img_left trans7');
    } else {
        $(themeimgs[0]).attr('class', 'theme_img_right trans7');
        $(themeimgs[1]).attr('class', 'theme_img_right trans7');
        $(themeimgs[2]).attr('class', 'theme_img_right trans7');
        $(themeimgs[3]).attr('class', 'theme_img_now trans7');
    }
});

/**************backtop***************/
$('.backtop').click(function () {
    $('body').animate({scrollTop: 0}, 800, 'easeOutCirc');
});























