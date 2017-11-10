  	$(function(){
		$('.layer').on('click',function(){
			$('.layer').hide();
			$('#datepicker').focus();
		});
		
		$(".kaij-table table").attr('style','');
		$('#datepicker').datepicker({dateFormat: "yyyy-mm-dd",weekStart: 1});
	
		$('#datepicker').change(function(){
			str = $(this).val();
						//	window.location.href = '5248609.html?time='+str;
							window.location.href = '#';
					});
	
		$('.stagehtml').on('click',function(event){
			event.stopPropagation();
			$(this).next().show();
		});
		$('body,html').on('click',function(){
			$('.stageb ul').hide();
		});
	
		$('.stageb li').on('click',function(){
			var str=$(this).data('value');
			$('.stagehtml').html(str);
			$(this).parent().show();
						//	window.location.href = '5248609.html?stage_number='+str;
							window.location.href = '#';
					});
	}); 

 
 $(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLatelyLotteryResult2.do?type=sd";
      $.ajax({
        data:{"type":"sd"},//参数
       // dataType: 'jsonp',
	    type:"GET",
		url,
        success: function(data) {
		//	alert(data.result[0].number);
			a=data.result[0].number;
			qihao=data.result[0].qihao;
			typeName=data.result[0].typeName;
			datelines=(data.result[0].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
		  // alert(datelines);
		   $("#qihao").html("第"+qihao+"期");
		   $("#timeid").html(datelines);
           $("#id1").html(yi);
		   $("#id2").html(er);
		   $("#id3").html(sa);
        }
      });
	});
	
 $(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLatelyLotteryResult2.do?type=sdsjh";
      $.ajax({
        data:{"type":"sdsjh"},//参数
       // dataType: 'jsonp',
	    type:"GET",
		url,
        success: function(data) {
		//	alert(data.result[0].number);
			a=data.result[0].number;
			qihao=data.result[0].qihao;
			typeName=data.result[0].typeName;
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
		 //  alert(datelines);
		   $("#qihao").html("第"+qihao+"期");
           $("#i1").html(yi);
		   $("#i2").html(er);
		   $("#i3").html(sa);
        }
      });
	});


 $(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLotteryResult2.do?type=sd";
      $.ajax({
        data:{"type":"sd"},//参数
       // dataType: 'jsonp',
	    type:"GET",
		url,
        success: function(data) {
			a=data.result[0].number;
			qihao=data.result[0].qihao;
			datelines=(data.result[0].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
		   $("#timeid1").html(datelines);
		   $("#ti1").html("第"+qihao+"期");
           $("#t11").html(yi);
		   $("#t12").html(er);
		   $("#t13").html(sa);

		   	a=data.result[1].number;
			qihao=data.result[1].qihao;
			datelines=(data.result[1].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
			$("#timeid2").html(datelines);
		   $("#ti2").html("第"+qihao+"期");
           $("#t21").html(yi);
		   $("#t22").html(er);
		   $("#t23").html(sa);
	
			a=data.result[2].number;
			qihao=data.result[2].qihao;
			datelines=(data.result[2].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
			$("#timeid3").html(datelines);
		   $("#ti3").html("第"+qihao+"期");
           $("#t31").html(yi);
		   $("#t32").html(er);
		   $("#t33").html(sa);
			
			a=data.result[3].number;
			qihao=data.result[3].qihao;
			datelines=(data.result[3].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
			$("#timeid4").html(datelines);
		   $("#ti4").html("第"+qihao+"期");
           $("#t41").html(yi);
		   $("#t42").html(er);
		   $("#t43").html(sa);

		   a=data.result[4].number;
			qihao=data.result[4].qihao;
			datelines=(data.result[4].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
			$("#timeid5").html(datelines);
		   $("#ti5").html("第"+qihao+"期");
           $("#t51").html(yi);
		   $("#t52").html(er);
		   $("#t53").html(sa);

		   	a=data.result[5].number;
			qihao=data.result[5].qihao;
			datelines=(data.result[5].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
			$("#timeid6").html(datelines);
		   $("#ti6").html("第"+qihao+"期");
           $("#t61").html(yi);
		   $("#t62").html(er);
		   $("#t63").html(sa);

		   	a=data.result[6].number;
			qihao=data.result[6].qihao;
			datelines=(data.result[6].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
			$("#timeid7").html(datelines);
		   $("#ti7").html("第"+qihao+"期");
           $("#t71").html(yi);
		   $("#t72").html(er);
		   $("#t73").html(sa);

		   	a=data.result[7].number;
			qihao=data.result[7].qihao;
			datelines=(data.result[7].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
			$("#timeid8").html(datelines);
		   $("#ti8").html("第"+qihao+"期");
           $("#t81").html(yi);
		   $("#t82").html(er);
		   $("#t83").html(sa);

		   	a=data.result[8].number;
			qihao=data.result[8].qihao;
			datelines=(data.result[8].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
			$("#timeid9").html(datelines);
		   $("#ti9").html("第"+qihao+"期");
           $("#t91").html(yi);
		   $("#t92").html(er);
		   $("#t93").html(sa);
		 
        }
      });
	});