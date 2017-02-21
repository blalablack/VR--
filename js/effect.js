﻿////////////////////////////////////////////////////////////////////////////////////////////
var dd = 0;
var interval;
//---------------------------------------------------------------------------------------------

///////////////////////////////////////////////初始化操作/////////////////////////////////////////
window.onload = function () {
    check_left();
    $('#loading').css({'display': 'none'});
    $('#count1').css({'display': 'block'});
    $('body').css('overflow-y', '');
	//页面滚动条一滚动的事件
    window.onscroll = function () {
        check_left();
        right_effect($('.day_right'));
        left_effect($('.day_left'));
        if (youGo($('#news_img'))) {
            wordFloat($('.wordFloat3'), '170px', 1000);
            wordFloat($('.wordFloat4'), '200px', 1000);
        }
        if (youGo($('#news_img_xiang'))) {
            objBlock($('#news_img_xiang'));
        } else {
            objHidden($('#news_img_xiang'))
        }
        $('.content_all img').each(function () {
            if (youGo($(this))) {
                objBlock($(this));
            } else {
                objHidden($(this));
            }
        });
        if (youGo($('#shop_word'))) {
            $('#shop_word').css('margin-left', '0');
            $('#shop_img').css('margin-left', '0');
        }
        if (youGo($('.plan2_top_ben'))) {
            $('.plan2_top_ben').css('top', '100');
            $('.plan2_top_men').css('top', '200');
            $('.plan2_top_ren').css('opacity', '1');
        }
    }
    switch1();
}
//----------------------------------------------------------------------------------------------

////////////////////////////////////////////导航切换连带效果//////////////////////////////////////
function switch1() {
    setTimeout(function () {
        $('#theme_img').css({'opacity': '1', 'left': '530'});
    }, 600);
    setTimeout(function () {
        $('#theme_word').css('left', '200')
    }, 900);
    setTimeout(function () {
        $('#theme_img1,#theme_img2').css('opacity', '1')
    }, 1200);
}
function switch2() {
    setTimeout(function () {
        $('#news2_title_hr').animate({marginLeft: 0}, 500);
    }, 600);
    setTimeout(function () {
        $('#news2_title_word').animate({marginTop: 0}, 600, 'easeOutBounce');
    }, 1000);
}
function switch3() {
    setTimeout(function () {
        $('#shop2_top_img').animate({marginTop: 0}, 1000, 'easeOutElastic');
    }, 600);
    setTimeout(function () {
        $('#shop2_top_word').animate({opacity: 1}, 600);
    }, 1300);
}
function switch4() {
    setTimeout(function () {
        $('.plan2_top_ben').css('top', '100');
    }, 600);
    setTimeout(function () {
        $('.plan2_top_men').css('top', '200');
    }, 600);
    setTimeout(function () {
        $('.plan2_top_ren').animate({'opacity': '1'}, 900);
    }, 900);
}
function switch0() {
    $('#theme_img').animate({'opacity': '0', 'left': '730'}, 0);
    $('#theme_word').animate({'left': '300'}, 0);
    $('#theme_img1,#theme_img2').animate({'opacity': '0'}, 0);
    $('#news2_title_hr').stop();
    $('#news2_title_hr').animate({marginLeft: 80}, 0);
    $('#news2_title_word').stop();
    $('#news2_title_word').animate({marginTop: -50}, 0);
    $('#shop2_top_img').stop();
    $('#shop2_top_img').animate({marginTop: -80}, 0);
    $('#shop2_top_word').stop();
    $('#shop2_top_word').animate({opacity: 0}, 0);
    $('.plan2_top_ben').animate({'top': '125'}, 0);
    $('.plan2_top_men').animate({'top': '170'}, 0);
    $('.plan2_top_ren').stop();
    $('.plan2_top_ren').animate({'opacity': '0'}, 0);
}
//---------------------------------------------------------------------------------------------

/////////////////////////////////////////////////上浮字体///////////////////////////////////////
function wordFloat(aa, topgo, time) {
    aa.animate({top: topgo, opacity: 1}, time);
}
//---------------------------------------------------------------------------------------------

/////////////////////////////////////////////////透明显示///////////////////////////////////////
function objBlock(aa) {
    aa.animate({opacity: 1}, 900);
}
//---------------------------------------------------------------------------------------------

/////////////////////////////////////////////////透明over///////////////////////////////////////
function objHidden(aa) {
    aa.stop(true, true);
    aa.animate({opacity: 0}, 0);
}
//---------------------------------------------------------------------------------------------

/////////////////////////////////////////////////判断到你这儿了//////////////////////////////////
function youGo(aa) {
    var cc = aa.offset().top - $(window).scrollTop() + window.screenTop - 60;
    if (cc <= 650 + chazhi && cc > -300) {
        return true;
    } else {
        return false;
    }
}
//---------------------------------------------------------------------------------------------

////////////////////////////////////////////左侧导航栏//////////////////////////////////////////

/**************给非active的左边导航添加out，over事件***************/
$("#left_lead").delegate("div:not(.active)","mouseenter",function(){
	$(this).css({"background":"rgb(255, 255, 255)","color":"rgb(17,17,17)"});
});
$("#left_lead").delegate("div:not(.active)","mouseleave",function(){
	$(this).css({"background":"","color":""});
});
/************左边导航栏点击事件*************/
$("#left_lead").delegate("div","click",function(){
	var idName=$(this).attr("id");
	var body=$("body");
	$(this).siblings(".active").removeClass("active");
	$(this).addClass("active");
	//防止滞留队列
	$(document.body).stop(true);
	//这里是消除over事件在html上的修改
	$(this).css({"background":"","color":""});
	//根据点击哪个div实行相应的动作
	if(idName=="z_theme"){
		body.animate({scrollTop: 0}, 1000, 'easeOutCirc', function () {
		});
	}else if(idName=="z_news"){
		body.animate({scrollTop: 600}, 1000, 'easeOutCirc', function () {
		});
	}else if(idName=="z_shop"){
		body.animate({scrollTop: 2000}, 1000, 'easeOutCirc', function () {
		});
	}else if(idName=="z_plan"){
		body.animate({scrollTop: 3100}, 1000, 'easeOutCirc', function () {
		});
	}else if(idName=="z_connect"){
		body.animate({scrollTop: 4500}, 1000, 'easeOutCirc', function () {	
		});
	}
});
/************判断滚动到哪了*****************/
var z_theme=$("#z_theme");
var z_news=$("#z_news");
var z_shop=$("#z_shop");
var z_plan=$("#z_plan");
var z_connect=$("#z_connect");
function check_left() {
	var active=$("#left_lead .active");
	//按照滚动距离判断到哪了
    if ($('body').scrollTop() >= 0 && $('body').scrollTop() < 400) {
		//去除上一个active的active
		active.removeClass("active");
		//为这一次的加active
        z_theme.addClass("active");
    }
    if ($('body').scrollTop() >= 400 && $('body').scrollTop() < 1800) {
		//同上
        active.removeClass("active");
        z_news.addClass("active");
    }
    if ($('body').scrollTop() >= 1800 && $('body').scrollTop() < 2700) {
        active.removeClass("active");
        z_shop.addClass("active");
    }
    if ($('body').scrollTop() >= 2700 && $('body').scrollTop() < 4000) {
        active.removeClass("active");
        z_plan.addClass("active");
    }
    if ($('body').scrollTop() >= 4000 && $('body').scrollTop() < 10000) {
        active.removeClass("active");
        z_connect.addClass("active");;
    }
}



