
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
		   $("#fc3d").html(typeName+" "+"第"+qihao+"期");
           $("#id11").html(yi);
		   $("#id12").html(er);
		   $("#id13").html(sa);
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
		   $("#sdsjh").html(typeName+" "+"第"+qihao+"期");
           $("#i21").html(yi);
		   $("#i22").html(er);
		   $("#i23").html(sa);
        }
      });
	});

	$(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLatelyLotteryResult2.do?type=qlc";
      $.ajax({
        data:{"type":"qlc"},//参数
       // dataType: 'jsonp',
	    type:"GET",
		url,
        success: function(data) {
		//	alert(data.result[0].number);
		// "number": "01,05,08,15,22,23,30,24",
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
			ba=a.substr(21,2);
		 //  alert(datelines);
		   $("#qlc").html(typeName+" "+"第"+qihao+"期");
           $("#id31").html(yi);
		   $("#id32").html(er);
		   $("#id33").html(sa);
		   $("#id34").html(si);
		   $("#id35").html(wu);
		   $("#id36").html(lu);
		   $("#id37").html(qi);
		   $("#id38").html(ba);
        }
      });
	});


	$(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLatelyLotteryResult2.do?type=dlt";
      $.ajax({
        data:{"type":"dlt"},//参数
       // dataType: 'jsonp',
	    type:"GET",
		url,
        success: function(data) {
		//	alert(data.result[0].number);
		// "number": "05,13,14,23,25,31,02",
			a=data.result[0].number;
			qihao=(data.result[0].qihao).substr(2);
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
		   $("#dlt").html(typeName+" "+"第"+qihao+"期");
           $("#id41").html(yi);
		   $("#id42").html(er);
		   $("#id43").html(sa);
		   $("#id44").html(si);
		   $("#id45").html(wu);
		   $("#id46").html(lu);
		   $("#id47").html(qi);
        }
      });
	});

$(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLatelyLotteryResult2.do?type=pls";
      $.ajax({
        data:{"type":"pls"},//参数
       // dataType: 'jsonp',
	    type:"GET",
		url,
        success: function(data) {
		//	alert(data.result[0].number);
			a=data.result[0].number;
			qihao=(data.result[0].qihao).substr(2);
			typeName=data.result[0].typeName;
			datelines=(data.result[0].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
		 //  alert(datelines);
		   $("#pls").html(typeName+" "+"第"+qihao+"期");
           $("#id51").html(yi);
		   $("#id52").html(er);
		   $("#id53").html(sa);
        }
      });
	});


		
	$(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLatelyLotteryResult2.do?type=plw";
      $.ajax({
        data:{"type":"plw"},//参数
       // dataType: 'jsonp',
	    type:"GET",
		url,
        success: function(data) {
		//	alert(data.result[0].number);
		// "number": "9,0,2,2,7",
			a=data.result[0].number;
			qihao=(data.result[0].qihao).substr(2);
			typeName=data.result[0].typeName;
			datelines=(data.result[0].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
			si=a.substr(6,1);
			wu=a.substr(8,1);

		 //  alert(datelines);
		   $("#plw").html(typeName+" "+"第"+qihao+"期");
		//   $("#timeid").html(datelines);
           $("#id61").html(yi);
		   $("#id62").html(er);
		   $("#id63").html(sa);
		   $("#id64").html(si);
		   $("#id65").html(wu);
        }
      });
	});

		$(function(){
	var	url ="http://47.91.167.130:8032/appInterface/lottery/findLatelyLotteryResult2.do?type=qxc";
      $.ajax({
        data:{"type":"qxc"},//参数
       // dataType: 'jsonp',
	    type:"GET",
		url,
        success: function(data) {
		//	alert(data.result[0].number);
		//"number": "9,4,1,4,1,9,6",
			a=data.result[0].number;
			qihao=(data.result[0].qihao).substr(2);
			typeName=data.result[0].typeName;
			datelines=(data.result[0].dateline).substr(0,10);
			yi=a.substr(0,1);
			er=a.substr(2,1);
			sa=a.substr(4,1);
			si=a.substr(6,1);
			wu=a.substr(8,1);
			lu=a.substr(10,1);
			qi=a.substr(12,1);
		 //  alert(datelines);
		   $("#qxc").html(typeName+" "+"第"+qihao+"期");
           $("#id71").html(yi);
		   $("#id72").html(er);
		   $("#id73").html(sa);
		   $("#id74").html(si);
		   $("#id75").html(wu);
		   $("#id76").html(lu);
		   $("#id77").html(qi);
        }
      });
	});