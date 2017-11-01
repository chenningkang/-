// JavaScript Document
$(window).ready(function() {

	//�ص����� 
	$(window).scroll(function(){
		var top=$(document).scrollTop();
		var hei=$(window).height();
		if(top>=hei){
			$('#top_btn').show();
		}else{
			$('#top_btn').hide();
		}	
	});
	$('#top_btn').on('click',function(){
		$('html, body').animate({
			scrollTop: '0px'
		});
	});
		
    //�����б�ҳ
	$('#iscreen').on('click',function(){
		$('.ui-alert-layer').show();
		$('.ui-alert-warp').show();
		$('body').css({'overflow':'hidden'});
	});
	$('.ul-box .btn').on('click',function(){
		if($(this).is('.on')){
			$(this).removeClass('on');
		}else{
			$(this).addClass('on');
		}
		amsg();
	});
	
	$('#select').on('click',function(){
		$('.ul-box .btn').addClass('on');
		amsg();
	});
	
	$('#reverse').on('click',function(){
		for(var i=0;i<$('.ul-box .btn').length;i++){
			if($('.ul-box .btn').eq(i).is('.on')){
				$('.ul-box .btn').eq(i).removeClass('on');
			}else{
				$('.ul-box .btn').eq(i).addClass('on');
			}
		}
		amsg();
	});
	
	$('#ui-btn').on('click',function(){
		$('.ui-alert-layer').hide();
		$('.ui-alert-warp').hide();
	});	
	
	var visible=$('section:visible');
	
	//��������
	$('.detail-nav span').on('click',function(){
		
		$('.detail-nav span').removeClass('on');
		$(this).addClass('on');
		if($(this).index()==0){
			$('.mover-warp').hide();
			$('.detail-warp').show();	
		}else{
			$('.mover-warp').show();
			$('.detail-warp').hide();
		}
		visible=$('section:visible');
	});
	
	$('.province').change(function(){
		var shu = $(this).val();
		$('.news-tit time').hide();
		$('.t'+shu).show();
		$('.newsjia  ul li').hide();
		$('.li'+shu).show();
	});
	
	$(".stage").change(function(){
		var val = $(this).val();
		if (val) {
			$("#stage_number").submit();
		}
	});
	
	
	
	//˫ɫ��
	$("#inav").on('click',function(){
		
		if($(this).find('i').is('.colse')){
			visible.show();
			$('.ui-alert-layer').hide();
			$('.inav-warp').hide();
			$('.ui-alert-warp').hide();
			$('body,html').css({'overflow':'auto'});
			$('.inav').removeClass('colse');
			$('#header').css({'position':'relative'});
		}else{
			visible.hide();
			$('.ui-alert-layer').show();
			$('.inav-warp').show();
			$('#header').css({'position':'absolute',});
			$('body,html').css({'overflow':'hidden'});
			$('.inav').addClass('colse');
			
		}
	});
	

	
	$('#inav-btn,.ui-alert-layer').on('click',function(){
		$('.ui-alert-layer').hide();
		$('.inav-warp').hide();
		$('.ui-alert-warp').hide();
		$('body').css({'overflow':'auto'});
		$('.inav').removeClass('colse');

	});
	
	/*
	$('#content img').on('click',function(){
		var top=$(this).height()/-2;
		$(this).css({'margin-top':top});
		$(this).addClass('picimg');
		$('.heibg').show();
	});*/
	
	$('body').on('click','.heibg',function(){
		$('.picimg').css({'margin-top':'0px'});
		$('.picimg').removeClass('picimg');
		$('.heibg').hide();
	});
	
	//��ҳ����
	$('#kaijnav a').on('click',function(){
		var index=$(this).index();
		$('#kaijnav a').removeClass('on');
		$(this).addClass('on');
		$('.kaij-ul').removeClass('on');
		$('.kaij-ul').eq(index).addClass('on');
	});
	
	//hbox();
	
	
	$('.filter-qi span').on('click',function(){
			var name=$(this).data('name');
	
			console.log(name);
	});
	
	
	$('.filter-fn span').on('click',function(){
		var name=$(this).data('name');
		//console.log(name);
		var index=true;
		if($(this).is('.on')){
			$(this).removeClass('on');
			index=false;
		}else{
			$(this).addClass('on');
			index=true;
		}
		
		switch(name)
		{
			case 'brokenline':
				chartbase.brokenline(index);
			break;

			case 'missing':
				chartbase.missing(index);
			break;

			case 'layered':
				chartbase.layered(index);
			break;

			case 'heavynumber':
				chartbase.heavynumber(index);
			break;

			case 'leven':
				chartbase.leven(index);
			break;

			case 'jumpnumber':
				chartbase.jumpnumber(index);
			break;
		}
	});
	
	
	navmenu();
	
	
	/*ad*/
	/*var t=new Date().getDate();
	if(localStorage.time!=t){*/
		
	var u = navigator.userAgent;
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios�ն�
	if(isiOS){
		$('.guidea').attr('href','https://itunes.apple.com/cn/app/%E4%B8%87%E5%BD%A9%E5%90%A7/id1078869616?mt=8');
	}
	
	/*�ƶ�������*/
	if(isMobile()){

		var ticket=getCookie('ticket');
		$.get('/upload/open_ad.txt',function (data){
			var open_ad=eval('('+data+')').open_ad;
			if(open_ad==2){
				$('.showpic-1,.showpic-2').css({'display':'block'});
			}else if(ticket&&open_ad==1){
				$('.showpic-1,.showpic-2').css({'display':'block'});
			}else{
			}
		})
		
		/*ֻ�����ʿ������ع��*/
		//$('.guide-bottom').show().animate({'bottom':'0px'},500)
		$('.guide-clsoe').on('click',function(){
			$('.guide-bottom').animate({'bottom':'-60px'},500,function(){
				$('.guide-bottom').remove();
				var time=new Date().getDate();
				localStorage.time=time;
			})
		})		
	
	}	
	//}
	
	var r=/ticket=[\w]+/g;
	var cookie=document.cookie;
	var ticket=cookie.match(r);
	if(ticket){
		ticket=ticket[0].substr(7);
	}
	if(ticket){
		$.get('/fm/memberinfo',{'ticket':ticket},function(data){
			data=eval('('+data+')');
			if (data.code == 1) {
				$('.iuser').html('<img alt="' + data.data.nickname + '" style="width: 100%; border-radius: 50%; overflow: hidden;" src="' + data.data.sculpture + '">');
			}
		})
	}
	
	setInterval(function(){
		$('.notice_list').animate({'marginTop':'-36px'},function(){
			$(this).append($(this).find('li').eq(0).clone());
			$(this).find('li').eq(0).remove();
			$(this).css({'marginTop':'0px'});
		});
	},2000)
	
});