function right_show(aa) {
    aa.animate({opacity: 1, right: 0}, 700);
}
function right_back(aa) {
    aa.stop(true, true);
    aa.animate({opacity: 0, right: -30}, 100);
}
function left_back(aa) {
    aa.stop(true, true);
    aa.animate({opacity: 0, left: -30}, 100);
}
function left_show(aa) {
    aa.animate({opacity: 1, left: 0}, 700);
}
var chazhi=window.screen.height-768;

function right_effect(aa) {
    aa.each(function () {
		
        /*var cc = $(this).offset().top - $(window).scrollTop() + window.screenTop - 60;
        if (cc <= 650 + chazhi && cc > -350) {
            right_show($(this));
        } else if (cc > 650 + chazhi || cc < -350) {
            right_back($(this));
        }*/
		a=$(this).offset().top;//元素相对于窗口的距离
		b=$(window).scrollTop(); //监控窗口已滚动的距离;
		d=$(window).height();//浏览器窗口的高度*/
		//b+d=a时元素刚要漏出，150是调整差不多元素出来一块在变化
		console.log(a);
		if(b>a+150-d){
			right_show($(this));
			
		}else{
			right_back($(this));
			
		}
		
    });
}
function left_effect(aa) {
    aa.each(function () {
        /*var cc = $(this).offset().top - $(window).scrollTop();
        if (cc <= 650 + chazhi && cc > -350) {
            left_show($(this));
        } else if (cc > 650 + chazhi || cc < -350) {
            left_back($(this));
        }*/
		a=$(this).offset().top;//元素相对于窗口的距离
		b=$(window).scrollTop(); //监控窗口已滚动的距离;
		c=$(document).height();//整个文档的高度
		d=$(window).height();//浏览器窗口的高度*/
		
		if(b>a+150-d){
			left_show($(this));
			/***************************back事件***********************************/
		}else{
			left_back($(this));
			
		}
    });
}




//-----------------------------------------------------------------------------------------


//////////////////////////////////////固定导航栏////////////////////////////////////////////
var lead1 = 0;
var lead2 = 0;
var lead3 = 0;
var lead4 = 0;
var lead5 = 0;
$('#lead1').css('color', '#08a6cd');
$('#top_lead h3').mouseover(function () {
    $(this).css('color', '#fff');
});
$('#lead1').mouseover(function () {
    if (lead1 == 1) {
        $('#lead1').css('color', '#08a6cd')
    }
});
$('#lead2').mouseover(function () {
    if (lead2 == 1) {
        $('#lead2').css('color', '#08a6cd')
    }
});
$('#lead3').mouseover(function () {
    if (lead3 == 1) {
        $('#lead3').css('color', '#08a6cd')
    }
});
$('#lead4').mouseover(function () {
    if (lead4 == 1) {
        $('#lead4').css('color', '#08a6cd')
    }
});
$('#lead5').mouseover(function () {
    if (lead5 == 1) {
        $('#lead5').css('color', '#08a6cd')
    }
});
$('#top_lead h3').mouseout(function () {
    $(this).css('color', '#ddd');
});
$('#lead1').mouseout(function () {
    if (lead1 == 1) {
        $('#lead1').css('color', '#08a6cd')
    }
});
$('#lead2').mouseout(function () {
    if (lead2 == 1) {
        $('#lead2').css('color', '#08a6cd')
    }
});
$('#lead3').mouseout(function () {
    if (lead3 == 1) {
        $('#lead3').css('color', '#08a6cd')
    }
});
$('#lead4').mouseout(function () {
    if (lead4 == 1) {
        $('#lead4').css('color', '#08a6cd')
    }
});
$('#lead5').mouseout(function () {
    if (lead5 == 1) {
        $('#lead5').css('color', '#08a6cd')
    }
});
$('#top_lead h3').click(function () {
    $('#top_lead h3').css('color', '#ddd');
    $(this).css('color', '#08a6cd');
});
function lead1Click() {
    lead1 = 1;
    lead2 = 0;
    lead3 = 0;
    lead4 = 0;
    lead5 = 0;
    switch0();
    switch1();
    $('#arrow').stop();
    $('#arrow').animate({left: 10}, 400);
    $('#count1,#count2,#count3,#count4,#count5').stop(true, true);
    $('#count2,#count3,#count4,#count5').animate({opacity: 0}, 400,
        function () {
            $('#count2,#count3,#count4,#count5').css('display', 'none');
            $('#count1').animate({left: 0}, 0);
            $('#count1').css('display', 'block');
            $('#count1').animate({opacity: 1}, 400);
        });
}
$('#lead1').click(function () {
    lead1Click();
});
$('#lead2').click(function () {
    lead1 = 0;
    lead2 = 1;
    lead3 = 0;
    lead4 = 0;
    lead5 = 0;
    switch0();
    switch2();
    $('#arrow').stop();
    $('#arrow').animate({left: 85}, 400);
    $('#count1,#count2,#count3,#count4,#count5').stop(true, true);
    $('#count1,#count3,#count4,#count5').animate({opacity: 0}, 400,
        function () {
            $('#count1,#count3,#count4,#count5').css('display', 'none');
            $('#count2').animate({left: 0}, 0);
            $('#count2').css('display', 'block');
            $('#count2').animate({opacity: 1}, 400);
        });
});
$('#lead3').click(function () {
    lead1 = 0;
    lead2 = 0;
    lead3 = 1;
    lead4 = 0;
    lead5 = 0;
    switch0();
    switch3();
    $('#arrow').stop();
    $('#arrow').animate({left: 170}, 400);
    $('#count1,#count2,#count3,#count4,#count5').stop(true, true);
    $('#count1,#count2,#count4,#count5').animate({opacity: 0}, 400,
        function () {
            $('#count1,#count2,#count4,#count5').css('display', 'none');
            $('#count3').animate({left: 0}, 0);
            $('#count3').css('display', 'block');
            $('#count3').animate({opacity: 1}, 400);
        });
});
$('#lead4').click(function () {
    lead1 = 0;
    lead2 = 0;
    lead3 = 0;
    lead4 = 1;
    lead5 = 0;
    switch0();
    switch4();
    $('#arrow').stop();
    $('#arrow').animate({left: 250}, 400);
    $('#count1,#count2,#count3,#count4,#count5').stop(true, true);
    $('#count1,#count3,#count2,#count5').animate({opacity: 0}, 400,
        function () {
            $('#count1,#count3,#count2,#count5').css('display', 'none');
            $('#count4').animate({left: 0}, 0);
            $('#count4').css('display', 'block');
            $('#count4').animate({opacity: 1}, 400);
        });
});
$('#lead5').click(function () {
    lead1 = 0;
    lead2 = 0;
    lead3 = 0;
    lead4 = 0;
    lead5 = 1;
    $('#arrow').stop();
    $('#arrow').animate({left: 340}, 400);
    $('#count1,#count2,#count3,#count4,#count5').stop(true, true);
    $('#count1,#count3,#count4,#count2').animate({opacity: 0}, 400,
        function () {
            $('#count1,#count3,#count4,#count2').css('display', 'none');
            $('#count5').animate({left: 0}, 0);
            $('#count5').css('display', 'block');
            $('#count5').animate({opacity: 1}, 400);
        });
});
//---------------------------------------------------------------------------------------------


