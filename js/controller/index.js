var url=document.getElementById('url').getAttribute('data-url');//��ȡ·��
switch(url){  
	case 'index'://��ҳ
		require(['models/index','models/banner'],function(index,banner){
			index.init();
			banner.banner('#home-banner');	
		
		});
	break;
// 	case 'fans'://����
//		require(['models/banner','models/fans'],function(banner,F){
//			banner.banner('#fans-banner');
//			F.init();			
//		});
//	break; 
	case 'Hotfans'://����
		require(['models/hotfans'],function(H){
			H.init();			
		});
	break;
	case 'user-fans'://�û�
		require(['models/hotfans'],function(H){
			H.init();			
		});
	break;
	case 'section'://�û�
		require(['models/section'],function(H){
			H.init();			
		});
	break;
	case 'fanspost'://����
		require(['models/fans','models/banner2'],function(F,Banner){
			F.init();	
			Banner.banner('#biaoqing');		
		});
	break;
	case 'login'://��¼
		require(['models/login'],function(Login){
			Login.init();	
		});
	break;
	case 'info-index'://��Ѷ
		require(['models/banner'],function(banner){
			banner.banner('#home-banner');	
		});
	break;
	case 'details'://��Ѷ����
		require(['models/details'],function(details){
			details.init();
		});
	break;
	case 'topic'://��̳����
		require(['models/topic'],function(topic){
			topic.init();
		});
	break;
	case 'user'://��������
		require(['models/user'],function(user){
			user.init();
		});
	break;
	case 'chat'://��������
		require(['models/chat'],function(chat){
			chat.init();
		});
	break;
	case 'user-home'://��������
		require(['models/home'],function(chat){
			chat.init();
		});
	break;
	

}
		
