define(['jquery','template','cookie'],function($,template){
	// NProgress.start();

	// NProgress.done();
//控制左侧导航菜单的折叠
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	var loginInfo = $.cookie('loginInfo');
        if(loginInfo){
            //把字符串转化为对象
            // console.log(loginInfo);
			//把JSON对象转化为对象
            loginInfo = JSON.parse(loginInfo);
			// console.log(loginInfo);
            var tpl = '<div class="avatar img-circle">'+
                             '<img src="{{tc_avatar}}">'+
                      '</div>'+
                      '<h4>{{tc_name}}</h4>';
             var render = template.compile(tpl); 
             var html = render(loginInfo);  
             $('.aside .profile').html(html);
			 //由模板引擎替换
            // $('.aside .profile img').attr('src',loginInfo.tc_avatar);
            // $('.aside .profile h4').html(loginInfo.tc_name);
        }

	var pathname = location.pathname;
	console.log(pathname);
	// console.log($.cookie('PHPSESSID'));
	//验证用户是否登录
	if(!$.cookie('PHPSESSID') && pathname!='/' && pathname!='/login'){
		location.href = '/login';
	}
	
})
	