//////////////////////////////////////月份点击特效/////////////////////////////////////////////12345
$(function () {
    var Mon = function (config) {
        this.src = config.src;
        this.state = config.state;
        this.id = config.id;
        this.initial = function () {
            $('.' + this.id).css('position', 'absolute');
            $('.' + this.id).css('top', '0');
            $('.' + this.id).css('bottom', '0');
            $('.' + this.id).css('margin', 'auto');
            $('.month4').css('width', '10');
            $('.month4').css('opacity', '.4');
            $('.month5').css('width', '12');
            $('.month5').css('opacity', '.6');
            $('.month6,.month8').css('width', '15');
            $('.month6,.month8').css('opacity', '.8');
            $('.month7').css('width', '18');
            $('.month7').css('opacity', '1');
            $('.month1,.month2,.month3,.month9,.month10,.month11,.month12').css('opacity', '0');
        }
        this.initialgoto = function (aa) {
            $('.' + this.id).animate({left: aa}, 0);
        }
        this.goto = function (aa) {
            $('.' + this.id).animate({left: aa}, 1000);
        }
    }
    var M1 = {src: "img/产品资讯/month1.png", state: 1, id: 'month1',}
    var M2 = {src: "img/产品资讯/month2.png", state: 2, id: 'month2',}
    var M3 = {src: "img/产品资讯/month3.png", state: 3, id: 'month3',}
    var M4 = {src: "img/产品资讯/month4.png", state: 4, id: 'month4',}
    var M5 = {src: "img/产品资讯/month5.png", state: 5, id: 'month5',}
    var M6 = {src: "img/产品资讯/month6.png", state: 6, id: 'month6',}
    var M7 = {src: "img/产品资讯/month7.png", state: 7, id: 'month7',}
    var M8 = {src: "img/产品资讯/month8.png", state: 8, id: 'month8',}
    var M9 = {src: "img/产品资讯/month9.png", state: 9, id: 'month9',}
    var M10 = {src: "img/产品资讯/month10.png", state: 10, id: 'month10',}
    var M11 = {src: "img/产品资讯/month11.png", state: 11, id: 'month11',}
    var M12 = {src: "img/产品资讯/month12.png", state: 12, id: 'month12',}

    var m1 = new Mon(M1);
    $('.news_month').append('<img class="month1" src=' + m1.src + '>');
    m1.initial();
    var m2 = new Mon(M2);
    $('.news_month').append('<img class="month2" src=' + m2.src + '>');
    m2.initial();
    var m3 = new Mon(M3);
    $('.news_month').append('<img class="month3" src=' + m3.src + '>');
    m3.initial();
    var m4 = new Mon(M4);
    $('.news_month').append('<img class="month4" src=' + m4.src + '>');
    m4.initial();
    var m5 = new Mon(M5);
    $('.news_month').append('<img class="month5" src=' + m5.src + '>');
    m5.initial();
    var m6 = new Mon(M6);
    $('.news_month').append('<img class="month6" src=' + m6.src + '>');
    m6.initial();
    var m7 = new Mon(M7);
    $('.news_month').append('<img class="month7" src=' + m7.src + '>');
    m7.initial();
    var m8 = new Mon(M8);
    $('.news_month').append('<img class="month8" src=' + m8.src + '>');
    m8.initial();
    var m9 = new Mon(M9);
    $('.news_month').append('<img class="month9" src=' + m9.src + '>');
    m9.initial();
    var m10 = new Mon(M10);
    $('.news_month').append('<img class="month10" src=' + m10.src + '>');
    m10.initial();
    ;
    var m11 = new Mon(M11);
    $('.news_month').append('<img class="month11" src=' + m11.src + '>');
    m11.initial();
    ;
    var m12 = new Mon(M12);
    $('.news_month').append('<img class="month12" src=' + m12.src + '>');
    m12.initial();
    ;

    var p0 = '259.5';
    var p_1 = '230.5';
    var p_2 = '201.5';
    var p_3 = '172.5';
    var p1 = '288.5';
    var p2 = '317.5';
    var p3 = '346.5';
    var p4 = '375.5';
    var p5 = '407.5';
    var p6 = '452.5';
    var p7 = '512';
    var p8 = '574.5';
    var p9 = '619.5';
    var p10 = '648.5';
    var p11 = '677.5';
    var p12 = '706.5';
    var p13 = '735.5';
    var p14 = '764.5';
    var p15 = '793.5';
    var p16 = '822.5';

    m1.initialgoto(p1);
    m2.initialgoto(p2);
    m3.initialgoto(p3);
    m4.initialgoto(p4);
    m5.initialgoto(p5);
    m6.initialgoto(p6);
    m7.initialgoto(p7);
    m8.initialgoto(p8);
    m9.initialgoto(p9);
    m10.initialgoto(p10);
    m11.initialgoto(p11);
    m12.initialgoto(p12);

    function checkNow() {
        $('.news_month img').each(function () {
            if (parseFloat($(this).css('left')) == p1) {
                this.className = 'now1';
            } else if (parseFloat($(this).css('left')) == p2) {
                this.className = 'now2';
            } else if (parseFloat($(this).css('left')) == p3) {
                this.className = 'now3';
            } else if (parseFloat($(this).css('left')) == p4) {
                this.className = 'now4';
            } else if (parseFloat($(this).css('left')) == p5) {
                this.className = 'now5';
            } else if (parseFloat($(this).css('left')) == p6) {
                this.className = 'now6';
            } else if (parseFloat($(this).css('left')) == p7) {
                this.className = 'now7';
            } else if (parseFloat($(this).css('left')) == p8) {
                this.className = 'now8';
            } else if (parseFloat($(this).css('left')) == p9) {
                this.className = 'now9';
            } else if (parseFloat($(this).css('left')) == p10) {
                this.className = 'now10';
            } else if (parseFloat($(this).css('left')) == p11) {
                this.className = 'now11';
            } else if (parseFloat($(this).css('left')) == p12) {
                this.className = 'now12';
            }
        });
    }

    function goto(aa, bb) {
        aa.stop();
        var ccwidth;
        var ccopacity;
        if (bb == p4) {
            ccwidth = 10;
            ccopacity = 0.4;
        }
        else if (bb == p5) {
            ccwidth = 12;
            ccopacity = 0.6;
        }
        else if (bb == p6 || bb == p8) {
            ccwidth = 15;
            ccopacity = 0.8;
        }
        else if (bb == p7) {
            ccwidth = 18;
            ccopacity = 1;
        }
        else {
            ccopacity = 0;
        }
        aa.animate({left: bb, width: ccwidth, opacity: ccopacity}, 600);
    }

    function gotos(aa, bb) {
        aa.stop();
        var ccwidth;
        var ccopacity;
        if (bb == p4) {
            ccwidth = 10;
            ccopacity = 0.4;
        }
        else if (bb == p5) {
            ccwidth = 12;
            ccopacity = 0.6;
        }
        else if (bb == p6 || bb == p8) {
            ccwidth = 15;
            ccopacity = 0.8;
        }
        else if (bb == p7) {
            ccwidth = 18;
            ccopacity = 1;
        }
        else {
            ccopacity = 0;
        }
        aa.animate({left: bb, width: ccwidth, opacity: ccopacity}, 250);
    }

    function initialgoto(aa, bb) {
        aa.stop();
        aa.animate({left: bb}, 0);
    }

    function oneStep() {
        goto($('.now1'), p2);
        goto($('.now2'), p3);
        goto($('.now3'), p4);
        goto($('.now4'), p5);
        goto($('.now5'), p6);
        goto($('.now6'), p7);
        goto($('.now7'), p8);
        goto($('.now8'), p9);
        goto($('.now9'), p10);
        goto($('.now10'), p11);
        goto($('.now11'), p12);
        initialgoto($('.now12'), p1);
    }

    function twoStep() {
        goto($('.now1'), p3);
        goto($('.now2'), p4);
        goto($('.now3'), p5);
        goto($('.now4'), p6);
        goto($('.now5'), p7);
        goto($('.now6'), p8);
        goto($('.now7'), p9);
        goto($('.now8'), p10);
        goto($('.now9'), p11);
        goto($('.now10'), p12);
        initialgoto($('.now11'), p1);
        initialgoto($('.now12'), p2);
    }

    function threeStep() {
        goto($('.now1'), p4);
        goto($('.now2'), p5);
        goto($('.now3'), p6);
        goto($('.now4'), p7);
        goto($('.now5'), p8);
        goto($('.now6'), p9);
        goto($('.now7'), p10);
        goto($('.now8'), p11);
        goto($('.now9'), p12);
        initialgoto($('.now10'), p1);
        initialgoto($('.now11'), p2);
        initialgoto($('.now12'), p3);
    }

    function backStep() {
        initialgoto($('.now1'), p12);
        goto($('.now2'), p1);
        goto($('.now3'), p2);
        goto($('.now4'), p3);
        goto($('.now5'), p4);
        goto($('.now6'), p5);
        goto($('.now7'), p6);
        goto($('.now8'), p7);
        goto($('.now9'), p8);
        goto($('.now10'), p9);
        goto($('.now11'), p10);
        goto($('.now12'), p11);
    }

    $('.news_month p').click(function (e) {
        var find;
        $('.news_month img').each(function () {
            find = parseFloat($(this).css('left')) == p6;
            $(this).css('bottom', '0');
            if (find) {
                isfinished = true;
            }
        });
        if (isfinished && isClick) {
            checkNow();
            if (e.offsetX > 153 && e.offsetX < 209) {
                oneStep();
            }
            if (e.offsetX > 116 && e.offsetX < 153) {
                twoStep();
            }
            if (e.offsetX > 87 && e.offsetX < 116) {
                threeStep();
            }
            if (e.offsetX > 275 && e.offsetX < 331) {
                backStep();
            }
        }
        isClick = false;
    });
//-----------------------------------------------------------------------------------------


////////////////////////////////////////////////////月份拖拽效果///////////////////////////////
    var pdrag = $('.news_month p');
    var pdragstart;
    var isMove = false;
    var isClick = false;
    var moved = false;
    var isfinished = false;
    var lastpp;
    pdrag.mousedown(function (e) {
        checkNow();
        isfinished = false;
        $('.news_month').css('cursor', 'default');
        var find;
        $('.news_month img').each(function () {
            find = parseFloat($(this).css('left')) == p6;
            if (find) {
                isfinished = true;
            }
        });
        if (isfinished) {
            if (e.offsetX > 87 && e.offsetX < 116) {
                pdragstart = 4;
            }
            if (e.offsetX > 116 && e.offsetX < 153) {
                pdragstart = 5
            }
            if (e.offsetX > 153 && e.offsetX < 209) {
                pdragstart = 6
            }
            if (e.offsetX > 209 && e.offsetX < 275) {
                pdragstart = 7
            }
            if (e.offsetX > 275 && e.offsetX < 331) {
                pdragstart = 8
            }
        }
    });
    var tt = [
        p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16
    ];
    tt[-1] = p0;
    tt[-2] = p_1;
    tt[-3] = p_2;
    tt[-4] = p_3;
    pdrag.mousemove(function (e) {
        var p = e.offsetX + 279;
        var pp = (e.offsetX + 279).toString();
        if (pp != lastpp && pdragstart > 3) {
            isMove = true;
            isClick = false;
        }
        lastpp = pp;
        if (pdragstart == 4 && isMove == true) {
            moved = true;
            if (pp >= p4 && pp < p5) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p4) * (tt[i] - tt[i - 1]) / (p5 - p4) - (-tt[i - 1])).toString());
                }
            }
            if (pp >= p5 && pp < p6) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p5) * (tt[i + 1] - tt[i]) / (p6 - p5) - (-tt[i])).toString());
                }
            }
            if (pp >= p6 && pp < p7) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p6) * (tt[i + 2] - tt[i + 1]) / (p7 - p6) - (-tt[i + 1])).toString());
                }
            }
            if (pp >= p7 && pp < p8) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p7) * (tt[i + 3] - tt[i + 2]) / (p8 - p7) - (-tt[i + 2])).toString());
                }
            }
        }
        if (pdragstart == 5 && isMove == true) {
            moved = true;
            if (pp >= p4 && pp < p5) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p4) * (tt[i - 1] - tt[i - 2]) / (p5 - p4) - (-tt[i - 2])).toString());
                }
            }
            if (pp >= p5 && pp < p6) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p5) * (tt[i] - tt[i - 1]) / (p6 - p5) - (-tt[i - 1])).toString());
                }
            }
            if (pp >= p6 && pp < p7) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p6) * (tt[i + 1] - tt[i]) / (p7 - p6) - (-tt[i])).toString());
                }
            }
            if (pp >= p7 && pp < p8) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p7) * (tt[i + 2] - tt[i + 1]) / (p8 - p7) - (-tt[i + 1])).toString());
                }
            }
        }
        if (pdragstart == 6 && isMove == true) {
            moved = true;
            if (pp >= p4 && pp < p5) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p4) * (tt[i - 2] - tt[i - 3]) / (p5 - p4) - (-tt[i - 3])).toString());
                }
            }
            if (pp >= p5 && pp < p6) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p5) * (tt[i - 1] - tt[i - 2]) / (p6 - p5) - (-tt[i - 2])).toString());
                }
            }
            if (pp >= p6 && pp < p7) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p6) * (tt[i] - tt[i - 1]) / (p7 - p6) - (-tt[i - 1])).toString());
                }
            }
            if (pp >= p7 && pp < p8) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p7) * (tt[i + 1] - tt[i]) / (p8 - p7) - (-tt[i])).toString());
                }
            }
        }
        if (pdragstart == 7 && isMove == true) {
            moved = true;
            if (pp >= p4 && pp < p5) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p4) * (tt[i - 3] - tt[i - 4]) / (p5 - p4) - (-tt[i - 4])).toString());
                }
            }
            if (pp >= p5 && pp < p6) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p5) * (tt[i - 2] - tt[i - 3]) / (p6 - p5) - (-tt[i - 3])).toString());
                }
            }
            if (pp >= p6 && pp < p7) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p6) * (tt[i - 1] - tt[i - 2]) / (p7 - p6) - (-tt[i - 2])).toString());
                }
            }
            if (pp >= p7 && pp < p8) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p7) * (tt[i] - tt[i - 1]) / (p8 - p7) - (-tt[i - 1])).toString());
                }
            }
        }
        if (pdragstart == 8 && isMove == true) {
            moved = true;
            if (pp >= p4 && pp < p5) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p4) * (tt[i - 4] - tt[i - 5]) / (p5 - p4) - (-tt[i - 5])).toString());
                }
            }
            if (pp >= p5 && pp < p6) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p5) * (tt[i - 3] - tt[i - 4]) / (p6 - p5) - (-tt[i - 4])).toString());
                }
            }
            if (pp >= p6 && pp < p7) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p6) * (tt[i - 2] - tt[i - 3]) / (p7 - p6) - (-tt[i - 3])).toString());
                }
            }
            if (pp >= p7 && pp < p8) {
                for (var i = 1; i <= 12; i++) {
                    nowGoto($('.now' + i), ((pp - p7) * (tt[i - 1] - tt[i - 2]) / (p8 - p7) - (-tt[i - 2])).toString());
                }
            }
        }
    });
    $('body').mouseup(function () {
        pdragstart = 0;
        isMove = false;
        $('.news_month').css('cursor', 'default');
        if (moved) {
            checkNext();
            initialgoto($('.next1'), p1);
            gotos($('.next2'), p2);
            gotos($('.next3'), p3);
            gotos($('.next4'), p4);
            gotos($('.next5'), p5);
            gotos($('.next6'), p6);
            gotos($('.next7'), p7);
            gotos($('.next8'), p8);
            gotos($('.next9'), p9);
            gotos($('.next10'), p10);
            gotos($('.next11'), p11);
            initialgoto($('.next12'), p12);
        } else {
            isClick = true;
        }
        moved = false;
    });
    function nowGoto(aa, bb) {
        var nowopacity;
        var nowwidth;
        if (bb >= p4 && bb < p5) {
            nowopacity = ((bb - p4) / 5 / (p5 - p4) + 0.4).toString();
            nowwidth = ((bb - p4) * 2 / (p5 - p4) + 10).toString()
        }
        else if (bb >= p5 && bb < p6) {
            nowopacity = ((bb - p5) / 5 / (p6 - p5) + 0.6).toString();
            nowwidth = ((bb - p5) * 3 / (p6 - p5) + 12).toString()
        }
        else if (bb >= p6 && bb < p7) {
            nowopacity = ((bb - p6) / 5 / (p7 - p6) + 0.8).toString();
            nowwidth = ((bb - p6) * 3 / (p7 - p6) + 15).toString()
        }
        else if (bb >= p7 && bb < p8) {
            nowopacity = ((bb - p7) / (-5) / (p8 - p7) + 1).toString();
            nowwidth = ((bb - p7) * (-3) / (p8 - p7) + 18).toString()
        }
        else {
            nowopacity = 0;
        }
        if (bb > p12) {
            bb = (bb - (p12 - p1) - 29).toString();
        }
        if (bb <= p1) {
            bb = (bb - (p1 - p12) + 29).toString()
        }
        aa.css('left', bb);
        aa.css('opacity', nowopacity);
        aa.css('width', nowwidth);
    }

    function checkNext() {
        $('.news_month img').each(function () {
            var cc = parseFloat($(this).css('left'));
            if (cc > 279 && cc - 279 <= (p2 - p1) / 2 - (279 - p1)) {
                this.className = 'next1';
            } else if (cc - p1 > (p2 - p1) / 2 && cc - p1 <= (p3 - p2) / 2 - (p1 - p2)) {
                this.className = 'next2';
            } else if (cc - p2 > (p3 - p2) / 2 && cc - p2 <= (p4 - p3) / 2 - (p2 - p3)) {
                this.className = 'next3';
            } else if (cc - p3 > (p4 - p3) / 2 && cc - p3 <= (p5 - p4) / 2 - (p3 - p4)) {
                this.className = 'next4';
            } else if (cc - p4 > (p5 - p4) / 2 && cc - p4 <= (p6 - p5) / 2 - (p4 - p5)) {
                this.className = 'next5';
            } else if (cc - p5 > (p6 - p5) / 2 && cc - p5 <= (p7 - p6) / 2 - (p5 - p6)) {
                this.className = 'next6';
            } else if (cc - p6 > (p7 - p6) / 2 && cc - p6 <= (p8 - p7) / 2 - (p6 - p7)) {
                this.className = 'next7';
            } else if (cc - p7 > (p8 - p7) / 2 && cc - p7 <= (p9 - p8) / 2 - (p7 - p8)) {
                this.className = 'next8';
            } else if (cc - p8 > (p9 - p8) / 2 && cc - p8 <= (p10 - p9) / 2 - (p8 - p9)) {
                this.className = 'next9';
            } else if (cc - p9 > (p10 - p9) / 2 && cc - p9 <= (p11 - p10) / 2 - (p9 - p10)) {
                this.className = 'next10';
            } else if (cc - p10 > (p11 - p10) / 2 && cc - p10 <= (p12 - p11) / 2 - (p10 - p11)) {
                this.className = 'next11';
            } else if (cc - p11 > (p12 - p11) / 2 && cc - p11 <= (p13 - p12) / 2 - (p11 - p12)) {
                this.className = 'next12';
            } else {
                this.className = 'next1';
            }
        });
    }

