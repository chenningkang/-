
//alert(returnCitySN["cip"]+','+returnCitySN["cname"]); 
//alert(returnCitySN["cid"]+','+returnCitySN["cname"]); 
//alert(typeof(returnCitySN["cid"]));
obj=document.getElementsByClassName("icon idow");
//alert(obj[0]);
if(returnCitySN["cid"]=="110000"){ //��������
	obj[0].style.display="none";
}



liobj=document.getElementById("lids");
id1=document.getElementById("id1");
id2=document.getElementById("id2");
id3=document.getElementById("id3");
id4=document.getElementById("id4");

if(returnCitySN["cid"]=="110000"){ //��������
	liobj.style.display="none"; //���ʱ��Ӱ����
	//Ȼ��Ҫ�ı��С
    //width: 25%
	id1.style.width="25%";
	id2.style.width="25%";
	id3.style.width="25%";
	id4.style.width="25%";

}
