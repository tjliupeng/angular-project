
$(function() {
	$("#function-introduction .flex3").mouseenter(function(){
		

		$(this).find("h2").addClass("bounce");
		$(this).find("p").css("display","block").addClass("fadeInUp");
	
		 $(this).find(".line-blue").addClass("fadeInDown");

	}).mouseleave(function(){
		 
		$(this).find("h2").removeClass("bounce");
		$(this).find("p").css("display","none").removeClass("fadeInUp");
		$(this).find(".line-blue").removeClass("fadeInDown");
	})

	
		//图片轮播
		var x=0;
		var y=0;
		var timer;
		//克隆第一张图片
		var Lis=$('.list li:first').clone(true);
		//插入到相应位置
		$('.list').append(Lis);
		//下一张
		var nextFn=function(){
			x++;
			if(x>2){
				x=0;
			}
			$('.inOl li').eq(x).addClass('current').siblings('li').removeClass('current');
			y++;
			if(y>3){
				y=1;
			$('.list').css('left', '0');
			}
			var s=y*-1920;
			$('.list').stop().animate({'left':s}, 500);
		};
		//上一张
		var prevFn=function(){
			x--;
			if(x<0){
				x=2;
			}
			$('.inOl li').eq(x).addClass('current').siblings('li').removeClass('current');
			y--;
			if(y<0){
				y=2;
			$('.list').css('left', '-7680px');
			}
			var s=y*-1920;
			$('.list').stop().animate({'left':s}, 500);
		};
		// 事件触发
		$('.banner').hover(function() {
			$('.rt,.lt').show();
			clearInterval(timer);
		}, function() {
			$('.rt,.lt').hide();
			clearInterval(timer);
			timer=setInterval(nextFn, 2000);
		});
	
		$('.rt').click(nextFn);
		$('.lt').click(prevFn);
		// 定时器
		timer=setInterval(nextFn, 2000);
		// 点击小点事件
		$('.inOl li').click(function(event) {
			var clicks=$(this).index();
			$(this).addClass('current').siblings().removeClass('current');
			var s=clicks*-1920;
			$('.list').stop().animate({'left':s}, 500);	
			x=clicks;
			y=clicks;	
		});
		
	});

$(document).ready(function($) {
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});
	
		$('.accordion').on('show', function (e) {
		
			$(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
			$(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
			$(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
		});
		
		$('.accordion').on('hide', function (e) {
			$(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
			$(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
			$(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
		});	

	$('.navigation').onePageNav({
		begin: function() {
			console.log('start');
		},
		end: function() {
			console.log('stop');
		},
			scrollOffset: 0		
	});
	
	// prettyPhoto
	//$("a[data-pretty^='prettyPhoto']").prettyPhoto();

    // Localscrolling 
	$('#menu-main, .brand').localScroll();
	
	$('#menu-main li a').click(function(){
		var links = $('#menu-main li a');
		links.removeClass('selected');
		$(this).addClass('selected');
	});

    var iOS = false,
        p = navigator.platform;

    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
        iOS = true;
    }	
	
    if (iOS === false) {

        $('.flyIn').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInUp');
            }
        });

        $('.flyLeft').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInLeftBig');
            }
        });

        $('.flyRight').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInRightBig');
            }
        });

    }
	
	// add animation on hover
		// $(".service-box").hover(
		// 	function () {
		// 	$(this).find('img').addClass("animated pulse");
		// 	$(this).find('h2').addClass("animated fadeInUp");
		// 	$(this).find('p').addClass("animated slideInUp");
		// 	},
		// 	function () {
		// 	$(this).find('img').removeClass("animated pulse");
		// 	$(this).find('h2').removeClass("animated fadeInUp");
		// 	$(this).find('p').removeClass("animated slideInUp");
		// 	}
		// );
		
		// 我的首页悬浮效果
		$(".col3").click(function(){
			$(this).addClass("current").siblings(".col3").removeClass("current");
			$(".col3").hover(function(){
				$(this).addClass("current").siblings(".col3").removeClass("current");
				
			});
		});
	
	// cache container
	var $container = $('#portfolio-wrap');
	$.browser.safari = ($.browser.webkit && !(/chrome/.test(navigator.userAgent.toLowerCase())));	
	
	if($.browser.safari){ 	
	// initialize isotope
	$container.isotope({
		animationEngine : 'jquery',
		animationOptions: {
			duration: 200,
			queue: false
		},
		layoutMode: 'fitRows'
	});
	} else {	
	$container.isotope({
		animationEngine : 'best-available',
		animationOptions: {
			duration: 200,
			queue: false
		},
		layoutMode: 'fitRows'
	});	
	
	$(window).resize(function() {
		$container.isotope('reLayout');
	});
	}
	// filter items when filter link is clicked
	$('#filters a').click(function(){
		$('#filters a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });
		return false;
	});

	// flexslider main
	$('#main-flexslider').flexslider({
		animation: "swing",
		direction: "vertical", 
		slideshow: true,
		slideshowSpeed: 3500,
		animationDuration: 1000,
		directionNav: true,
		prevText: '<i class="icon-angle-up icon-2x"></i>',
		nextText: '<i class="icon-angle-down icon-2x active"></i>',
		controlNav: false,
		smootheHeight:true,
		useCSS: false
	});
	
});
	
	

