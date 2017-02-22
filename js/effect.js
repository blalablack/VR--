////////////////////////////////////////////////////////////////////////////////////////////
var dd = 0;
var interval;
//---------------------------------------------------------------------------------------------

/*******************初始化操作****************/
window.onload = function () {
    check_left();
	//loading去掉，count1出来
    $('#loading').css({'display': 'none'});
    $('#count1').css({'display': 'block'});
	//页面滚动条一滚动的事件
    window.onscroll = function () {
		//判断滚动到哪了
        check_left();
		//调用这两个函数，时刻监控是否出来
        right_effect($('.day_right'));
        left_effect($('.day_left'));
		//百万关卡的动画
        if (isShow($('#news_img'),300)) {
            wordFloat($('.wordFloat3'), '170px', 1000);
            wordFloat($('.wordFloat4'), '200px', 1000);
        }
		//百万关卡的阅读详情动画
        if (isShow($('#news_img_xiang'),140)) {
            objBlock($('#news_img_xiang'));
        } 
		//阅读详情动画
        $('.content_all img').each(function () {
            if (isShow($(this),100)) {
                objBlock($(this));
            } 
        });
		//潮品的动画
        if (isShow($('#shop_word'),350)) {
            $('#shop_word').css('margin-left', '0');
            $('#shop_img').css('margin-left', '0');
        }
		//本周极客动画(有两个一样的注意)
        if (isShow($('.plan2_top_ben'),210)) {
            $('#count1 .plan2_top_ben').css('top', '100');
            $('#count1 .plan2_top_men').css('top', '200');
            $('#count1 .plan2_top_ren').css('opacity', '1');
        }
    }
    switch1();
}

/******上浮字体******/
function wordFloat(aa, topgo, time) {
    aa.animate({top: topgo, opacity: 1}, time);
}

/*******透明字体*******/
function objBlock(aa) {
    aa.animate({opacity: 1}, 900);
}
//判断你是否到了要触发动画的点。
function isShow(aa,height) {
    var b=$(window).scrollTop(); //监控窗口已滚动的距离;
	var	d=$(window).height();//浏览器窗口的高度*/
	var a=aa.offset().top;
	//height是用来调节大约什么时间动画
	//这里$(this).attr("style"),使用来限制上面只执行一次动画，
	//条件是在动画运行之前，元素都没有内联的style。
    if (b+d>a+height&&!$(this).attr("style")) {
        return true;
    } else {
        return false;
    }
}
//----------------------------------------------------------------------------------------------

/*******************导航切换连带效果*************/
//首页的加载动画
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
//产品资讯的加载动画
function switch2() {
    setTimeout(function () {
        $('#news2_title_hr').animate({marginLeft: 0}, 500);
    }, 600);
    setTimeout(function () {
        $('#news2_title_word').animate({marginTop: 0}, 600, 'easeOutBounce');
    }, 1000);
}
//潮品购的加载动画
function switch3() {
    setTimeout(function () {
        $('#shop2_top_img').animate({marginTop: 0}, 1000, 'easeOutElastic');
    }, 600);
    setTimeout(function () {
        $('#shop2_top_word').animate({opacity: 1}, 600);
    }, 1300);
}
//联系我们的加载动画
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
//全部恢复
function switch0(){
	$('#theme_img').animate({'opacity':'0','left':'730'},0);
	$('#theme_word').animate({'left':'300'},0);
	$('#theme_img1,#theme_img2').animate({'opacity':'0'},0);
	$('#news2_title_hr').stop();$('#news2_title_hr').animate({marginLeft:80},0);
	$('#news2_title_word').stop();$('#news2_title_word').animate({marginTop:-50},0);
	$('#shop2_top_img').stop();$('#shop2_top_img').animate({marginTop:-80},0);
	$('#shop2_top_word').stop();$('#shop2_top_word').animate({opacity:0},0);
	$('.plan2_top_ben').animate({'top':'125'},0);
	$('.plan2_top_men').animate({'top':'170'},0);
	$('.plan2_top_ren').stop();$('.plan2_top_ren').animate({'opacity':'0'},0);
}


