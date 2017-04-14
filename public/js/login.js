
define(['jquery'],function($){
    $('#loginForm').submit(function(){
		//获取表单数据
		var formData = $(this).serialize();
		//调用接口
		$.ajax({
			type:'post',
			//使用动态代理/api
			url:'/api/login',
			data:formData,
			dataType:'json',
			success:function(data){
				// var tc_avator = data.result.tc_avator;
				// var tc_name = data.result.tc_name;
				//cookie可以实现页面间的数据跳转
				if(data.code == 200){
					//存储cookie(实现数据在不同页面共享)
					var info = JSON.stringify(data.result);
					$.cookie('loginInfo',info,{path:'/'});
					//重新定向到主页
					location.href = '/index/index';
				}
			}
		});
		//阻止默认行为，还可以阻止冒泡
		//原生js中的return false 只能阻止默认行为，不能阻止冒泡
		return false;
	});
});