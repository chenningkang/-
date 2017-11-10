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
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLatelyLotteryResult2.do?type=ssq";
      $.ajax({
        data:{"type":"ssq"},//参数
       // dataType: 'jsonp',
	    type:"GET",
		url,
        success: function(data) {
		//	alert(data.result[0].number);
		// "number": "05,13,14,23,25,31,02",
			a=data.result[0].number;
			qihao=data.result[0].qihao;
			typeName=data.result[0].typeName;
			datelines=(data.result[0].dateline).substr(0,10);
			yi=a.substr(0,2);
			er=a.substr(3,2);
			sa=a.substr(6,2);
			si=a.substr(9,2);
			wu=a.substr(12,2);
			lu=a.substr(15,2);
			qi=a.substr(18,2);
		 //  alert(datelines);
		   $("#ssq").html(typeName+" "+"第"+qihao+"期");
		   $("#timeid").html(datelines);
           $("#id1").html(yi);
		   $("#id2").html(er);
		   $("#id3").html(sa);
		   $("#id4").html(si);
		   $("#id5").html(wu);
		   $("#id6").html(lu);
		   $("#id7").html(qi);
        }
      });
	});


 $(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLotteryResult2.do?type=ssq";
      $.ajax({
        data:{"type":"ssq"},//参数
       // dataType: 'jsonp',
	    type:"GET",
		url,
        success: function(data) {

			for(i=0;i<10;i++){

				a=data.result[i].number;
				qihao=data.result[i].qihao;
				datelines=(data.result[i].dateline).substr(0,10);
				yi=a.substr(0,2);
				er=a.substr(3,2);
				sa=a.substr(6,2);
				si=a.substr(9,2);
				wu=a.substr(12,2);
				lu=a.substr(15,2);
				qi=a.substr(18,2);
		
				$("#li1").append("<li id='li1'><a href='kaijiang002.html'>"
				+"<div class='tip'>"+"第"+qihao+"期"+"</div>"
				+"<time class='right'>"+datelines+"</time>"
				+"<div class='clearfix'>"
				+"<i class='red-spot'>"+yi+"</i>"
				+"<i class='red-spot'>"+er+"</i>"
				+"<i class='red-spot'>"+sa+"</i>"
				+"<i class='red-spot'>"+si+"</i>"
				+"<i class='red-spot'>"+wu+"</i>"
				+"<i class='red-spot'>"+lu+"</i>"
				+"<i class='blue-spot'>"+qi+"</i>"
				+"</div> <i class='icon right idetails'></i>"
				+"</a>"
				+"</li>");	

			}

        }
      });
	});