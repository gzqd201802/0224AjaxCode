// 1. 引入模块
const http = require('http')
const bindRender = require('./bindRender')
const router = require('./router')
// 2. 创建服务器对象
var server = http.createServer()

// 3. 开启服务并监听端口
server.listen(3001,()=>{
  console.log('the server is running at http://127.0.0.1:3001');
})

// 4.注册请求事件,监听请求
server.on('request',(req,res)=>{
  bindRender(req,res)
  
  router(req,res)
})

