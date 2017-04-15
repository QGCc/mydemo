define(['jquery','cookie'],function($){
	// NProgress.start();

	// NProgress.done();
//控制左侧导航菜单的折叠
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	var pathname = location.pathname;
	// console.log(pathname);
	// console.log($.cookie('PHPSESSID'));
	//验证用户是否登录
	if(!$.cookie('PHPSESSID') && pathname!='/' && pathname!='/login'){
		location.href = '/login';
	}
	
})
	