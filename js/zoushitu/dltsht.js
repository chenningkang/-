 $(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLotteryResult2.do?type=dlt";
      $.ajax({
        data:{"type":"dlt"},//参数
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

							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"
							+"<td bgcolor='#FDFEE0'></td>"

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

							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"
							+"<td bgcolor='#FEE6DE'></td>"

							+"<td bgcolor='#bebeda'></td>"
							+"<td bgcolor='#bebeda'></td>"

				+"</tr>");
	}
		//画好表格之后，然后再去匹配数字。
			$("#tb1 tr").each(function(i){				
				a=data.result[i].number;   //10,16,25,26,29,01,05
				yi=a.substr(0,2);
				er=a.substr(3,2);
				sa=a.substr(6,2);
				si=a.substr(9,2);
				wu=a.substr(12,2);

				lu=a.substr(15,2);
				qi=a.substr(18,2);
				nq=36;
				nx=37;

				$(this).find("td").eq(parseInt(yi)-1).html(yi);
				$(this).find("td").eq(parseInt(er)-1).html(er);
				$(this).find("td").eq(parseInt(sa)-1).html(sa);
				$(this).find("td").eq(parseInt(si)-1).html(si);
				$(this).find("td").eq(parseInt(wu)-1).html(wu);

				$(this).find("td").eq(parseInt(nq)-1).html(lu);
				$(this).find("td").eq(parseInt(nx)-1).html(qi);
					
			});



        }
      });
	});