function getCookie(name){
	var arr= document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		//�ٴ��и������
		var shu=arr[i].indexOf('=');
		var arrb1=arr[i].substring(0,shu);
		var arrb2=arr[i].substring(shu+1);
		if(arrb1== name ){
			return unescape(arrb2);
		}
	}
	return ;//û���ҵ�Ϊ��
}
function setCookie(name,value,iDay,domain){//����cookie�������ƣ�ֵ������ʱ����Ϊ��λ��
	if(!domain)
	{
		domain=window.location.hostname;
	}
	var oDate=new Date();
	//����ʱ��
	oDate.setDate(oDate.getDate()+iDay);
	document.cookie=name+'='+escape(value)+';expires='+oDate.toGMTString()+';domain='+domain;
}
function removeCookie(name){//ɾ����cookie
	setCookie(name,1,-1);
}


var chartbase={
	brokenline:function(index){//����
		if(index){	
			var _this=this;
		var border={};//��װҪ��������
		var lan=$('.lan');
		for(var i=0;i<lan.length;i++){
			var lgroup=$(lan[i]).attr('lgroup');
			var color=$(lan[i]).attr('lcolor');
			var top=lan[i].offsetTop;
			var left=lan[i].offsetLeft;
			if(border[lgroup]){
				border[lgroup].push({'top':top,'left':left,'color':color});
			}else{
				border[lgroup]=[];
				border[lgroup].push({'top':top,'left':left,'color':color});
				
			}
			//console.log('top:'+top+';left:'+left);
			
		}
		
		//���߽�����������
		for(var i in border){
			for(var b in border[i]){
				var dian1=border[i][b];//��1
				var dian2=border[i][(b*1)+1];//��2
				
				if(dian2){//���һ������Ҫ����
					var top=Math.min(dian1.top,dian2.top)+10;
					var left=Math.min(dian1.left,dian2.left)+12;
					var wb=dian2.left-dian1.left;
					var hb=dian2.top-dian1.top;
					var w=Math.abs(dian2.left-dian1.left);
					var h=Math.abs(dian2.top-dian1.top);
					if(w==0){ w=1;}
					if(h==0){ h=1;}
					var color=dian1.color;
					
					if(wb<0){//���ǰ��˳��
						var d1x=w-5;
						var d1y=0;
						var d2x=5;
						var d2y=h;
					}else{
						var d1x=5;
						var d1y=0;
						var d2x=w-5;
						var d2y=h;
					}					
					_this.createcanvas(top,left,w,h,d1x,d1y,d2x,d2y,color);
					//console.log('top:'+top+';left:'+left+';w:'+w+';h'+h);
				}
				
			}
			
		}	
		}else{
			$('canvas.q').remove();
		}
		
		
	},
	createcanvas:function(top,left,w,h,d1x,d1y,d2x,d2y,color){
		var c=document.createElement("canvas");
		var ctx=c.getContext("2d");
		c.width=w;
		c.height=h;
		ctx.strokeStyle=color;
		ctx.moveTo(d1x,d1y);
		ctx.lineTo(d2x,d2y);
		c.setAttribute("class", "q"); 
		$(c).css({'left':left+'px','top':top+'px'});
		ctx.stroke();
		$('.header-con').append(c);
	},
	missing:function(index){//��©
		if(index){
			$('.Y').addClass('C');
		}else{
			$('.Y').removeClass('C');
		}
		
	},
	layered:function(index){//�ֲ�
		if(index){
			$('.C0').addClass('C1');
		}else{
			$('.C0').removeClass('C1');
		}		
	},
	heavynumber:function(index){//�غ�
		if(index){
			$('.CH_0').addClass('CH_1');
		}else{
			$('.CH_0').removeClass('CH_1');
		}		
		
	},
	leven:function(index){//����
		if(index){
			$('.L_0').addClass('L_1');
		}else{
			$('.L_0').removeClass('L_1');
		}
	},
	jumpnumber:function(index){//�ֲ�
		if(index){
			$('.tdbck').show();
		}else{
			$('.tdbck').hide();
		}
	}
}