//---------------------------------------------------------------------------------------------------


/////////////////////////////////////////////////////滑动块///////////////////////////////////////////
    $('.div').mouseenter(function (e) {
        var x = parseFloat(e.offsetX);
        var y = parseFloat(e.offsetY) * 1.4;
        if (x <= y && x + y <= 303) {
            $(this).prev().stop(true);
            $(this).prev().css({'top': '0', 'left': '-302px'});
            $(this).prev().animate({left: 0, top: 0}, 200);
            $(this).prev().prev().stop(true);
            $(this).prev().prev().animate({width: 350, left: -25, top: -18}, 300);
        }
        if (x <= y && x + y > 303) {
            $(this).prev().stop(true);
            $(this).prev().css({'top': '213px', 'left': '0'});
            $(this).prev().animate({left: 0, top: 0}, 200);
            $(this).prev().prev().stop(true);
            $(this).prev().prev().animate({width: 350, left: -25, top: -18}, 300);
        }
        if (x > y && x + y < 303) {
            $(this).prev().stop(true);
            $(this).prev().css({'top': '-213px', 'left': '0'});
            $(this).prev().animate({left: 0, top: 0}, 200);
            $(this).prev().prev().stop(true);
            $(this).prev().prev().animate({width: 350, left: -25, top: -18}, 300);
        }
        if (x > y && x + y >= 303) {
            $(this).prev().stop(true);
            $(this).prev().css({'left': '302px'});
            $(this).prev().animate({left: 0, top: 0}, 200);
            $(this).prev().prev().stop(true);
            $(this).prev().prev().animate({width: 350, left: -25, top: -18}, 300);
        }
    });
    $('.div').mouseleave(function (e) {
        if (e.offsetX <= 0) {
            $(this).prev().stop(true);
            $(this).prev().animate({left: -302, top: 0}, 200);
            $(this).prev().prev().stop(true);
            $(this).prev().prev().animate({width: 303, left: 0, top: 0}, 300);
        }
        if (e.offsetX >= 302) {
            $(this).prev().stop(true);
            $(this).prev().animate({left: 302, top: 0}, 200);
            $(this).prev().prev().stop(true);
            $(this).prev().prev().animate({width: 303, left: 0, top: 0}, 300);
        }
        if (e.offsetY <= 0) {
            $(this).prev().stop(true);
            $(this).prev().animate({left: 0, top: -213}, 200);
            $(this).prev().prev().stop(true);
            $(this).prev().prev().animate({width: 303, left: 0, top: 0}, 300);
        }
        if (e.offsetY >= 213) {
            $(this).prev().stop(true);
            $(this).prev().animate({left: 0, top: 213}, 200);
            $(this).prev().prev().stop(true);
            $(this).prev().prev().animate({width: 303, left: 0, top: 0}, 300);
        }
    });
    $('.divs').mouseenter(function (e) {
        var x = parseFloat(e.offsetX) * 1.3;
        var y = parseFloat(e.offsetY);
        if (x <= y && x + y <= 357) {
            $(this).prev().stop(true);
            $(this).prev().css({'top': '0', 'left': '-357px'});
            $(this).prev().animate({left: 0, top: 0}, 200);
        }
        if (x <= y && x + y > 357) {
            $(this).prev().stop(true);
            $(this).prev().css({'top': '468px', 'left': '0'});
            $(this).prev().animate({left: 0, top: 0}, 200);
        }
        if (x > y && x + y < 357) {
            $(this).prev().stop(true);
            $(this).prev().css({'top': '-468px', 'left': '0'});
            $(this).prev().animate({left: 0, top: 0}, 200);
        }
        if (x > y && x + y >= 357) {
            $(this).prev().stop(true);
            $(this).prev().css({'left': '357px'});
            $(this).prev().animate({left: 0, top: 0}, 200);
        }
    });
    $('.divs').mouseleave(function (e) {
        if (e.offsetX <= 0) {
            $(this).prev().stop(true);
            $(this).prev().animate({left: -357, top: 0}, 200);
        }
        if (e.offsetX >= 357) {
            $(this).prev().stop(true);
            $(this).prev().animate({left: 357, top: 0}, 200);
        }
        if (e.offsetY <= 0) {
            $(this).prev().stop(true);
            $(this).prev().animate({left: 0, top: -468}, 200);
        }
        if (e.offsetY >= 468) {
            $(this).prev().stop(true);
            $(this).prev().animate({left: 0, top: 468}, 200);
        }
    });
