/*
    主页功能
*/

define(['jquery','echarts','template','cookie'],function($,echarts,template){

     var loginInfo = $.cookie('loginInfo');
        if(loginInfo){
            //把字符串转化为对象
            console.log(loginInfo);
            loginInfo = JSON.parse(loginInfo);
            var tpl = '<div class="avatar img-circle">'+
                             '<img src="{{tc_avatar}}">'+
                      '</div>'+
                      '<h4>{{tc_name}}</h4>';
             var render = template.compile(tpl); 
             var html = render(loginInfo);  
             $('.aside .profile').html(html)     ;
            // $('.aside .profile img').attr('src',loginInfo.tc_avatar);
            // $('.aside .profile h4').html(loginInfo.tc_name);
        }

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
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
});