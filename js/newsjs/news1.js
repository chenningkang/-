
 $(function(){
	//var url ="http://47.91.167.130:8032/appInterface/news/newsList2.do?pageNo=0&pageSize=8";
	var url ="http://47.91.167.130:8032/appInterface/news/newsList2.do?pageNo=0&pageSize=5";
      $.ajax({
        data:{"type":"plw"},//参数
       // dataType: 'jsonp',
	    type:"GET",
		url,
        success: function(data) {
		//	alert(data.result[0].title);//这个就拿到了标题
		//alert(data.result.length);
		//alert(data.result[0].newsId);

	     for(i=0;i<data.result.length;i++){
				$(".news-ul").append("<li class='box ellipsis'>"
				+"<a href='javascript:void(0);' onclick='getnewstiltle(this);'  data-opid='"+data.result[i].newsId+"'>"
				+"<p class='ellipsis'>"+data.result[i].title+"</p>"
				+"</a>"
				+"</li>");

			}  

        }
      });
	});

     
	 

function getnewstiltle(obj){
	
	//var $obj = $(obj);
	//var aa=$obj.data("opid");;
	objs=obj;
	aa=objs.getAttribute("data-opid");
	//alert(aa);
	
	//var url ="http://47.91.167.130:8032/appInterface/news/newsList2.do?pageNo=0&pageSize=8";
	var url ="http://47.91.167.130:8032/appInterface/news/newsDetail2.do";
      $.ajax({
        data:{"newsId":aa},//参数
	    type:"GET",
		url:url,
        success: function(data) {
		//	alert(data);
		//	alert(data.result.content);//这个就拿到了标题    
			localStorage.setItem("keycontent", data.result.content);
			location="newsdetail.html";
        }
      });



}