require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery',
        cookie:'jquery-cookie/jquery.cookie',
        bootstrap:'bootstrap/js/bootstrap.min',
        nprogress:'nprogress/nprogress',
        echarts:'echarts/echarts.min',
        template:'artTemplate/template'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});