//---------------------------------------------------------------------------------------------------


//////////////////////////////////////////////////三角排布////////////////////////////////////////////
    var top = 140;
    var left = 0;
    for (var i = 1; i <= 7; i++) {
        if (i % 2 == 1) {
            top = 20
        }
        else {
            top = 0
        }
        if (i == 1) {
            left = 86;
        }
        $('.plan2_bottom').append('<img src="img/三角形/(' + i + ').png"style="position:absolute;top:' + top + 'px;left:' + left + 'px;"/>');
        left += 86.5;
    }
    for (var i = 8; i <= 15; i++) {
        if (i % 2 == 1) {
            top = 145
        }
        else {
            top = 165
        }
        if (i == 8) {
            left = 0;
        }
        $('.plan2_bottom').append('<img src="img/三角形/(' + i + ').png"style="position:absolute;top:' + top + 'px;left:' + left + 'px;"/>');
        left += 86.5;
    }
    for (var i = 16; i <= 23; i++) {
        if (i % 2 == 1) {
            top = 310
        }
        else {
            top = 290
        }
        if (i == 16) {
            left = 0;
        }
        $('.plan2_bottom').append('<img src="img/三角形/(' + i + ').png"style="position:absolute;top:' + top + 'px;left:' + left + 'px;"/>');
        left += 86.5;
    }
