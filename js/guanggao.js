		function aa(){
		var arr= ['彩票计划请加微信号：ddd获取',
				  '彩票计划请加xxxx号：ccc获取',
				  '彩票计划请加yyyy号：bbb获取',
				  '彩票计划请cccccc号：aaa获取',
				  '彩票计划请加qqqq号：xxx获取'];  
		  da=document.getElementById('onlyid');
			for(var i = 0 ; i < arr.length ; i++){  
			var j = 0;  
		　　setTimeout(function(){  
				da.innerHTML=arr[j++];
			  
		　　},i*2000);  
		}  
		}
        aa();
		setInterval(aa,10000);