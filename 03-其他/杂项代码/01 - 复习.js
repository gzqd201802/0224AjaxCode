/*
原生 ajax
目标局部刷新页面， success();
等待数据到达 status 200 readyState 4 
监听这个状态就需要 onreadystatechang
发送请求 xhr.send()
先设置这个请求
初始化 xhr.open(type,url)
setRequestHeader
xhr 到底是个啥
var xhr = new XMLHttpRequest()

ajax 就是数据交互
data,dataType
============================
$.ajax({
    url,
    type,
    data,
    dataType,
    success,
    beforeSend 发送前数据验证
    timeout 请求超时
    error
    contentType 如果设为false 阻止默认请求头设置
    proccessData 如果设为 false 阻止将数据转换为字符串
    因为 二进制无需转换字符串也无需设置请求头
})
$.get $.post
url,data,success,dataType
===============================
form submit
阻止默认事件 跳转
表单序列化，jQuery serialize 
变成字符串 name=tom&age=12

=================================
模板引擎
1. 引入模板引擎库
2.准备模板跟数据
3. 生成字符串 htmlStr
4. 渲染到页面上

*/