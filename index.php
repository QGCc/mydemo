<?php
    // echo 123;
    // print_r($_SERVER);
    $path = 'index';
    $filename = 'index';
    //处理文件请求全路径
    if(array_key_exists('PATH_INFO',$_SERVER)){
        // echo 1;
        $url = $_SERVER['PATH_INFO'];
        echo $url;
        //分割字符串
        // $arr = explode('/',$path);
        //substr截取字符串，把第一个字符串截取了
        $arr = explode('/',substr($url,1));
        // print_r($arr);
        // echo $path;
        if(count($arr)==2){
            $path = $arr[0];//路径
            $filename = $arr[1];//文件名称
        }else{
            $filename = 'login';
        }
    }else{
         $filename = 'login';
        // echo 2;
    }
    //载入页面
    //拼接用.
    include('./view/'.$path.'/'.$filename.'.html');
?>