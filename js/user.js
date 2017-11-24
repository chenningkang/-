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
		var	url ="http://47.91.167.130:9082/pachong/user/alluser";
		  $.ajax({
		   // data:{"type":"plw"},//参数
		   // dataType: 'jsonp',
			type:"GET",
			url,
			success: function(data) {
				//alert(data.data[0].username);
				//alert(data.data.length);  //用户数量
				for(i=0;i<data.data.length;i++){

					

					
					$("#li1").append("<li class='boxli'>"
						+"<span class='span1'> 姓名  :  "+data.data[i].username+"</span>"
						+"<span class='span2'> 手机号  :  "+data.data[i].phone+"</span>"
						+"</li>"
					
					);
				
				 }  

			}
			
	    });
  });