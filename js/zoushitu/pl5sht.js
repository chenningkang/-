 $(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLotteryResult2.do?type=plw";
      $.ajax({
        data:{"type":"plw"},//参数
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

				+"</tr>");
	}
		//画好表格之后，然后再去匹配数字。
			$("#tb1 tr").each(function(i){				
				a=data.result[i].number;   //7,2,3,1,4

				yi=a.substr(0,1);
				er=a.substr(2,1);
				sa=a.substr(4,1);
				si=a.substr(6,1);
				wu=a.substr(8,1);


				$(this).find("td").eq(parseInt(yi)).html(yi);
				$(this).find("td").eq(parseInt(er)+10).html(er);
				$(this).find("td").eq(parseInt(sa)+20).html(sa);
				$(this).find("td").eq(parseInt(si)+30).html(si);
				$(this).find("td").eq(parseInt(wu)+40).html(wu);
					
			});



        }
      });
	});