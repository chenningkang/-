
  
	//在页面循环写数据
	 $(function(){
		//  alert(1);
		var	url ="http://localhost:8080/pachong/pashujuofssc/rmjh";
		  $.ajax({
		   // data:{"type":"plw"},//参数
		   // dataType: 'jsonp',
			type:"GET",
			url,
			success: function(data) {
			//	alert(data);
			//	alert(typeof(data));
			obj=eval('('+data+')');  //转成json对象
        // alert(obj.list[0].apiname);
		// alert(obj.list.length);
				for(i=0;i<obj.list.length;i++){

					apiname=obj.list[i].apiname;
					zhouqi=obj.list[i].zhouqi;
					zjl=obj.list[i].zjl;

					 $("#li1").append("<p>"
						+"<span class='span'>"+apiname+"</span>"
						+"<span class='span'>"+zhouqi+"期"+"</span>"
						+"<span class='span'>"+"中奖率"+zjl+"</span>"
						+"</p>"
					
					);

				}

			}
			
	    });
  });