function hbox(){
	var h=window.innerHeight;
	var oimg=$('.header-con')[0];
	var t=oimg.offsetTop;
	while(oimg = oimg.offsetParent) {
		t += oimg.offsetTop; //���Ӹ��������ϱ߾�
	}
	var box_h=h-t;
	//console.log(box_h);
	$('.header-con,.qihao-con').height(box_h);
	
	$('.header-con,.qihao-con').scroll(function(){
		var top=$(this).scrollTop();
		$('.qihao-con').scrollTop(top);
		$('.header-con').scrollTop(top);
	});
	
	var w=$('#chartData tr').width();
	$('.header_br').width(w);
	
}

function navmenu(){
	var index=$('.nowrap .on').index();
	var oshu=$('.nowrap a').length; 
	var obox=$('.nowrap');
	
	if(index>=1&&index<oshu-3){
			index=index-1;
	}else if(index>=oshu-3){
		index=oshu-4;
	}else{
		index=0;	
	}
	var left=$(window).width()*0.25*index;
	$('.sub-menu').animate({'scrollLeft':left+'px'});	
}

function amsg(){//��ʾѡ����
	if($('.ul-box').find('.on').length>0){
		$('.tishi').hide();
	}else{
		$('.tishi').show();
	};
}

function isMobile(){
	var sUserAgent= navigator.userAgent.toLowerCase(),
		bIsIpad= sUserAgent.match(/ipad/i) == "ipad",
		bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os",
		bIsMidp= sUserAgent.match(/midp/i) == "midp",
		bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
		bIsUc= sUserAgent.match(/ucweb/i) == "ucweb",
		bIsAndroid= sUserAgent.match(/android/i) == "android",
		bIsCE= sUserAgent.match(/windows ce/i) == "windows ce",
		bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile",
		bIsWebview = sUserAgent.match(/webview/i) == "webview";
	return (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM);
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "#";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
