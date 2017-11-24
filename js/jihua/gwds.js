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
  
	//在页面循环写数据
	 $(function(){
		 // alert(1);
		var	url ="http://47.91.167.130:9082/pachong/pashujuofssc/gwds";
		  $.ajax({
		   // data:{"type":"plw"},//参数
		   // dataType: 'jsonp',
			type:"GET",
			url,
			success: function(data) {
			//	alert(data);
			//	alert(typeof(data));
			obj=eval('('+data+')');  //转成json对象
          //  alert(obj.list[0].apiname);
		//	alert(obj.list.length);
				for(i=0;i<obj.list.length-1;i++){

					zhouqi=obj.list[i].zhouqi;
					apiname=obj.list[i].apiname;
					number=obj.list[i].number;
					qihao=obj.list[i].qihao;
					opencode=obj.list[i].opencode;
					ready=obj.list[i].ready;
					resalt=obj.list[i].resalt;

					
					$("#li1").append("<li class='boxli'>"
						+"<span class='span1'>"+zhouqi+"期"+"</span>"
						+"<span class='span2'>"+apiname+"</span>"
						+"<span class='span3'>"+"【"+number+"】"+"</span>"
						+"<span class='span4'>"+qihao+"期"+"</span>"
						+"<span class='span5'>"+opencode+"</span>"
						+"<b>"+"第"+ready+"期"+"["+resalt+"]"+"</b>"
						+"</li>"
					
					);
				
				 }

			}
			
	    });
  });