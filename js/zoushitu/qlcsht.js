 $(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLotteryResult2.do?type=qlc";
      $.ajax({
        data:{"type":"qlc"},//����
	    type:"GET",
		url,
        success: function(data) {

	for(i=0;i<9;i++){
		var qihao=data.result[i].qihao;		
		$("#divqh").append("<div class='td'>"+qihao.substr(2,5)+"</div>");	

			//����ط��Ȼ��ñ���	
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

							+"<td bgcolor='#bebeda'></td>"

				+"</tr>");
	}
		//���ñ���֮��Ȼ����ȥƥ�����֡�
			$("#tb1 tr").each(function(i){				
				a=data.result[i].number;   //01,13,20,23,25,26,28,18
				yi=a.substr(0,2);
				er=a.substr(3,2);
				sa=a.substr(6,2);
				si=a.substr(9,2);
				wu=a.substr(12,2);
				lu=a.substr(15,2);
				qi=a.substr(18,2);
				nq=a.substr(21,2);
				nn=31;

				$(this).find("td").eq(parseInt(yi)-1).html(yi);
				$(this).find("td").eq(parseInt(er)-1).html(er);
				$(this).find("td").eq(parseInt(sa)-1).html(sa);
				$(this).find("td").eq(parseInt(si)-1).html(si);
				$(this).find("td").eq(parseInt(wu)-1).html(wu);
				$(this).find("td").eq(parseInt(lu)-1).html(lu);
				$(this).find("td").eq(parseInt(qi)-1).html(qi);
				$(this).find("td").eq(parseInt(nn)-1).html(nq);
					
			});



        }
      });
	});