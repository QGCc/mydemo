
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	$('#loginForm').submit(function(){
		alert(1);
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
					location.href = '/index/index';
				}
			}
		});
		//阻止默认行为，还可以阻止冒泡
		//原生js中的return false 只能阻止默认行为，不能阻止冒泡
		return false;
	});

	//实现退出功能
	$('#logout').click(function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if(data.code == 200){
					location.href = '/login';
				}
			}
		});
	});