/***********************************************左侧导航栏*************************************************/

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

/***************页面到达到某个地方，左右回来******************/
function right_effect(aa) {
	var b=$(window).scrollTop(); //监控窗口已滚动的距离;
	var	d=$(window).height();//浏览器窗口的高度*/
    aa.each(function () {
		a=$(this).offset().top;//元素相对于窗口的距离
		//b+d=a时元素刚要漏出，150是调整差不多元素出来一块在变化
		if(b>a+150-d&&!$(this).attr("style")){
			//左右回来
			$(this).animate({opacity: 1, right: 0}, 700);
		}
		
    });
}
function left_effect(aa) {
	var b=$(window).scrollTop(); //监控窗口已滚动的距离;
	var	d=$(window).height();//浏览器窗口的高度*/
    aa.each(function () {
		a=$(this).offset().top;//元素相对于窗口的距离
		//取style属性，确保只执行一次show,没执行之前是没有style的
		if(b>a+150-d&&!$(this).attr("style")){
			$(this).animate({opacity: 1, left: 0}, 700);
		}
    });
}

//绑定每个标题的click事件
$("#top_lead").delegate("h3","click",function(){
	//标题栏改变active
	var elem=$(this);
	var id=elem.attr("id");
	elem.siblings(".active").removeClass("active");
	elem.addClass("active");
	//内容变为透明
	var count=$("#count"+id.slice(id.length-1))
	count.siblings().each(function(){
		$(this).stop(true,true);
		$(this).animate({"opacity":0},400);
	});
	setTimeout(function(){
		//根据id判断到底是那个标题
		if(id=="lead1"){
		//恢复位置
		switch0();
		//动画展示
		switch1();
		//三角图标动画
		$('#arrow').stop(true,true);
		$('#arrow').animate({left: 10}, 400);
		var count1=$('#count1');
		//其余消失
		count1.siblings().each(function(){
			$(this).css('display', 'none');
		});
       count1.stop(true,true);
	   //count1出来
        count1.css('display', 'block');
        count1.animate({opacity: 1}, 400);
	}else if(id=="lead2"){
		//恢复位置
		switch0();
		//动画展示
		switch2();
		//三角图标动画
		$('#arrow').stop(true,true);
		$('#arrow').animate({left: 85}, 400);
		var count2=$('#count2');
		//其余消失
		count2.stop(true,true);
		count2.siblings().each(function(){
			$(this).css('display', 'none');
		});
		//count2出来
        count2.css('display', 'block');
        count2.animate({opacity: 1}, 400);

	}else if(id=="lead3"){
		//同上
		//恢复位置
		switch0();
		switch3();
		$('#arrow').stop(true,true);
		$('#arrow').animate({left: 170}, 400);
		//count3出来
		var count3=$('#count3');
		count3.stop(true,true);
		count3.siblings().each(function(){
			$(this).css('display', 'none');
		});
        
        count3.css('display', 'block');
        count3.animate({opacity: 1}, 400);
	}else if(id=="lead4"){
		//恢复位置
		switch0();
		switch4();
		$('#arrow').stop(true,true);
		$('#arrow').animate({left: 250}, 400);
		//count4出来
		var count4=$('#count4');
		count4.stop(true,true);
		count4.siblings().each(function(){
			$(this).css('display', 'none');
		});
        
        count4.css('display', 'block');
        count4.animate({opacity: 1}, 400);
	}else{
		$('#arrow').stop(true,true);
		$('#arrow').animate({left: 340}, 400);
		//count5出来
		var count5=$('#count5');
		count5.stop(true,true);
		count5.siblings().each(function(){
			$(this).css('display', 'none');
		});
        count5.css('display', 'block');
        count5.animate({opacity: 1}, 400);
	}
	},400);
	
	
});


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
        switch1();
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


//---------------------------------------------------------------------------------------------------------------





















