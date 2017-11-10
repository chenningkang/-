window.addEventListener('DOMContentLoaded', function (){
	var shuping = 'onorientationchange' in window ? 'orientationchange' : 'resize';
	var isAndorid = /(Android)/i.test(navigator.userAgent);
	var timer = null;

	//��������
	function setFontSize(){
		var w = window.innerWidth;
		//���ͼ �����1080  --------------------> ��Ӧ1242, 1rem = 100px;(css������)
		document.documentElement.style.fontSize = 100*w/1242 + 'px';
	}
	setFontSize();

	//�ֻ�������ʱ �ı��С��Andorid�ֻ��л����ӳ� �ʿ���ʱ��
	window.addEventListener(shuping, function (){
		clearTimeout(timer);
		timer = setTimeout(setFontSize, isAndorid?300:0);
	}, false);
}, false);



	
$(function() {
	var is_bouncy_nav_animating = false;
	//�����˵�
	$('.cd-bouncy-nav-trigger').on('click', function() {
		
		triggerBouncyNav(true);
	});
	//�رղ˵�
	$('.cd-bouncy-nav-modal .cd-close').on('click', function() {
		triggerBouncyNav(false);
	});
	$('.cd-bouncy-nav-modal').on('click', function(event) {
		
		if ($(event.target).is('.cd-bouncy-nav-modal')) {
			
			triggerBouncyNav(false);
		}
	});
function triggerBouncyNav($bool) {
		//�����û�ж���
		if (!is_bouncy_nav_animating) {
			is_bouncy_nav_animating = true;
			//�л��˵�����
			$('.cd-bouncy-nav-modal').toggleClass('fade-in', $bool).toggleClass('fade-out', !$bool).find('li:last-child').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
				$('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
				if (!$bool) $('.cd-bouncy-nav-modal').removeClass('fade-out');
				is_bouncy_nav_animating = false;
			});
			//�ж�css �����Ƿ���.. 
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





















	