//---------------------------------------------------------------------------------------------------------------

/////////////////////////////////////////////////////下滑箭头//////////////////////////////////////////////////////
    function downheightChange() {
        $('.news2_down').css('height', $(window).height() - 625 + 'px');
        $('.news2_down img').css({'top': '0', 'bottom': '0', 'margin': 'auto'});
    }

    downheightChange();
    $(window).resize(function () {
        downheightChange();
        checkFirstDown = 0;
    });
    var checkFirstDown = 0;
    $('.news2_down img').mouseover(function () {
        $(this).stop(true);
        if (checkFirstDown == 0) {
            margintop = $(this).css('margin-top');
            next = parseFloat(margintop) + 15 + 'px';
            checkFirstDown = 1;
        }
        $(this).animate({'margin-top': margintop}, 200);
        $(this).animate({'margin-top': next}, 100, 'linear');
        $(this).animate({'margin-top': margintop}, 600);
        $(this).animate({'margin-top': next}, 100, 'linear');
        $(this).animate({'margin-top': margintop}, 600);
    });
    $('.news2_down img').click(function () {
        
        $(document.body).animate({scrollTop: $(window).height()}, 1000, 'easeOutCirc', function () {
            lastdd = $('body').scrollTop();
           
        });
    });
//---------------------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////搜索框//////////////////////////////////////////////////
    $('.input').focus(function () {
        $('#search11').css({'top': '29', 'right': '68'});
    });
    $('.input').blur(function () {
        $('#search11').css({'top': '25', 'right': '70'});
    });
