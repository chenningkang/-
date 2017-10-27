require.config({
    baseUrl: 'js/',
    waitSeconds : 30,   //����ȴ���������Ĭ����7��
    urlArgs: 's=20170602',
    paths: {
        jquery      : "libs/jquery-1.9.1.min",
		kindeditor  : "libs/kindeditor/kindeditor-all-min",
		kinzh       : "libs/kindeditor/lang/zh-CN",	
		exif        : "libs/exif",
		hammer      : "libs/hammer.min"				
    },
    shim: {
        underscore  : { exports : "_" },
        backbone    : {
            deps    : ["underscore","jquery"],
            exports : "Backbone"
        },
        localstorage: {
            deps    : ["underscore",'backbone'],
            exports : "localstorage"
        }
    }
});



