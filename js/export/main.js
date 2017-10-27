//先加载配置文件
require(['js/config/index.js'],function(){
	//此时所有请求路径基于config里面排至的baseUrl了
	require(['js/controller/index.js']);
});