//---------------------------------------------------------------------------------------------------------------


///////////////////////////////////////////////////////按钮线圈///////////////////////////////////////////////////
    $('.lap_m_div').mouseenter(function () {
        $(this).children('.lap_m_div10').attr({'class': 'lap_m_div1'});
        $(this).children('.lap_m_div20').attr({'class': 'lap_m_div2'});
        $(this).children('.lap_m_div30').attr({'class': 'lap_m_div3'});
        $(this).children('.lap_m_div40').attr({'class': 'lap_m_div4'});
    });
    $('.lap_m_div').mouseleave(function () {
        $('.lap_m_div1').attr({'class': 'lap_m_div10'});
        $('.lap_m_div2').attr({'class': 'lap_m_div20'});
        $('.lap_m_div3').attr({'class': 'lap_m_div30'});
        $('.lap_m_div4').attr({'class': 'lap_m_div40'});
    });
    $('.lap_s_div').mouseenter(function () {
        $(this).children('.lap_s_div10').attr({'class': 'lap_s_div1'});
        $(this).children('.lap_s_div20').attr({'class': 'lap_s_div2'});
        $(this).children('.lap_s_div30').attr({'class': 'lap_s_div3'});
        $(this).children('.lap_s_div40').attr({'class': 'lap_s_div4'});
    });
    $('.lap_s_div').mouseleave(function () {
        $('.lap_s_div1').attr({'class': 'lap_s_div10'});
        $('.lap_s_div2').attr({'class': 'lap_s_div20'});
        $('.lap_s_div3').attr({'class': 'lap_s_div30'});
        $('.lap_s_div4').attr({'class': 'lap_s_div40'});
    });
    $('.lap_l_div').mouseenter(function () {
        $(this).children('.lap_l_div10').attr({'class': 'lap_l_div1'});
        $(this).children('.lap_l_div20').attr({'class': 'lap_l_div2'});
        $(this).children('.lap_l_div30').attr({'class': 'lap_l_div3'});
        $(this).children('.lap_l_div40').attr({'class': 'lap_l_div4'});
    });
    $('.lap_l_div').mouseleave(function () {
        $('.lap_l_div1').attr({'class': 'lap_l_div10'});
        $('.lap_l_div2').attr({'class': 'lap_l_div20'});
        $('.lap_l_div3').attr({'class': 'lap_l_div30'});
        $('.lap_l_div4').attr({'class': 'lap_l_div40'});
    });
    $('.lap_l1_div').mouseenter(function () {
        $(this).children('.lap_l1_div10').attr({'class': 'lap_l1_div1'});
        $(this).children('.lap_l1_div20').attr({'class': 'lap_l1_div2'});
        $(this).children('.lap_l1_div30').attr({'class': 'lap_l1_div3'});
        $(this).children('.lap_l1_div40').attr({'class': 'lap_l1_div4'});
    });
    $('.lap_l1_div').mouseleave(function () {
        $('.lap_l1_div1').attr({'class': 'lap_l1_div10'});
        $('.lap_l1_div2').attr({'class': 'lap_l1_div20'});
        $('.lap_l1_div3').attr({'class': 'lap_l1_div30'});
        $('.lap_l1_div4').attr({'class': 'lap_l1_div40'});
    });
