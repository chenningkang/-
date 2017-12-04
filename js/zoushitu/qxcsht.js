 $(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLotteryResult2.do?type=qxc";
      $.ajax({
        data:{"type":"qxc"},//参数
	    type:"GET",
		url,
        success: function(data) {

	for(i=0;i<9;i++){
		var qihao=data.result[i].qihao;		
		$("#divqh").append("<div class='td'>"+qihao.substr(2,5)+"</div>");	

			//这个地方先画好表格	
				$("#tb1").append(
					"<tr align='center'>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"


							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"


							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"

							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"


							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"

							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"
							+"<td bgcolor='#7f9ea9'></td>"

							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"

				+"</tr>");
	}
		//画好表格之后，然后再去匹配数字。
			$("#tb1 tr").each(function(i){				
				a=data.result[i].number;   //0,6,9,1,1,0,7

				yi=a.substr(0,1);
				er=a.substr(2,1);
				sa=a.substr(4,1);
				si=a.substr(6,1);
				wu=a.substr(8,1);
				lu=a.substr(10,1);
				qi=a.substr(12,1);


				$(this).find("td").eq(parseInt(yi)).html(yi);
				$(this).find("td").eq(parseInt(er)+10).html(er);
				$(this).find("td").eq(parseInt(sa)+20).html(sa);
				$(this).find("td").eq(parseInt(si)+30).html(si);
				$(this).find("td").eq(parseInt(wu)+40).html(wu);
				$(this).find("td").eq(parseInt(lu)+50).html(lu);
				$(this).find("td").eq(parseInt(qi)+60).html(qi);
					
			});



        }
      });
	});