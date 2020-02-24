/**
 * 封装时要考虑哪些因素
 * 1. 请求的类型  get/post  type
 * 2. 请求的目标地址  url
 * 3. 请求的参数  data
 * 4. 响应回来的数据以什么方式来接收  xhr.responseText  xhr.responseXML  
 *     后端开发人员会告诉我们,响应回去的数据是什么格式
 *     可以通过一个属性,人为的来指定以什么方式来处理接收的数据 dataType
 * 5. 传入一个执行函数 这个函数是根据后端响应回来的数据进行业务逻辑的处理  success
 */

 // 这种写法,不好,原因,参数是固定的,不够灵活,添加或是不写都不方便
 //  扩展起来也不灵活
//  function ajax(type,url,data,dataType,success){

//  }
// 如果直接用下面的方式来实现 的话,参数的灵活问题解决了
// 如果直接用ajax这样的封装函数,会造成变量的污染,如果函数内部又调用了另外的函数,体现的也不够直观
// function ajax(params){
//   var type = params.type
//   var data = param.data
// }

var $ = {
  convertToString:function(obj){
    var str = '';
    for (var key in obj) {
      str += key + "=" + obj[key] + "&"
      console.log(str);
    }
    return str.slice(0, -1) // "name=tom&age=20&gender=男&address=天河区"
  },
  ajax:function(params){
    // 1. 准备参数
    var type = params.type || 'get'    // 获取请求的类型
    var url = params.url || location.href    // 获取请求的目标地址  location.href 获取浏览器URL中的值
    var data = this.convertToString(params.data||{})   // 获取要发送的数据
    var dataType = params.dataType || 'text/plain'  //  指定以什么样的方式来处理后端响应回来的数据
    var success = params.success    //  调用这个函数来处理响应回来的数据

    // 2. 使用异步对象发送请求
    // 2.1 创建异步对象
    var xhr = new XMLHttpRequest()
    // 2.2 设置请求行
    if(type=='get'){
      url = url+'?'+data
      data = null
    }
    xhr.open(type, url)
    // 2.3 设置请求头
    if(type=='post'){
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    }
    // 2.4 设置请求体
    xhr.send(data)
    // 2.5 监视异步对象的状态
    xhr.onreadystatechange = function () {
      if(xhr.status==200&&xhr.readyState==4){
        var result;
        // 2.6 判断响应回来的数据格式
        if(dataType=='json'){
          result = JSON.parse(xhr.responseText)
        }else if(dataType=='xml'){
          result = xhr.responseXML
        }else {
          // 如果执行到这里,就默认后端返回的是纯字符串
          result = xhr.responseText;
        }

        // 2.7 调用函数处理数据
        console.log(result);
        console.log(typeof result);
        success && success(result)
      }
    }
  }
}

// $.ajax({
//   type:'get',
//   url:'/submit',
//   data:{
//     userName:'tom',
//     userPwd:123456
//   },
//   dataType:'xml',
//   success: render
// })

// function render(result){

// }