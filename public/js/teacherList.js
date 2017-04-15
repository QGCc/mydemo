define(['jquery','template'],function($,template){
    //查询讲师的数据列表
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            console.log(data);
            if(data.code == 200){
                //返回成功，渲染讲师数据列表
                var html = template('teacherTpl',{list:data.result});
                $('#teacherList').html(html);
                //讲师注销/启用
                $('.ecTeacher').click(function(){
                    var td = $(this).parent('td');
                    var tc_id = td.attr('data_id');
                    var tc_status = td.attr('data_status');
                    var that = this;
                    $.ajax({
                        type:'post',
                        data:{tc_id:tc_id,tc_status:tc_status},
                        url:'/api/teacher/handle',
                        success:function(data){
                            if(data.code == 200){
                                //更新页面点击讲师的状态
                                td.attr('data_status',data.result.tc_status);
                                //修改讲师当前的状态内容
                                if(data.result.tc_status == 0){
                                    $(that).html('启用');
                                }else{
                                    $(that).html('注销');
                                }
                            }
                        }
                    });
                });
            }
        }
    });
});