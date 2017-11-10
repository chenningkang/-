window.addEventListener('DOMContentLoaded', function (){
	var shuping = 'onorientationchange' in window ? 'orientationchange' : 'resize';
	var isAndorid = /(Android)/i.test(navigator.userAgent);
	var timer = null;

	//设置字体
	function setFontSize(){
		var w = window.innerWidth;
		//设计图 宽度是1080  --------------------> 对应1242, 1rem = 100px;(css已设置)
		document.documentElement.style.fontSize = 100*w/1242 + 'px';
	}
	setFontSize();

	//手机横竖屏时 改变大小，Andorid手机切换有延迟 故开定时器
	window.addEventListener(shuping, function (){
		clearTimeout(timer);
		timer = setTimeout(setFontSize, isAndorid?300:0);
	}, false);
}, false);



	
$(function() {
	var is_bouncy_nav_animating = false;
	//弹出菜单
	$('.cd-bouncy-nav-trigger').on('click', function() {
		
		triggerBouncyNav(true);
	});
	//关闭菜单
	$('.cd-bouncy-nav-modal .cd-close').on('click', function() {
		triggerBouncyNav(false);
	});
	$('.cd-bouncy-nav-modal').on('click', function(event) {
		
		if ($(event.target).is('.cd-bouncy-nav-modal')) {
			
			triggerBouncyNav(false);
		}
	});
function triggerBouncyNav($bool) {
		//点击若没有动画
		if (!is_bouncy_nav_animating) {
			is_bouncy_nav_animating = true;
			//切换菜单动画
			$('.cd-bouncy-nav-modal').toggleClass('fade-in', $bool).toggleClass('fade-out', !$bool).find('li:last-child').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
				$('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
				if (!$bool) $('.cd-bouncy-nav-modal').removeClass('fade-out');
				is_bouncy_nav_animating = false;
			});
			//判断css 动画是否开启.. 
			if ($('.cd-bouncy-nav-trigger').parents('.no-csstransitions').length > 0) {
				$('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
				is_bouncy_nav_animating = false;
			}
		}
	}

});	







$(document).ready(function(e) {
    $(".list a").first().addClass("cur");
	$(".box ul").not(":first").hide();
	$(".list a").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur")
		$(".box ul").eq($(this).index()).show().siblings().hide();	
	})
});





















	