//-----------------------------------------------------------------------------------------------------------------


////////////////////////////////////////////////////上浮黑框字////////////////////////////////////////////////////
    $('#shop2_middle_fenlei>div').mouseenter(function () {
        $(this).children('.fenlei_word0').attr({'class': 'fenlei_word1 trans5'});
    });
    $('#shop2_middle_fenlei>div').mouseleave(function () {
        $(this).children('.fenlei_word1').attr({'class': 'fenlei_word0 trans5'});
    });
//------------------------------------------------------------------------------------------------------------


////////////////////////////////////////////////////阅读详情////////////////////////////////////////////////////
    $('.day_left>h4>img,.day_right>h4>img').mouseenter(function () {
        $(this).attr('src', 'img/产品资讯/阅读详情2.png');
    });
    $('.day_left>h4>img,.day_right>h4>img').mouseleave(function () {
        $(this).attr('src', 'img/产品资讯/阅读详情.png');
    });
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
//------------------------------------------------------------------------------------------------------------

////////////////////////////////////////////////////logo////////////////////////////////////////////////////
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

    $('#logo0').mouseenter(function () {
        logoOne();
        interval = setInterval(logoOne, 2700);
    });
    $('#logo0').mouseleave(function () {
        clearInterval(interval);
        $('#title_img').css('opacity', '1');
        $('#logo1').css('opacity', '0');
        $('#logo2').css('opacity', '0');
    });
    $('#logo0').click(function () {
        lead1Click();
    });
//------------------------------------------------------------------------------------------------------------

//////////////////////////////////////////////////CIRCLE/////////////////////////////////////////////////////
    $('#theme_circle div').click(function () {
        $('#theme_circle div').attr('class', '');
        $(this).attr('class', 'circled trans5');
    });
    $('#theme_circle_1').click(function () {
        pos = 1;
        $(themeimgs[0]).attr('class', 'theme_img_now trans7');
        $(themeimgs[1]).attr('class', 'theme_img_left trans7');
        $(themeimgs[2]).attr('class', 'theme_img_left trans7');
        $(themeimgs[3]).attr('class', 'theme_img_left trans7');
    });
    $('#theme_circle_2').click(function () {
        pos = 2;
        $(themeimgs[0]).attr('class', 'theme_img_right trans7');
        $(themeimgs[1]).attr('class', 'theme_img_now trans7');
        $(themeimgs[2]).attr('class', 'theme_img_left trans7');
        $(themeimgs[3]).attr('class', 'theme_img_left trans7');
    });
    $('#theme_circle_3').click(function () {
        pos = 3;
        $(themeimgs[0]).attr('class', 'theme_img_right trans7');
        $(themeimgs[1]).attr('class', 'theme_img_right trans7');
        $(themeimgs[2]).attr('class', 'theme_img_now trans7');
        $(themeimgs[3]).attr('class', 'theme_img_left trans7');
    });
    $('#theme_circle_4').click(function () {
        pos = 4;
        $(themeimgs[0]).attr('class', 'theme_img_right trans7');
        $(themeimgs[1]).attr('class', 'theme_img_right trans7');
        $(themeimgs[2]).attr('class', 'theme_img_right trans7');
        $(themeimgs[3]).attr('class', 'theme_img_now trans7');
    });
    var themeimg = document.getElementById("theme_img");
    var themeimgs = themeimg.querySelectorAll("div");
    var circle = document.getElementById("theme_circle");
    var circles = circle.querySelectorAll("div");
    var pos = 1;
    $('#theme_next_left').click(function () {
        pos -= 1;
        if (pos <= 1) {
            pos = 1
        }
        $(themeimgs[pos]).attr('class', 'theme_img_left trans7');
        $(themeimgs[pos - 1]).attr('class', 'theme_img_now trans7');
        $(circles).attr('class', '');
        $(circles[pos - 1]).attr('class', 'circled trans5');
    });
    $('#theme_next_right').click(function () {
        pos += 1;
        if (pos >= 4) {
            pos = 4
        }
        $(themeimgs[pos - 2]).attr('class', 'theme_img_right trans7');
        $(themeimgs[pos - 1]).attr('class', 'theme_img_now trans7');
        $(circles).attr('class', '');
        $(circles[pos - 1]).attr('class', 'circled trans5');
    });
//---------------------------------------------------------------------------------------------------------------

//////////////////////////////////////////////////TOP/////////////////////////////////////////////////////
    $('.backtop').click(function () {
        $('body').animate({scrollTop: 0}, 900, 'easeOutCirc');
    });

//---------------------------------------------------------------------------------------------------------------


//////////////////////////////////////////////////去除LOADING/////////////////////////////////////////////////////

});
//---------------------------------------------------------------------------------------------------------------





















